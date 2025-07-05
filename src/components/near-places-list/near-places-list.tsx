import PlaceCard from '../place-card/place-card';
import {Offers} from '../../types/offer';
import {PlaceCardClass} from '../../const';

type NearPlacesListProps = {
offers: Offers;
};

function NearPlacesList({offers}: NearPlacesListProps): JSX.Element {

  return (
    <>
      {offers.map((offer, id) => {
        const keyValue = `${id}-${offer.id}`;

        return (
          <PlaceCard
            key={keyValue}
            offer={offer}
            placeCardClass={PlaceCardClass.NearPlaces}
          />
        );
      })}
    </>
  );
}

export default NearPlacesList;
