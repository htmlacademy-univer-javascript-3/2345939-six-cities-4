import { monthMap } from '../../const';
import { Review } from '../../types/types';

type ReviewComponentProps = {
  review: Review;
}

function ReviewComponent({review}: ReviewComponentProps): JSX.Element {
  return (
    <li key={review.id} className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {review.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${review.rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime={review.date.slice(0, 10)}>{`${monthMap[Number(review.date.slice(6, 7))]} ${review.date.slice(0, 4)}`}</time>
      </div>
    </li>
  );
}

export default ReviewComponent;
