import { ChangeEvent, useState } from 'react';

function ReviewForm() {
  const MAX_RATING = 10;
  const DEFAULT_RATING = Array(MAX_RATING)
    .fill(null)
    .map(() => false);

  const [rating, setRating] = useState(DEFAULT_RATING);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [review, setReview] = useState('');

  const onChangeInputHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const indexOfChecked = Number(target.value) - 1;
    setRating(
      rating.map((member, memberIndex) => memberIndex === indexOfChecked),
    );
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
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">{RATING_INPUTS}</div>
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          onInput={({ target }: ChangeEvent<HTMLTextAreaElement>) => {
            setReview(target.value);
          }}
        />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">
            Post
          </button>
        </div>
      </div>
    </form>
  );
}

export default ReviewForm;
