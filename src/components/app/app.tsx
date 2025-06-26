import {Routes, Route} from 'react-router-dom';
import {AppRoute} from '../../const';
import {useAppSelector} from '../../hooks';
import {getOffersDataLoadingStatus} from '../../store/app-data/app-data.selectors';
import {getAuthCheckedStatus} from '../../store/user-process/user-process.selectors';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import PrivateRoute from '../private-route/private-route';
import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import OfferPage from '../../pages/offer-page/offer-page';
import LoadingPage from '../../pages/loading-page/loading-page';

function App(): JSX.Element {
  const isOffersDataLoading = useAppSelector(getOffersDataLoadingStatus);
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);

  if (!isAuthChecked || isOffersDataLoading) {
    return (
      <LoadingPage />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainPage />
          }
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path="*"
          element={
            <NotFoundPage />
          }
        />
        <Route
          path={AppRoute.Offer}
          element={
            <OfferPage />
          }
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
