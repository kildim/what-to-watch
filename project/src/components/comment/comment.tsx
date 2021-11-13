import {CommentType} from '../../types/types';
import {formatCommentDate} from '../../utils/utils';

type CommentProps = {comment: CommentType};

function Comment( props: CommentProps):JSX.Element {
  const {comment} = props;
  const commentDate = new Date(comment.date);

  return (
    <div className="review">
      <blockquote className="review__quote">

        {/*TODO избавиться от инлайн стилей, вынести их в константу*/}
        <p className="review__text" style={{
          wordBreak: 'break-all',
        }}
        >
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
