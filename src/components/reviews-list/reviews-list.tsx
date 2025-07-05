import ReviewsItem from '../../components/reviews-item/reviews-item';
import ReviewsForm from '../../components/reviews-form/reviews-form';
import {useAppSelector} from '../../hooks/types';
import {AuthorizationStatus} from '../../const';
import {getAuthorizationStatus} from '../../store/user-process/user-process.selectors';
import {getFullOffer} from '../../store/full-offer-data/full-offer-data.selectors';
import {Review} from '../../types/review';

type ReviewsListProps = {
  reviews: Review[];
}

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const fullOffer = useAppSelector(getFullOffer);

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

      {authorizationStatus === AuthorizationStatus.Auth && <ReviewsForm offerId={fullOffer?.id} />}
    </ul>);
}

export default ReviewsList;
