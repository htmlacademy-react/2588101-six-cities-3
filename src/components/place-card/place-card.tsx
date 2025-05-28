import PlaceCardBookmark from '../../components/place-card-bookmark/place-card-bookmark';
import {Link} from 'react-router-dom';
import {Offer} from '../../types/offer';

type PlaceCardProps = {
  offer: Offer;
};

function PlaceCard({offer}: PlaceCardProps): JSX.Element {

  return (
    <article className="cities__card place-card">
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to="#">
          <img className="place-card__image" src="img/room.jpg" width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;80</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <PlaceCardBookmark />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">Wood and stone place</a>
        </h2>
        <p className="place-card__type">Room</p>
      </div>
    </article>
  );
}

export default PlaceCard;
