import PlaceCard from '../../components/place-card/place-card';
import CitiesMap from '../../components/cities-map/cities-map';
import HeaderSignOut from '../../components/header-sign-out/header-sign-out';
import Cities from '../../components/cities/cities';
import PlacesSorting from '../../components/places-sorting/places-sorting';

type MainPageProps = {
  placeCardCount: number;
}

function MainPage({placeCardCount}: MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <HeaderSignOut />

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
              <b className="places__found">{placeCardCount} places to stay in Amsterdam</b>
              <PlacesSorting />
              <div className="cities__places-list places__list tabs__content">
                <PlaceCard />
                <PlaceCard />
                <PlaceCard />
                <PlaceCard />
                <PlaceCard />
              </div>
            </section>
            <div className="cities__right-section">
              <CitiesMap/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
