import {useState, Fragment, FormEvent} from 'react';
import {FullOffer} from '../../types/offer';
import {reviewsActions} from '../../store/reviews-data/reviews-data';
import {useActionCreators} from '../../hooks/types';
import {toast} from 'react-toastify';

type ReviewsFormProps = {
  offerId: FullOffer['id'] | undefined;
}

type Form = HTMLFormElement & {
  rating: RadioNodeList;
  review: HTMLTextAreaElement;
}

const MAX_COMMENT_LENGTH = 300;
const MIN_COMMENT_LENGTH = 50;

const ratingList = [
  {value: 5, label: 'perfect'},
  {value: 4, label: 'good'},
  {value: 3, label: 'not bad'},
  {value: 2, label: 'badly'},
  {value: 1, label: 'terribly'},
];

function ReviewsForm({offerId}: ReviewsFormProps): JSX.Element {
  const {postReviews} = useActionCreators(reviewsActions);

  const [userReview, setUserReview] = useState({
    rating: 0,
    review: '',
    isformDisabled: false
  });

  const handleChange = (evt: {target: {name: string; value: string}}) => {
    const {name, value} = evt.target;
    setUserReview({...userReview, [name]: value});
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const form = evt.currentTarget as Form;
    const reviewContent = {
      body: {
        comment: userReview.review,
        rating: Number(userReview.rating)
      },
      offerId
    };
    setUserReview({...userReview, isformDisabled: true});
    toast.promise(postReviews(reviewContent).unwrap(), {
      pending: 'Sending',
      success: {
        render: () => {
          setUserReview({review: '', rating: 0, isformDisabled: false});
          form.reset();
          return 'Sent!';
        }
      },
      error: {
        render() {
          setUserReview({...userReview, isformDisabled: false});
          return 'Failed to send';
        }
      }
    });
  };

  const {rating, review, isformDisabled} = userReview;

  const submitFlags = [!rating, review.length < MIN_COMMENT_LENGTH, isformDisabled, review.length > MAX_COMMENT_LENGTH];
  const isSubmitDisabled = submitFlags.some((element) => element === true);

  return (
    <form className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingList.map(({value, label}) => (
          <Fragment key={value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={value}
              id={`${value}-stars`}
              type="radio"
              onChange={handleChange}
              disabled={isformDisabled}
            />
            <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={label}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        minLength={MIN_COMMENT_LENGTH}
        required
        disabled={isformDisabled}
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleChange}
      >

      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least
          <b className="reviews__text-amount">{MIN_COMMENT_LENGTH} characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isSubmitDisabled}
        >Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;
