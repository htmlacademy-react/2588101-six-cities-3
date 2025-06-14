import {NavLink} from 'react-router-dom';

type CitiesListProps = {
citiesList: string[];
activeCity: string;
};

function CitiesList({citiesList, activeCity}: CitiesListProps): JSX.Element {

  return (
    <ul className="locations__list tabs__list">
      {citiesList.map((city, id) => {
        const keyValue = `${id}-${city}`;
        return (
          <li key={keyValue} className="locations__item">
            <NavLink className={`locations__item-link tabs__item ${city === activeCity ? 'tabs__item--active' : ''}`} to="#">
              <span>{city}</span>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default CitiesList;
