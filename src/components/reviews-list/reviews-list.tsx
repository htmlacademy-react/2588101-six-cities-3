import ReviewsItem from '../../components/reviews-item/reviews-item';
import ReviewsForm from '../../components/reviews-form/reviews-form';
import {useAppSelector} from '../../hooks';
import {AuthorizationStatus} from '../../const';

function ReviewsList(): JSX.Element {
  const reviews = useAppSelector((state) => state.reviews);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

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

      {authorizationStatus === AuthorizationStatus.Auth && <ReviewsForm />}
    </ul>);
}

export default ReviewsList;
