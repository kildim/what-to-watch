import { CommentType } from '../../types/types';
import { formatCommentDate } from '../../utils/utils';
import { CSSProperties } from 'react';

type CommentProps = { comment: CommentType };

const REVIEW_TEXT_STYLE: CSSProperties = {
  wordBreak: 'break-all',
};

function Comment(props: CommentProps): JSX.Element {
  const { comment } = props;
  const commentDate = new Date(comment.date);

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text" style={REVIEW_TEXT_STYLE}>
          {comment.comment}
        </p>

        <footer className="review__details">
          <cite className="review__author">{comment.user.name}</cite>
          <time className="review__date" dateTime={commentDate.toISOString()}>
            {formatCommentDate(commentDate)}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{comment.rating}</div>
    </div>
  );
}

export default Comment;
