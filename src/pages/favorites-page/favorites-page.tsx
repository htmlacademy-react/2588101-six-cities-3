import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import PlaceCard from '../../components/place-card/place-card';
import {Link} from 'react-router-dom';
import {Offer} from '../../types/offer';
import {useAppSelector} from '../../hooks/types';
import {getFavorites} from '../../store/favorites-data/favorites-data.selectors';
import {PlaceCardClass} from '../../const';

function FavoritesPage(): JSX.Element {
  const favoriteOffers = useAppSelector(getFavorites);

  const uniqCities: string[] = [];

  favoriteOffers.forEach((element: Offer) => {
    if (element.city.name !== uniqCities[uniqCities.length - 1]) {
      uniqCities.push(element.city.name);
    }
  });

  return (
    <div className={`page ${favoriteOffers.length === 0 && 'page--favorites-empty'}`}>
      <Header />
      {favoriteOffers.length === 0 ?
        <FavoritesEmpty />
        :
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">

              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {uniqCities.map((city, id) => {
                  const keyValue = `${id}-${city}`;
                  return (
                    <li key={keyValue} className="favorites__locations-items">
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <Link className="locations__item-link" to="#">
                            <span>{city}</span>
                          </Link>
                        </div>
                      </div>

                      <div className="favorites__places">
                        {favoriteOffers.filter((offer) => offer.city.name === city).map((offer, offerId) => {
                          const keyOffer = `${offerId}-${offer.id}`;

                          return (
                            <PlaceCard
                              offer={offer}
                              key={keyOffer}
                              placeCardClass={PlaceCardClass.Favorites}
                            />
                          );
                        }
                        )}
                      </div>
                    </li>
                  );
                }
                )}
              </ul>
            </section>
          </div>
        </main>}
      <footer className="footer container">
        <Footer />
      </footer>
    </div>
  );
}

export default FavoritesPage;
