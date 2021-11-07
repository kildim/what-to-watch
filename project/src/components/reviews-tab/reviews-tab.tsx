import Comment from '../comment/comment';
import {CommentType} from '../../types/types';

type ReviewsTabProps = {
  comments: CommentType[]
}

const FILM_CARD_REVIEWS_STYLE = {
  paddingTop: '20px',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  columnGap: '60px',

};

function ReviewsTab(props: ReviewsTabProps): JSX.Element {
  const {comments} = props;

  return (
    <div className="film-card__reviews film-card__row" style={FILM_CARD_REVIEWS_STYLE}>
      {comments.map((comment) => (<Comment key={comment.id}/>))}
    </div>
  );
}

export default ReviewsTab;
