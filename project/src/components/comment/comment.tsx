import {CommentType} from '../../types/types';

type CommentProps = {comment: CommentType};

const DATE_FORMAT_OPTIONS = {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
};

function Comment( props: CommentProps):JSX.Element {
  const {comment} = props;
  const commentDate = new Date(comment.date);
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text" style={{wordBreak: 'break-all'}}>
          {comment.comment}
        </p>

        <footer className="review__details">
          <cite className="review__author">{comment.user.name}</cite>
          <time className="review__date" dateTime="2015-11-18">
            {commentDate.toLocaleDateString('en-US', DATE_FORMAT_OPTIONS as Intl.DateTimeFormatOptions)}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{comment.rating}</div>
    </div>
  );
}

export default Comment;
