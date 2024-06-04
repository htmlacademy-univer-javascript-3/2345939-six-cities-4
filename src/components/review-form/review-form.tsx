import { REVIEW_FORM } from '../../const';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postComment } from '../../store/action';
import { AppDispatch } from '../../store';

function ReviewFormComponent({ offerId }: { offerId: string }): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const [formData, setFormData] = useState({
    rating: REVIEW_FORM.rating,
    review: REVIEW_FORM.review,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, rating: Number(event.target.value) });
  };

  const handleReviewChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, review: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const submit = async () => {
      if (formData.rating && formData.review.length >= 50 && formData.review.length <= 300) {
        try {
          await dispatch(postComment({ offerId, comment: formData.review, rating: formData.rating })).unwrap();
          setFormData({
            rating: REVIEW_FORM.rating,
            review: REVIEW_FORM.review,
          });
        } catch (err) {
          setError('Failed to submit the review. Please try again.');
        } finally {
          setIsSubmitting(false);
        }
      } else {
        setIsSubmitting(false);
      }
    };

    submit();
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" onChange={handleRatingChange} disabled={isSubmitting} checked={formData.rating === 5} />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" onChange={handleRatingChange} disabled={isSubmitting} checked={formData.rating === 4} />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" onChange={handleRatingChange} disabled={isSubmitting} checked={formData.rating === 3} />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" onChange={handleRatingChange} disabled={isSubmitting} checked={formData.rating === 2} />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" onChange={handleRatingChange} disabled={isSubmitting} checked={formData.rating === 1} />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={handleReviewChange} disabled={isSubmitting} value={formData.review}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isSubmitting || !formData.rating || formData.review.length < 50 || formData.review.length > 300}>Submit</button>
        {error && <div className="reviews__error">{error}</div>}
      </div>
    </form>
  );
}

export default ReviewFormComponent;
