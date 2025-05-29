import PlaceCard from '../../components/place-card/place-card';
import {Offers} from '../../types/offer';

type OfferListProps = {
offers: Offers;
};

function OfferList({offers}: OfferListProps): JSX.Element {
  return (
    <>
      {offers.map((offer, id) => {
        const keyValue = `${id}-${offer.id}`;
        return (
          <PlaceCard offer={offer} key={keyValue}/>
        );
      })}
    </>
  );
}

export default OfferList;
