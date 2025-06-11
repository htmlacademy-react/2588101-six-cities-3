import PlaceCardBookmark from '../../components/place-card-bookmark/place-card-bookmark';
import PlaceCardMark from '../../components/place-card-mark/place-card-mark';
import {Link} from 'react-router-dom';
import {Offer} from '../../types/offer';

type PlaceCardProps = {
  offer: Offer;
  onHandleChangeActiveId?: (id?: string) => void;
  isNearPlace: boolean;
};

function PlaceCard({
  offer,
  onHandleChangeActiveId,
  isNearPlace
}: PlaceCardProps): JSX.Element {

  const {isPremium, previewImage, id, price, rating, title, type} = offer;

  return (
    <article className={`${isNearPlace ? 'near-places' : 'cities'}__card place-card`}
      onMouseEnter={() => onHandleChangeActiveId && onHandleChangeActiveId(offer.id)}
      onMouseLeave={() => onHandleChangeActiveId && onHandleChangeActiveId()}
    >
      {isPremium && <PlaceCardMark />}
      <div className={`${isNearPlace ? 'near-places' : 'cities'}__image-wrapper place-card__image-wrapper`}>
        <Link to={`offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <PlaceCardBookmark isFavorite/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(rating) * 20}%`}}/>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
