import { useState } from 'react';
import { Offers, CardType, Offer } from '../../types/types';
import CardComponent from '../card/card';
import { ACTIVE_CARD } from '../../const';

type CardListComponentProps = {
  offers: Offers;
  cardsType: CardType;
  onCardHover?: (offer: Offer | undefined) => void;
};

function CardListComponent({ offers, cardsType, onCardHover }: CardListComponentProps): JSX.Element {
  const cardsArray = Array.from({ length: offers.length }, (_, index) => index);
  const [, setActiveCard] = useState < string | null>(ACTIVE_CARD);

  const handleCardMouseEnter = (offer: Offer) => {
    setActiveCard(offer.id);
    if (onCardHover) {
      onCardHover(offer);
    }
  };

  const handleCardMouseLeave = () => {
    setActiveCard(null);
    if (onCardHover) {
      onCardHover(undefined);
    }
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
        <CardComponent
          key={index}
          offer={offers[index]}
          cardType={type}
          onMouseEnter={() => handleCardMouseEnter(offers[index])}
          onMouseLeave={handleCardMouseLeave}
        />
      ))}
    </div>
  );

  const handleListType = (type: CardType) => {
    if (type === CardType.Favorite) {
      return (
        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{offers[0].city.name}</span>
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

export default CardListComponent;
