import ReviewsList from '../../components/reviews-list/reviews-list';
import ReviewsForm from '../../components/reviews-form/reviews-form';

type ReviewsProps = {
  isAuth: boolean;
};

function Reviews({isAuth}: ReviewsProps): JSX.Element {
  return (
    <>
      <ReviewsList />
      {isAuth && <ReviewsForm />}
    </>
  );
}

export default Reviews;
