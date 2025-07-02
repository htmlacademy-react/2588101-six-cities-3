import PlaceCardBookmark from '../../components/place-card-bookmark/place-card-bookmark';
import PlaceCardMark from '../../components/place-card-mark/place-card-mark';
import {Link} from 'react-router-dom';
import {Offer} from '../../types/offer';
import {capitalizeFirst} from '../../utils';
import {PlaceCardClass} from '../../const';

const STARS_STYLE_COEFF = 20;

type PlaceCardProps = {
  offer: Offer;
  onHandleChangeActiveId?: (id?: string) => void;
  placeCardClass: PlaceCardClass;
};

function PlaceCard({
  offer,
  onHandleChangeActiveId,
  placeCardClass
}: PlaceCardProps): JSX.Element {

  const isFavorite = placeCardClass === PlaceCardClass.Favorites;

  const {isPremium, previewImage, id, price, rating, title, type} = offer;

  return (
    <article className={`${placeCardClass}__card place-card`}
      onMouseEnter={() => onHandleChangeActiveId && onHandleChangeActiveId(offer.id)}
      onMouseLeave={() => onHandleChangeActiveId && onHandleChangeActiveId()}
    >
      {isPremium && <PlaceCardMark />}
      <div className={`${placeCardClass}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={isFavorite ? '150' : '260'}
            height={isFavorite ? '110' : '200'}
            alt="Place image"
          />
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
            <span style={{width: `${Math.round(rating) * STARS_STYLE_COEFF}%`}}/>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{capitalizeFirst(type)}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
