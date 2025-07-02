import OffersList from '../../components/offer-list/offer-list';
import CitiesMap from '../../components/cities-map/cities-map';
import Header from '../../components/header/header';
import CitiesList from '../../components/cities-list/cities-list';
import PlacesSorting from '../../components/places-sorting/places-sorting';
import MainEmpty from '../../components/main-empty/main-empty';
import {useState} from 'react';
import {SortOption, CITIES} from '../../const';
import {useAppSelector} from '../../hooks/types';
import {Offer} from '../../types/offer';
import {getOffers} from '../../store/app-data/app-data.selectors';
import {getCity} from '../../store/app-process/app-process.selectors';

function MainPage(): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<string>();
  const [activeSort, setActiveSort] = useState(SortOption.Popular);

  const handleChangeActiveId = (id?: string) => setActiveOfferId(id);

  const offers = useAppSelector(getOffers);
  const activeCity = useAppSelector(getCity);

  const activeCityOffers = offers.filter((offer) => offer.city.name === activeCity.name);

  let sortedOffers = activeCityOffers;

  if (activeSort === SortOption.PriceLowToHigh) {
    sortedOffers = activeCityOffers.toSorted((a: Offer, b: Offer) => a.price - b.price);
  }
  if (activeSort === SortOption.PriceHighToLow) {
    sortedOffers = activeCityOffers.toSorted((a: Offer, b: Offer) => b.price - a.price);
  }
  if (activeSort === SortOption.TopRatedFirst) {
    sortedOffers = activeCityOffers.toSorted((a: Offer, b: Offer) => b.rating - a.rating);
  }

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <Header />
      </header>

      <main className={`page__main page__main--index ${offers.length === 0 && 'page__main--index-empty'}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList citiesList={CITIES} />
          </section>
        </div>
        <div className="cities">
          {offers.length === 0 ?
            <MainEmpty activeCityName={activeCity.name} />
            :
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{activeCityOffers.length} place{(activeCityOffers.length > 1 || activeCityOffers.length === 0) && 's'} to stay in {activeCity.name}</b>
                {activeCityOffers.length > 0 && <PlacesSorting current={activeSort} setter={setActiveSort} />}
                <div className="cities__places-list places__list tabs__content">
                  <OffersList
                    onHandleChangeActiveId={handleChangeActiveId}
                    offers={sortedOffers}
                  />
                </div>
              </section>
              <div className="cities__right-section">
                <CitiesMap
                  city={activeCity}
                  offers={activeCityOffers}
                  activeOfferId={activeOfferId}
                />
              </div>
            </div>}
        </div>
      </main>
    </div>
  );
}

export default MainPage;
