import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import PlaceCard from '../../components/place-card/place-card';
import {Link} from 'react-router-dom';
import {Offer} from '../../types/offer';
import {useAppSelector} from '../../hooks/types';
import {getOffers} from '../../store/app-data/app-data.selectors';
import {PlaceCardClass} from '../../const';

function FavoritesPage(): JSX.Element {
  const offers = useAppSelector(getOffers);
  const filteredOffers = offers.filter((offer) => offer.isFavorite === true);

  const uniqCities: string[] = [];
  filteredOffers.forEach((element: Offer) => {
    if (element.city.name !== uniqCities[uniqCities.length - 1]) {
      uniqCities.push(element.city.name);
    }
  });

  return (
    <div className={`page ${filteredOffers.length === 0 && 'page--favorites-empty'}`}>
      <Header />
      {filteredOffers.length === 0 ?
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
                        {filteredOffers.filter((offer) => offer.city.name === city).map((offer, offerId) => {
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
