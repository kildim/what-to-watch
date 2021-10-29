import {MouseEventHandler} from 'react';

type ShowButtonPropsType = {
  onClickHandler: MouseEventHandler<HTMLButtonElement>
}

function ShowButton ({onClickHandler}: ShowButtonPropsType):JSX.Element {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={onClickHandler}>
        Show more
      </button>
    </div>
  );
}

export default ShowButton;
