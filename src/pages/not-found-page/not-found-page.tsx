import HeaderSignOut from '../../components/header-sign-out/header-sign-out';
import Footer from '../../components/footer/footer';
import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page">
      <HeaderSignOut />

      <div className="error container">
        <h1 className="error__title">Error 404. Page Not Found.</h1>
        <h2 className="error__text">Please check the URL. Otherwise <Link to={AppRoute.Main} className="error__link">click here</Link> to be redirected to the homepage.</h2>
      </div>

      <footer className="footer container">
        <Footer />
      </footer>
    </div>
  );
}

export default NotFoundPage;
