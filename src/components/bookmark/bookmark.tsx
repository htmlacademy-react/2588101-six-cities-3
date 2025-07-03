import {useNavigate} from 'react-router-dom';
import classNames from 'classnames';
import {toast} from 'react-toastify';
import {Offer} from '../../types/offer';
import {AuthorizationStatus, AppRoute} from '../../const';
import {useBoolean} from '../../hooks/boolean';
import {useAppSelector, useActionCreators} from '../../hooks/types';
import {getAuthorizationStatus} from '../../store/user-process/user-process.selectors';
import {favoritesActions} from '../../store/favorites-data/favorites-data';

const IconSize = {
  OFFER_WIDTH: 31,
  PLACE_CARD_WIDTH: 18,
  OFFER_HEIGHT: 33,
  PLACE_CARD_HEIGHT: 19
};

type BookmarkProps = {
  isFavorite: boolean;
  offerId: Offer['id'];
  place?: 'place-card' | 'offer';
}

function Bookmark({isFavorite, offerId, place = 'place-card'}: BookmarkProps): JSX.Element {
  const {isOn: isBookmarked, toggle: toggleBookmark} = useBoolean(isFavorite);

  const iconWidth = place === 'offer' ? IconSize.OFFER_WIDTH : IconSize.PLACE_CARD_WIDTH;
  const iconHeight = place === 'offer' ? IconSize.OFFER_HEIGHT : IconSize.PLACE_CARD_HEIGHT;

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const {postFavorite} = useActionCreators(favoritesActions);
  const navigate = useNavigate();
  const isUserAuth = authorizationStatus === AuthorizationStatus.Auth;

  const classNameItems = {
    [`${place}__bookmark-button`]: true,
    [`${place}__bookmark-button--active`]: isBookmarked && isUserAuth,
  };

  const bookmarkClass = classNames(
    'button',
    classNameItems
  );

  function handleClick() {
    if (!isUserAuth) {
      return navigate(AppRoute.Login);
    }

    postFavorite({
      id: offerId,
      isFavorite: !isBookmarked
    })
      .unwrap()
      .catch(() => {
        toast.error('Failed. Please try again');
      });
    toggleBookmark();
  }

  return (
    <button
      className={bookmarkClass}
      type="button"
      onClick={handleClick}
    >
      <svg
        className={`${place}__bookmark-icon`}
        width={iconWidth}
        height={iconHeight}
      >
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">{isBookmarked ? 'In' : 'To'} bookmarks</span>
    </button>
  );
}

export default Bookmark;
