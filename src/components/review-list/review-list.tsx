import { Reviews } from '../../types/types';
import ReviewComponent from '../review/review';

type ReviewListComponentProps = {
  reviews: Reviews;
}

function ReviewListComponent({reviews}: ReviewListComponentProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews
        .slice()
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Сортировка по дате
        .slice(0, 10) // Выбор первых 10 элементов
        .map((item) => (
          <ReviewComponent key={item.id} review={item} />
        ))}
    </ul>
  );
}

export default ReviewListComponent;
