// import PlaceCardBookmark from '../../components/place-card-bookmark/place-card-bookmark';
import PlaceCardMark from '../../components/place-card-mark/place-card-mark';
import {Link} from 'react-router-dom';
import {Offer} from '../../types/offer';
import {AppRoute} from '../../const';

type PlaceCardProps = {
  offer: Offer;
  onHandleChangeActiveId: (id?: string) => void;
};

function PlaceCard({
  offer,
  onHandleChangeActiveId,
}: PlaceCardProps): JSX.Element {

  return (
    <article className="cities__card place-card"
      onMouseEnter={() => onHandleChangeActiveId(offer.id)}
      onMouseLeave={() => onHandleChangeActiveId()}
    >
      {offer.isPremium && <PlaceCardMark />}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`offer/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${offer.isFavorite && 'place-card__bookmark-button--active'}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">{offer.rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
