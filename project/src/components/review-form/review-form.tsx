import { ChangeEvent, FormEvent, useState } from 'react';
import classNames from 'classnames';

const MAX_RATING = 10;
const DEFAULT_RATING = Array(MAX_RATING)
  .fill(null)
  .map(() => false);
const MIN_RATING_BOUND = 0;
const MIN_POST_LENGTH = 50;
const MAX_POST_LENGTH = 400;

function ReviewForm() {
  const [rating, setRating] = useState(DEFAULT_RATING);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [review, setReview] = useState('');

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
    // eslint-disable-next-line no-console
    console.log(target.textContent);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    // eslint-disable-next-line no-console
    console.log(review);
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

export default ReviewForm;
