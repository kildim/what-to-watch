import {StateType} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';
import Comment from '../comment/comment';

const FILM_CARD_REVIEWS_STYLE = {
  paddingTop: '20px',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  columnGap: '60px',

};

const mapStateToProps = ({comments}: StateType) => ({
  comments,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;


function ReviewsTab(props: PropsFromRedux): JSX.Element {
  const {comments} = props;

  // eslint-disable-next-line no-console
  console.log(comments);

  return (
    <div className="film-card__reviews film-card__row" style={FILM_CARD_REVIEWS_STYLE}>
      {comments.map((comment) => (<Comment key={comment.id}/>))}
    </div>
  );
}

export  {ReviewsTab};
export default connector(ReviewsTab);
