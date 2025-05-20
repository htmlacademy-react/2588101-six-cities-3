import HeaderSignOut from '../../components/header-sign-out/header-sign-out';
import Footer from '../../components/footer/footer';

function FavoritesEmpty(): JSX.Element {
  return (
    <div className="page page--favorites-empty">
      <HeaderSignOut />

      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Favorites (empty)</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">Nothing yet saved.</b>
              <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
            </div>
          </section>
        </div>
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default FavoritesEmpty;
