import Logo from '../../components/logo/logo';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {Fragment} from 'react';

type HeaderProps = {
  isAuth: boolean;
};

function Header({isAuth}: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  {isAuth &&
                  <Fragment>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </Fragment>}
                </Link>
              </li>
              <li className="header__nav-item">
                {isAuth ?
                  <Link className="header__nav-link" to="#">
                    <span className="header__signout">Sign out</span>
                  </Link> :
                  <Link className="header__nav-link" to={AppRoute.Login}>
                    <span className="header__login">Sign in</span>
                  </Link>}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
