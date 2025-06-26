import { MouseEvent } from 'react';
import {NavLink} from 'react-router-dom';
import {useAppDispatch} from '../../hooks/index';
import {changeActiveCity} from '../../store/app-process/app-process';
import {getCity} from '../../store/app-process/app-process.selectors';
import {useAppSelector} from '../../hooks';
import {City} from '../../types/offer';
import {CITIES} from '../../const';

type CitiesListProps = {
citiesList: City[];
};

function CitiesList({citiesList}: CitiesListProps): JSX.Element {

  const dispatch = useAppDispatch();
  const activeCity = useAppSelector(getCity);

  const onCityClick = (evt: MouseEvent<HTMLSpanElement>) => {
    const selectedCity = evt.currentTarget.textContent;

    if (selectedCity) {
      const currentCity = CITIES.find((city) => city.name === selectedCity);

      if (currentCity) {
        dispatch(changeActiveCity({activeCity: currentCity}));
      }
    }
  };

  return (
    <ul className="locations__list tabs__list">
      {citiesList.map((city, id) => {
        const keyValue = `${id}-${city.name}`;
        return (
          <li key={keyValue} className="locations__item">
            <NavLink
              onClick={onCityClick}
              className={`locations__item-link tabs__item ${city.name === activeCity.name ? 'tabs__item--active' : ''}`} to="#"
            >
              <span>{city.name}</span>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default CitiesList;
