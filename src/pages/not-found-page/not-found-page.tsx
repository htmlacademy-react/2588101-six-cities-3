import HeaderSignOut from '../../components/header-sign-out/header-sign-out';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page">
      <HeaderSignOut />

      <div className="error container">
        <h1 className="error__title">Error 404. Page Not Found.</h1>
        <h2 className="error__text">Please check the URL. Otherwise <a href="/" className="error__link">click here</a> to be redirected to the homepage.</h2>
      </div>

      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
}

export default NotFoundPage;
