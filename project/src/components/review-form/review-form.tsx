import { ChangeEvent, FormEvent, useState } from 'react';
import classNames from 'classnames';
import { postReview } from '../../store/api-actions';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import {getIsReviewPosting} from '../../store/reducers/status-reducer/selectors';

const ReviewConfig = {
  maxRating: 10,
  minRatingBound: 0,
  minPostLength: 50,
  maxPostLength: 400,
};

const DEFAULT_RATING = Array(ReviewConfig.maxRating)
  .fill(null)
  .map(() => false);

function ReviewForm(): JSX.Element {
  const isReviewPosting = useSelector(getIsReviewPosting);
  const dispatch = useDispatch();
  const [rating, setRating] = useState(DEFAULT_RATING);
  const [review, setReview] = useState('');
  const { id } = useParams<{ id: string }>();

  const getRating = (): number =>
    rating.findIndex((ratingElement) => ratingElement) + 1;

  const isValidToPost = () =>
    getRating() > ReviewConfig.minRatingBound &&
    review.length >= ReviewConfig.minPostLength &&
    review.length <= ReviewConfig.maxPostLength;

  const SUBMIT_STYLE = classNames('add-review__btn', {
    'visually-hidden': !isValidToPost(),
  });

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
    // onSubmit({ rating: ratingValue, comment: review }, id);
    dispatch(postReview({comment: review, rating: ratingValue }, id));
  };

  const RATING_INPUTS = Array(ReviewConfig.maxRating)
    .fill(null)
    .map((value, index) => {
      const INPUT_VALUE = (ReviewConfig.maxRating - index).toString();
      return (
        <>
          <input
            className="rating__input"
            id={`star-${INPUT_VALUE}`}
            type="radio"
            name="rating"
            value={INPUT_VALUE}
            onChange={onChangeInputHandler}
            disabled={isReviewPosting}
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

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          onChange={onInputReviewTextHandler}
          disabled={isReviewPosting}
        />
        <div className="add-review__submit">
          <button
            className={SUBMIT_STYLE}
            type="submit"
            disabled={isReviewPosting}
          >
            Post
          </button>
        </div>
      </div>
    </form>
  );
}

export default ReviewForm;
