import { AppRoute } from '../../const';
import { CardType, Offers } from '../../types/types';
import { useParams, Link, NavLink, Navigate } from 'react-router-dom';
import CardList from '../../components/card-list/card-list';
import ReviewForm from '../../components/review-form/review-form';
import ReviewList from '../../components/review-list/review-list';
import Map from '../../components/map/map';

type OfferScreenProps = {
  offers: Offers;
};


function OfferScreen({offers}: OfferScreenProps): JSX.Element {
  const { id } = useParams();

  const numericId = Number(id);

  const selectedOffer = offers.find((offer) => offer.id === numericId);

  return (
    !selectedOffer
      ? <Navigate to={AppRoute.Error} />
      :
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link className="header__logo-link" to={{ pathname: AppRoute.Main }}>
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                </Link>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <NavLink className="header__nav-link header__nav-link--profile" to={{ pathname: AppRoute.Favorites}}>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                      <span className="header__favorite-count">{offers.filter((offer) => offer.isBookmarked).length}</span>
                    </NavLink>
                  </li>
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="#">
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--offer">
          <section className="offer">
            <div className="offer__gallery-container container">
              <div className="offer__gallery">
                {selectedOffer.offerGallery.map((item) => (
                  <div key={item} className="offer__image-wrapper">
                    <img className="offer__image" src={item} alt="Photo studio"/>
                  </div>
                ))}
              </div>
            </div>
            <div className="offer__container container">
              <div className="offer__wrapper">
                {selectedOffer.isPremium && (
                  <div className="offer__mark">
                    <span>Premium</span>
                  </div>
                )}
                <div className="offer__name-wrapper">
                  <h1 className="offer__name">
                    {selectedOffer.name}
                  </h1>
                  <button className={`offer__bookmark-button button ${selectedOffer.isBookmarked ? 'offer__bookmark-button--active' : ''}`} type="button">
                    <svg className="offer__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="offer__rating rating">
                  <div className="offer__stars rating__stars">
                    <span style={{width: `${selectedOffer.rating * 20}%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="offer__rating-value rating__value">{selectedOffer.rating}</span>
                </div>
                <ul className="offer__features">
                  <li className="offer__feature offer__feature--entire">
                    {selectedOffer.type}
                  </li>
                  <li className="offer__feature offer__feature--bedrooms">
                    {selectedOffer.bedrooms} Bedrooms
                  </li>
                  <li className="offer__feature offer__feature--adults">
                  Max {selectedOffer.maxGuests} adults
                  </li>
                </ul>
                <div className="offer__price">
                  <b className="offer__price-value">&euro;{selectedOffer.price}</b>
                  <span className="offer__price-text">&nbsp;night</span>
                </div>
                <div className="offer__inside">
                  <h2 className="offer__inside-title">What&apos;s inside</h2>
                  <ul className="offer__inside-list">
                    {selectedOffer.insideItems.map((item) => (
                      <li key={item} className="offer__inside-item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="offer__host">
                  <h2 className="offer__host-title">Meet the host</h2>
                  <div className="offer__host-user user">
                    <div className={`offer__avatar-wrapper ${selectedOffer.host.status === 'Pro' ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                      <img className="offer__avatar user__avatar" src={selectedOffer.host.avatarSrc} width="74" height="74" alt="Host avatar"/>
                    </div>
                    <span className="offer__user-name">
                      {selectedOffer.host.name}
                    </span>
                    <span className="offer__user-status">
                      {selectedOffer.host.status}
                    </span>
                  </div>
                  <div className="offer__description">
                    {selectedOffer.host.description.map((item) => (
                      <p key={item} className="offer__text">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
                <section className="offer__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{selectedOffer.reviews.length}</span></h2>
                  <ReviewList reviews={selectedOffer.reviews} />
                  <ReviewForm />
                </section>
              </div>
            </div>
            <section className="offer__map map"><Map city={selectedOffer.city} points={selectedOffer.nearPlaces} selectedPoint={undefined}/></section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <CardList offers={selectedOffer.nearPlaces} cardsType={CardType.Near} />
            </section>
          </div>
        </main>
      </div>
  );
}

export default OfferScreen;
