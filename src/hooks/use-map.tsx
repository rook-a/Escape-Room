import { useEffect, useState, MutableRefObject } from 'react';
import { DomUtil, Map, TileLayer } from 'leaflet';
import { LAT, LNG } from '../utils/const';

const LAYER_URL =
  'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const LAYER_COPYRIGHT =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';
const ZOOM = 17;

interface FakeHTMLElement extends HTMLElement {
  _leaflet_id: number | null;
}

const useMap = (mapRef: MutableRefObject<HTMLElement | null>): Map | null => {
  const [map, setMap] = useState<Map | null>(null);
  console.log('рендерится дважды. найти причину');

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const container = DomUtil.get(mapRef.current) as FakeHTMLElement;
      if (container !== null) {
        container._leaflet_id = null;
      }

      const instance = new Map(mapRef.current, {
        center: {
          lat: LAT,
          lng: LNG,
        },
        zoom: ZOOM,
      });

      const layer = new TileLayer(LAYER_URL, {
        attribution: LAYER_COPYRIGHT,
        maxZoom: ZOOM,
      });

      instance.addLayer(layer);

      setMap(instance);
    }
  }, [mapRef, map]);

  return map;
};

export default useMap;
