import { City } from '../../types/types';

type CityListProps = {
  cities: City[];
  currentCity: City;
  onCityChange: (city: City) => void;
};

function CityList({ cities, currentCity, onCityChange }: CityListProps): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => (
          <li
            className="locations__item"
            key={city.name}
            onClick={() => onCityChange(city)}
          >
            <a
              className={`locations__item-link tabs__item ${
                currentCity.name === city.name ? 'tabs__item--active' : ''
              }`}
              href="#"
            >
              <span>{city.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CityList;
