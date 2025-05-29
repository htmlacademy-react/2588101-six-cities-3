import {Offer} from '../../types/offer';

type PlaceCardBookmarkProps = {
  isFavorite: boolean;
  offer: Offer[];
};

function PlaceCardBookmark({offer}: PlaceCardBookmarkProps): JSX.Element {
  return (
    <button className="place-card__bookmark-button button" type="button">
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default PlaceCardBookmark;
