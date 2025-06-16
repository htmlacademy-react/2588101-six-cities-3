import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useEffect} from 'react';
import {AppRoute, AuthorizationStatus} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {initOffers} from '../../store/action';
import {offers as mockOffers} from '../../mocks/offers';
import PrivateRoute from '../private-route/private-route';
import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import OfferPage from '../../pages/offer-page/offer-page';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initOffers({offers: mockOffers}));
  },[dispatch]);

  const offers = useAppSelector((state) => state.offers);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainPage
              authorizationStatus={AuthorizationStatus.Auth}
            />
          }
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <FavoritesPage
                offers={offers}
                authorizationStatus={AuthorizationStatus.Auth}
              />
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
            <NotFoundPage
              authorizationStatus={AuthorizationStatus.Auth}
            />
          }
        />
        <Route
          path={AppRoute.Offer}
          element={
            <OfferPage
              authorizationStatus={AuthorizationStatus.Auth}
              offers={offers}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
