import { MouseEvent } from 'react';
import {NavLink} from 'react-router-dom';
import {useAppDispatch} from '../../hooks/index';
import {changeActiveCity} from '../../store/action';
import {useAppSelector} from '../../hooks';

type CitiesListProps = {
citiesList: string[];
};

function CitiesList({citiesList}: CitiesListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const activeCity = useAppSelector((state) => state.activeCity);

  const onCityClick = (evt: MouseEvent<HTMLSpanElement>) => {
    const selectedCity = evt.currentTarget.textContent;

    if (selectedCity) {
      dispatch(changeActiveCity({activeCity: selectedCity}));
    }
  };

  return (
    <ul className="locations__list tabs__list">
      {citiesList.map((city, id) => {
        const keyValue = `${id}-${city}`;
        return (
          <li key={keyValue} className="locations__item">
            <NavLink
              onClick={onCityClick}
              className={`locations__item-link tabs__item ${city === activeCity ? 'tabs__item--active' : ''}`} to="#"
            >
              <span>{city}</span>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default CitiesList;
