import OffersList from '../../components/offer-list/offer-list';
import CitiesMap from '../../components/cities-map/cities-map';
import Header from '../../components/header/header';
import Cities from '../../components/cities/cities';
import PlacesSorting from '../../components/places-sorting/places-sorting';
import {CITY} from '../../mocks/city';
import {useState} from 'react';
import {AuthorizationStatus} from '../../const';
import {useAppSelector} from '../../hooks';

type MainPageProps = {
  authorizationStatus: AuthorizationStatus;
}

function MainPage({authorizationStatus}: MainPageProps): JSX.Element {
  const [activeId, setActiveId] = useState<string>();
  const handleChangeActiveId = (id?: string) => setActiveId(id);

  const offers = useAppSelector((state) => state.offers);

  return (
    <div className="page page--gray page--main">
      <Header isAuth={authorizationStatus === AuthorizationStatus.Auth} />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <Cities />
              <Cities />
              <Cities />
              <Cities />
              <Cities />
              <Cities />
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {CITY.name}</b>
              <PlacesSorting />
              <div className="cities__places-list places__list tabs__content">
                <OffersList
                  onHandleChangeActiveId={handleChangeActiveId}
                  offers={offers}
                />
              </div>
            </section>
            <div className="cities__right-section">
              <section
                style={{width: '100%'}}
                className={`${offers.length === 0 ? 'cities__map' : ''} map`}
              >
                <CitiesMap
                  city={CITY}
                  offers={offers}
                  activeId={activeId}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
