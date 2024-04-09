import { useState } from 'react';
import { Offers, CardType } from '../../types/types';
import Card from '../card/card';
import { ACTIVE_CARD } from '../../const';


type CardListProps = {
  offers: Offers;
  cardsType: CardType;
};

function CardList({offers, cardsType}: CardListProps): JSX.Element {
  const cardsArray = Array.from({ length: offers.length }, (_, index) => index);
  const [, setActiveCard] = useState(ACTIVE_CARD);

  const handleCardMouseEnter = (id: number) => {
    setActiveCard(id);
  };

  const handleDivClass = (type: CardType) => {
    if (type === CardType.City) {
      return 'cities__places-list places__list tabs__content';
    }
    if (type === CardType.Near) {
      return 'near-places__list places__list';
    }
    if (type === CardType.Favorite) {
      return 'favorites__places';
    }
  };
  const getCards = (type: CardType) => (
    <div className={handleDivClass(type)}>
      {cardsArray.map((index) => (
        <Card
          key={index}
          offer={offers[index]}
          cardType={type}
          onMouseEnter={() => handleCardMouseEnter(offers[index].id)}
          onMouseLeave={() => handleCardMouseEnter(0)}
        />
      ))}
    </div>);

  const handleListType = (type: CardType) => {
    if (type === CardType.Favorite) {
      return (
        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{offers[0].city.title}</span>
              </a>
            </div>
          </div>
          {getCards(type)}
        </li>
      );
    } else {
      return getCards(type);
    }
  };

  return handleListType(cardsType);
}

export default CardList;
