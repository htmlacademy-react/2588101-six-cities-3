import {FullOffer} from '../../types/offer';

type OfferGalleryProps = {
  images: FullOffer['images'];
}

const IMAGES_MAX_COUNT = 6;

function OfferGallery({images}: OfferGalleryProps): JSX.Element {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {images.map((image) => (
          <div className="offer__image-wrapper" key={image}>
            <img className="offer__image" src={image} alt="Photo studio" />
          </div>
        )).slice(0, IMAGES_MAX_COUNT)}
      </div>
    </div>
  );
}

export default OfferGallery;
