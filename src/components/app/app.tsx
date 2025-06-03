import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {Offers} from '../../types/offer';
import {Reviews} from '../../types/review';
import PrivateRoute from '../private-route/private-route';
import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import OfferPage from '../../pages/offer-page/offer-page';

type AppPageProps = {
  placeCardCount: number;
  offers: Offers;
  reviews: Reviews;
}

function App({placeCardCount, offers, reviews}: AppPageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainPage
              placeCardCount={placeCardCount}
              offers={offers}
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
          element={<NotFoundPage />}
        />
        <Route
          path={AppRoute.Offer}
          element={
            <OfferPage
              reviews={reviews}
              authorizationStatus={AuthorizationStatus.Auth}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
