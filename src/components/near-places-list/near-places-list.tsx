import PlaceCard from '../place-card/place-card';
import {Offers} from '../../types/offer';

type NearPlacesListProps = {
offers: Offers;
};

function NearPlacesList({offers}: NearPlacesListProps): JSX.Element {
  const slicedOffers = offers.slice(0, 3);

  return (
    <>
      {slicedOffers.map((offer, id) => {
        const keyValue = `${id}-${offer.id}`;

        return (
          <PlaceCard
            key={keyValue}
            offer={offer}
            isNearPlace
          />
        );
      })}
    </>
  );
}

export default NearPlacesList;
