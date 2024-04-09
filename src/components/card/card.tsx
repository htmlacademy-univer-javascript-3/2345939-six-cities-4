import {Link} from 'react-router-dom';
import { Offer, CardType } from '../../types/types';


type CardProps = {
  offer: Offer;
  cardType: CardType;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};


function Card({offer, cardType, onMouseEnter, onMouseLeave}: CardProps): JSX.Element {
  const articleHandle = (type: CardType) => {
    if (type === CardType.Near) {
      return 'near-places__card';
    }
    if (type === CardType.Favorite) {
      return 'favorites__card';
    }
    if (type === CardType.City) {
      return 'cities__card';
    }
  };

  const wrapperHandle = (type: CardType) => {
    if (type === CardType.Near) {
      return 'near-places__image-wrapper';
    }
    if (type === CardType.Favorite) {
      return 'favorites__image-wrapper';
    }
    if (type === CardType.City) {
      return 'cities__image-wrapper';
    }
  };

  const imageSizeHandle = (type: CardType) => {
    if (type === CardType.Favorite) {
      return ['150', '110'];
    } else {
      return ['260', '200'];
    }
  };
  return (
    <article className={`${articleHandle(cardType)} place-card`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${wrapperHandle(cardType)} place-card__image-wrapper`}>
        <Link to={{ pathname: `/offer/${offer.id}` }}>
          <img className="place-card__image" src={offer.cardImage} width={imageSizeHandle(cardType)[0]} height={imageSizeHandle(cardType)[1]} alt="Place image"/>
        </Link>
      </div>
      <div className={`${cardType === CardType.Favorite && 'favorites__card-info'} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${offer.isBookmarked && 'place-card__bookmark-button--active'}`}type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${offer.rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={{ pathname: `/offer/${offer.id}` }}>{offer.name}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default Card;
