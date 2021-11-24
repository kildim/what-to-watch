import {ChangeEventHandler} from 'react';

type ReviewStarType = {
  value: string;
  handleReviewStarClick: ChangeEventHandler;
  isReviewPosting: boolean;
};

function ReviewStar({
  value,
  handleReviewStarClick,
  isReviewPosting,
}: ReviewStarType): JSX.Element {
  return (
    <>
      <input
        className="rating__input"
        id={`star-${value}`}
        type="radio"
        name="rating"
        value={value}
        onChange={handleReviewStarClick}
        disabled={isReviewPosting}
      />
      <label className="rating__label" htmlFor={`star-${value}`}/>
    </>
  );
}

export default ReviewStar;
