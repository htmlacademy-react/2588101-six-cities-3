import Header from '../../components/header/header';
import NearPlacesList from '../../components/near-places-list/near-places-list';
import ReviewsList from '../../components/reviews-list/reviews-list';
import CitiesMap from '../../components/cities-map/cities-map';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import OfferContainer from '../../components/offer-container/offer-container';
import {useAppSelector, useActionCreators} from '../../hooks/types';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {getAllOffers} from '../../store/app-data/app-data.selectors';
import {getReviews} from '../../store/reviews-data/reviews-data.selectors';
import {getFullOffer, getNearbyOffers, getOfferStatus} from '../../store/full-offer-data/full-offer-data.selectors';
import {fullOfferActions} from '../../store/full-offer-data/full-offer-data';
import {reviewsActions} from '../../store/reviews-data/reviews-data';
import {RequestStatus} from '../../const';
import {sortReviewsByDate} from '../../utils';
import LoadingPage from '../loading-page/loading-page';
import NotFoundPage from '../not-found-page/not-found-page';

const MAX_REVIEWS = 10;

function OfferPage(): JSX.Element {
  const offers = useAppSelector(getAllOffers);
  const fullOffer = useAppSelector(getFullOffer);
  const status = useAppSelector(getOfferStatus);
  const nearbyOffers = useAppSelector(getNearbyOffers);
  const reviews = useAppSelector(getReviews);

  const sortedReviews = reviews.toSorted(sortReviewsByDate).slice(0, MAX_REVIEWS);

  const {fetchFullOffer, fetchNearbyOffers} = useActionCreators(fullOfferActions);
  const {fetchReviews} = useActionCreators(reviewsActions);

  const {id} = useParams() as {id: string};

  useEffect(() => {
    if (status === RequestStatus.Idle) {
      Promise.all([fetchFullOffer(id), fetchNearbyOffers(id), fetchReviews(id)]);
    }
  }, [fetchFullOffer, fetchNearbyOffers, fetchReviews, id, status]);

  if (status === RequestStatus.Loading) {
    return <LoadingPage />;
  }

  if (status === RequestStatus.Failed || !fullOffer) {
    return <NotFoundPage />;
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery images={fullOffer.images} />
          <div className="offer__container container">
            <div className="offer__wrapper">
              <OfferContainer offer={fullOffer} />
              <section className="offer__reviews reviews">
                {reviews && reviews.length > 0 &&
                <>
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                  <ReviewsList reviews={sortedReviews} />
                </>}
              </section>
            </div>
          </div>
          <CitiesMap
            city={fullOffer.city}
            offers={offers}
            activeOfferId={fullOffer.id}
            place="offer"
          />
        </section>
        {offers && offers.length > 0 &&
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                <NearPlacesList offers={nearbyOffers} />
              </div>
            </section>
          </div>}
      </main>
    </div>
  );
}

export default OfferPage;
