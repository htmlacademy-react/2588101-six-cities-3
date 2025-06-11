import ReviewsItem from '../../components/reviews-item/reviews-item';
import ReviewsForm from '../../components/reviews-form/reviews-form';
import {Review} from '../../types/review';

type ReviewsListProps = {
  isAuth: boolean;
  reviews: Review[];
};

function ReviewsList({isAuth, reviews}: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review, id) => {
        const keyValue = `${id}-${review.id}`;
        return (
          <ReviewsItem
            key={keyValue}
            review={review}
          />
        );
      })}

      {isAuth && <ReviewsForm />}
    </ul>);
}

export default ReviewsList;
