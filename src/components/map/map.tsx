import 'leaflet/dist/leaflet.css';
import { Icon, Marker, layerGroup } from 'leaflet';
import { City, Offers, Offer, WideOffer } from '../../types/types';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT, URL_MARKER_HOWERED } from '../../const';
import { useRef, useEffect } from 'react';
import useMap from '../../hooks/use-map';

type MapComponentProps = {
  city: City;
  points: Offers;
  selectedPoint: WideOffer | undefined;
  hoveredPoint: Offer | undefined; // Добавляем проп hoveredPoint
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

const howeredCustomIcon = new Icon({
  iconUrl: URL_MARKER_HOWERED,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function MapComponent(props: MapComponentProps): JSX.Element {
  const { city, points, selectedPoint, hoveredPoint } = props; // Добавляем hoveredPoint в деструктуризацию

  const mapRef = useRef(null);

  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      // Центрируем карту на выбранном месте, если оно задано
      if (selectedPoint) {
        map.setView([selectedPoint.location.latitude, selectedPoint.location.longitude], selectedPoint.location.zoom);
      } else {
        map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
      }
    }
  }, [map, city, selectedPoint]); // Изменяем зависимости только на city и selectedPoint

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      if (selectedPoint) {
        const selectedMarker = new Marker({
          lat: selectedPoint.location.latitude,
          lng: selectedPoint.location.longitude
        });
        const selectedIcon = currentCustomIcon;
        selectedMarker.setIcon(selectedIcon).addTo(markerLayer);
      }

      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude
        });

        let icon = defaultCustomIcon;
        if (hoveredPoint !== undefined && point.id === hoveredPoint.id) {
          icon = howeredCustomIcon;
        }

        marker.setIcon(icon).addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedPoint, hoveredPoint]); // Обновляем маркеры при изменении points, selectedPoint или hoveredPoint

  return <div style={{ height: '100%' }} ref={mapRef}></div>;
}

export default MapComponent;
