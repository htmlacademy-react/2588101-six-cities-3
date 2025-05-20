import {Link} from 'react-router-dom';

function Cities(): JSX.Element {
  return (
    <li className="locations__item">
      <Link className="locations__item-link tabs__item" to="#">
        <span>Paris</span>
      </Link>
    </li>
  );
}

export default Cities;
