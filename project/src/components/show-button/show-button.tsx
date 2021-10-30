import {MouseEventHandler} from 'react';
import classNames from 'classnames';

type ShowButtonPropsType = {
  onClickHandler: MouseEventHandler<HTMLButtonElement>,
  visibility: boolean
}

function ShowButton ({onClickHandler, visibility}: ShowButtonPropsType):JSX.Element {
  const constructButtonClassName = (visible: boolean) => classNames('catalog__button', {'visually-hidden': !visible});
  return (
    <div className="catalog__more">
      <button className={constructButtonClassName(visibility)} type="button" onClick={onClickHandler}>
        Show more
      </button>
    </div>
  );
}

export default ShowButton;
