import 'leaflet/dist/leaflet.css';
import {Icon, Marker, layerGroup} from 'leaflet';
import {useRef, useEffect} from 'react';
import useMap from '../../hooks/use-map';
import {City, Offers} from '../../types/offer';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';

type CitiesMapProps = {
city: City;
offers: Offers;
activeOfferId?: undefined | string;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function CitiesMap({city, offers, activeOfferId}: CitiesMapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if(map) {
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
    }
  });

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker.setIcon(
          activeOfferId !== undefined && activeOfferId === offer.id
            ? currentCustomIcon
            : defaultCustomIcon
        )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, activeOfferId]);

  return (
    <div
      style={{height: '500px'}}
      ref={mapRef}
    />
  );
}

export default CitiesMap;
