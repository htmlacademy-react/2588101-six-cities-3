import PlaceCard from '../../components/place-card/place-card';
import {Offers} from '../../types/offer';
import {PlaceCardClass} from '../../const';

type OfferListProps = {
offers: Offers;
onHandleChangeActiveId: (id?: string) => void;
};

function OfferList({
  offers,
  onHandleChangeActiveId,
}: OfferListProps): JSX.Element {
  return (
    <>
      {offers.map((offer, id) => {
        const keyValue = `${id}-${offer.id}`;
        return (
          <PlaceCard
            onHandleChangeActiveId={onHandleChangeActiveId}
            offer={offer}
            key={keyValue}
            placeCardClass={PlaceCardClass.Cities}
          />
        );
      })}
    </>
  );
}

export default OfferList;
