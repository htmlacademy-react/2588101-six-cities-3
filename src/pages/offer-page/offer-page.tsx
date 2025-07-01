import Header from '../../components/header/header';
import NearPlacesList from '../../components/near-places-list/near-places-list';
import ReviewsList from '../../components/reviews-list/reviews-list';
import CitiesMap from '../../components/cities-map/cities-map';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import {useAppSelector, useActionCreators} from '../../hooks/types';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {getOffers} from '../../store/app-data/app-data.selectors';
import {getReviews} from '../../store/reviews-data/reviews-data.selectors';
import {fullOfferActions} from '../../store/full-offer-data/full-offer-data';
import {reviewsActions} from '../../store/reviews-data/reviews-data';
import {getFullOffer, getNearbyOffers, getOfferStatus} from '../../store/full-offer-data/full-offer-data.selectors';
import {RequestStatus} from '../../const';
import LoadingPage from '../loading-page/loading-page';
import NotFoundPage from '../not-found-page/not-found-page';

function OfferPage(): JSX.Element {
  const offers = useAppSelector(getOffers);
  const fullOffer = useAppSelector(getFullOffer);
  const status = useAppSelector(getOfferStatus);
  const nearbyOffers = useAppSelector(getNearbyOffers);
  const reviews = useAppSelector(getReviews);

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
              {fullOffer.isPremium &&
              <div className="offer__mark">
                <span>Premium</span>
              </div>}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {fullOffer.title}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"/>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: `${Math.round(fullOffer.rating) * 20}%`}}/>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{fullOffer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  Apartment
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  3 Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max 4 adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{fullOffer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  <li className="offer__inside-item">
                    Wi-Fi
                  </li>
                  <li className="offer__inside-item">
                    Washing machine
                  </li>
                  <li className="offer__inside-item">
                    Towels
                  </li>
                  <li className="offer__inside-item">
                    Heating
                  </li>
                  <li className="offer__inside-item">
                    Coffee machine
                  </li>
                  <li className="offer__inside-item">
                    Baby seat
                  </li>
                  <li className="offer__inside-item">
                    Kitchen
                  </li>
                  <li className="offer__inside-item">
                    Dishwasher
                  </li>
                  <li className="offer__inside-item">
                    Cabel TV
                  </li>
                  <li className="offer__inside-item">
                    Fridge
                  </li>
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="offer__user-name">
                    Angelina
                  </span>
                  <span className="offer__user-status">
                    Pro
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <p className="offer__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                {reviews.length > 0 &&
                <>
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                  <ReviewsList />
                </>}
              </section>
            </div>
          </div>
          <section
            style={{width: '100%'}}
            className={`${offers.length === 0 ? 'offer__map' : ''} map`}
          >
            <CitiesMap
              city={fullOffer.city}
              offers={nearbyOffers}
              activeOfferId={fullOffer.id}
            />
          </section>
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
