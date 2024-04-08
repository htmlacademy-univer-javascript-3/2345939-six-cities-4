import { Reviews } from '../../types/types';
import ReviewItem from '../review/review';

type CardProps = {
  reviews: Reviews;
}

function ReviewList({reviews}: CardProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((item) => (
        <ReviewItem key={item.id} review={item} />
      ))}
    </ul>
  );
}

export default ReviewList;
