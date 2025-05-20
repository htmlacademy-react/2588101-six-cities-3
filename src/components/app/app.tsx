import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import OfferPage from '../../pages/offer-page/offer-page';

type AppPageProps = {
  placeCardCount: number;
}

function App({placeCardCount}: AppPageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage placeCardCount={placeCardCount} />}
        />
        <Route
          path={AppRoute.Favorites}
          element={<FavoritesPage />}
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
