import ReviewsItem from '../../components/reviews-item/reviews-item';
import ReviewsForm from '../../components/reviews-form/reviews-form';
import {useAppSelector} from '../../hooks';

type ReviewsListProps = {
  isAuth: boolean;
};

function ReviewsList({isAuth}: ReviewsListProps): JSX.Element {
  const reviews = useAppSelector((state) => state.reviews);

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
