import {Review} from '../../types/review';
import dayjs from 'dayjs';

const STARS_STYLE_COEFF = 20;

type ReviewsItemProps = {
review: Review;
};

function ReviewsItem({review}: ReviewsItemProps): JSX.Element {
  const {date, rating, comment, user: {name, avatarUrl}} = review;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${Math.round(rating) * STARS_STYLE_COEFF}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={dayjs(date).format('YYYY-YY-DD')}>{dayjs(date).format('MMMM D')}</time>
      </div>
    </li>

  );
}

export default ReviewsItem;
