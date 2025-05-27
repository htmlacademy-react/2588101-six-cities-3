import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {OfferMock} from '../../types/offer';
import {ReviewMock} from '../../types/review';
import PrivateRoute from '../private-route/private-route';
import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import OfferPage from '../../pages/offer-page/offer-page';

type AppPageProps = {
  placeCardCount: number;
  offers: OfferMock;
  reviews: ReviewMock;
}

function App({placeCardCount, offers, reviews}: AppPageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage placeCardCount={placeCardCount} />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
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
          element={<NotFoundPage />}
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
