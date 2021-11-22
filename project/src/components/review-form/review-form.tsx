import { ChangeEvent, FormEvent, useState } from 'react';
import classNames from 'classnames';
import { postReview } from '../../store/api-actions';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getIsReviewPosting } from '../../store/reducers/status-reducer/selectors';
import ReviewStar from './review-star';

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

  const handleReviewStarClick = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const indexOfChecked = Number(target.value) - 1;
    setRating(
      rating.map((member, memberIndex) => memberIndex === indexOfChecked),
    );
  };
  const handleReviewTextChange = ({
    target,
  }: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(target.value);
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const ratingValue = String(getRating());
    dispatch(postReview({ comment: review, rating: ratingValue }, id));
  };

  const starsInputs = Array(ReviewConfig.maxRating)
    .fill(null)
    .map((_, index) => {
      const inputValue = (ReviewConfig.maxRating - index).toString();
      return (
        <ReviewStar
          isReviewPosting={isReviewPosting}
          handleReviewStarClick={handleReviewStarClick}
          value={inputValue}
          key={inputValue}
        />
      );
    });

  return (
    <form action="#" className="add-review__form" onSubmit={handleFormSubmit}>
      <div className="rating">
        <div className="rating__stars">{starsInputs}</div>
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          onChange={handleReviewTextChange}
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
