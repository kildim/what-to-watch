import { FormEvent, useRef } from 'react';
import { loginAction } from '../../store/api-actions';
import { useDispatch, useSelector } from 'react-redux';
import { AppRoute, AuthorizationStatus } from '../../const';
import { redirectToRoute } from '../../store/action';
import { toast } from 'react-toastify';
import { getAuthStatus } from '../../store/reducers/auth-reducer/selectors';

const VALID_PASSWORD_REGEXP = /\D\d|\d\D/i;
const VALID_EMAIL_REGEXP = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;

const isValidPassword = (password: string): boolean =>
  VALID_PASSWORD_REGEXP.test(password);
const isValidEmail = (email: string): boolean => VALID_EMAIL_REGEXP.test(email);

function SignIn(): JSX.Element {
  const authorizationStatus = useSelector(getAuthStatus);
  const dispatch = useDispatch();

  if (authorizationStatus === AuthorizationStatus.Auth) {
    dispatch(redirectToRoute(AppRoute.Main));
  }

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleSignInSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (
      loginRef.current &&
      passwordRef.current &&
      isValidPassword(passwordRef.current.value) &&
      isValidEmail(loginRef.current.value)
    ) {
      dispatch(
        loginAction({
          login: loginRef.current.value,
          password: passwordRef.current.value,
        }),
      );
    }
    if (loginRef.current && !isValidEmail(loginRef.current.value)) {
      toast('В качестве логина используяте валидный адрес электронной почты');
    }
    if (passwordRef.current && !isValidPassword(passwordRef.current.value)) {
      toast('Пароль должен содержать цифру и букву!');
    }
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href={AppRoute.Main} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form
          action="#"
          className="sign-in__form"
          onSubmit={handleSignInSubmit}
        >
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                ref={loginRef}
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-email"
              >
                Email address
              </label>
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                autoComplete="off"
                name="user-password"
                id="user-password"
                ref={passwordRef}
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-password"
              >
                Password
              </label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">
              Sign in
            </button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <div className="logo">
          <a href="/" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default SignIn;
