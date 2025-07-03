import Logo from '../../components/logo/logo';
import {Link} from 'react-router-dom';
import {useEffect} from 'react';
import {AppRoute, AuthorizationStatus, RequestStatus} from '../../const';
import {useAppSelector, useAppDispatch, useActionCreators} from '../../hooks/types';
import {logout} from '../../store/api-actions';
import {getAuthorizationStatus, getUserData} from '../../store/user-process/user-process.selectors';
import {getFavoriteStatus, getFavorites} from '../../store/favorites-data/favorites-data.selectors';
import {favoritesActions} from '../../store/favorites-data/favorites-data';

function Header(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const userData = useAppSelector(getUserData);
  const {fetchFavorites} = useActionCreators(favoritesActions);
  const favoriteStatus = useAppSelector(getFavoriteStatus);
  const favoriteOffers = useAppSelector(getFavorites);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (favoriteStatus === RequestStatus.Idle) {
      fetchFavorites();
    }
  }, [favoriteStatus, fetchFavorites]);

  return (
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <Logo />
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            {authorizationStatus !== AuthorizationStatus.Auth ?
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__login">Sign in</span>
                </Link>
              </li>
              :
              <>
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{userData?.email}</span>
                    <span className="header__favorite-count">{favoriteOffers.length}</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link"
                    onClick={(evt) => {
                      evt.preventDefault();
                      dispatch(logout());
                    }}
                    to={AppRoute.Main}
                  >
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </>}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
