import React, { useEffect, useRef } from 'react';

import useMap from 'src/hooks/use-map';
import { Icon, Marker } from 'leaflet';

import { LAT, LNG } from 'src/utils/const';
import DefaultPin from '../../../assets/img/icon-blip.svg';
import 'leaflet/dist/leaflet.css';
import * as S from './contacts-map.styled';

const defaultIcon = new Icon({
  iconUrl: DefaultPin,
  iconSize: [56, 70],
  iconAnchor: [20, 25],
});

const defaultIconSmall = new Icon({
  iconUrl: DefaultPin,
  iconSize: [46, 60],
  iconAnchor: [18, 15],
});

const ContactsMap = () => {
  const mapRef = useRef(null);
  const map = useMap(mapRef);

  useEffect(() => {
    if (map) {
      const marker = new Marker({
        lat: LAT,
        lng: LNG,
      });

      marker.setIcon(defaultIcon).addTo(map);

      map.on('zoomend', () => {
        const currentZoom = map.getZoom();

        if (currentZoom < 17) {
          marker.setIcon(defaultIconSmall);
        } else {
          marker.setIcon(defaultIcon);
        }
      });
    }
  }, [map]);

  return <S.ContactsMap ref={mapRef} />;
};

export default ContactsMap;
