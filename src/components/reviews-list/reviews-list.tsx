import ReviewsItem from '../../components/reviews-item/reviews-item';
import ReviewsForm from '../../components/reviews-form/reviews-form';
import {useAppSelector} from '../../hooks/types';
import {AuthorizationStatus} from '../../const';
import {getAuthorizationStatus} from '../../store/user-process/user-process.selectors';
import {getReviews} from '../../store/reviews-data/reviews-data.selectors';
import {getFullOffer} from '../../store/full-offer-data/full-offer-data.selectors';

function ReviewsList(): JSX.Element {
  const reviews = useAppSelector(getReviews);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const fullOffer = useAppSelector(getFullOffer);

  const slicedReviews = reviews.slice(0, 10);

  return (
    <ul className="reviews__list">
      {slicedReviews.map((review, id) => {
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
