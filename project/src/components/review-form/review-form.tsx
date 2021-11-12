import { ChangeEvent, FormEvent, useState } from 'react';
import classNames from 'classnames';
import {postReview} from '../../store/api-actions';
import {ThunkAppDispatch} from '../../types/action';
import {connect, ConnectedProps} from 'react-redux';
import {PostCommentType} from '../../types/types';
import {useParams} from 'react-router-dom';

const MAX_RATING = 10;
const DEFAULT_RATING = Array(MAX_RATING)
  .fill(null)
  .map(() => false);
const MIN_RATING_BOUND = 0;
const MIN_POST_LENGTH = 50;
const MAX_POST_LENGTH = 400;

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onSubmit({rating, comment}: PostCommentType, id: string) {
    dispatch(postReview({rating, comment}, id));
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function ReviewForm(props: PropsFromRedux) {
  const {onSubmit} = props;

  const [rating, setRating] = useState(DEFAULT_RATING);
  const [review, setReview] = useState('');
  const {id} = useParams<{id: string}>();

  const getRating = (): number => rating.findIndex((ratingElement) => ratingElement) +1;

  const isValidToPost = () =>
    getRating() > MIN_RATING_BOUND &&
    review.length >= MIN_POST_LENGTH &&
    review.length <= MAX_POST_LENGTH;

  const onChangeInputHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const indexOfChecked = Number(target.value) - 1;
    setRating(
      rating.map((member, memberIndex) => memberIndex === indexOfChecked),
    );
  };
  const onInputReviewTextHandler = ({
    target,
  }: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(target.value);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const ratingValue = String(getRating());
    onSubmit({rating: ratingValue, comment: review}, id);
  };

  const RATING_INPUTS = Array(MAX_RATING)
    .fill(null)
    .map((value, index) => {
      const INPUT_VALUE = (MAX_RATING - index).toString();
      return (
        <>
          <input
            className="rating__input"
            id={`star-${INPUT_VALUE}`}
            type="radio"
            name="rating"
            value={INPUT_VALUE}
            onChange={onChangeInputHandler}
          />
          <label className="rating__label" htmlFor={`star-${INPUT_VALUE}`}>
            `Rating ${INPUT_VALUE}`
          </label>
        </>
      );
    });

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
      <div className="rating">
        <div className="rating__stars">{RATING_INPUTS}</div>
      </div>

      <p>{isValidToPost()}</p>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          onChange={onInputReviewTextHandler}
        />
        <div className="add-review__submit">
          <button
            className={classNames('add-review__btn', {
              'visually-hidden': !isValidToPost(),
            })}
            type="submit"
          >
            Post
          </button>
        </div>
      </div>
    </form>
  );
}

export { ReviewForm };
export default connector(ReviewForm);
