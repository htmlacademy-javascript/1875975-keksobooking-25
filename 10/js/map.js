import {getDisableForm, getActiveForm} from './form-state.js';
import {createPopup} from './card.js';

const SIMILAR_AD_COUNT = 10;
const ZOOM = 13;

const MAP_CENTER = {
  lat: 35.65283,
  lng: 139.83947,
};

const address = document.querySelector('#address');

getDisableForm();

const map = L.map('map-canvas')
  .on('load', () => {
    getActiveForm();
  })
  .setView(MAP_CENTER, ZOOM);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const adPinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const mainPinMarker = L.marker(
  MAP_CENTER,
  {
    draggable: true,
    icon: mainPinIcon,
  }
);

mainPinMarker.addTo(map);

address.value = `${mainPinMarker.getLatLng().lat}, ${mainPinMarker.getLatLng().lng}`;
mainPinMarker.on('moveend', (evt) => {
  const latlng = evt.target.getLatLng();
  address.value = `${latlng.lat.toFixed(5)}, ${latlng.lng.toFixed(5)}`;
});

const markerGroup = L.layerGroup().addTo(map);

const createPin = (ad) => {
  const adPin = L.marker(
    {
      lat: ad.location.lat,
      lng: ad.location.lng,
    },
    {
      icon: adPinIcon,
    }
  );
  adPin
    .addTo(markerGroup)
    .bindPopup(createPopup(ad));
};

const getSimilarAds = (array) => {
  array.slice(0, SIMILAR_AD_COUNT).forEach(createPin);
};

const resetMap = () => {
  mainPinMarker.setLatLng(MAP_CENTER);
  address.value = `${MAP_CENTER.lat}, ${MAP_CENTER.lng}`;
  map.setView(MAP_CENTER, ZOOM);
  map.closePopup();
};

export {getSimilarAds, resetMap};

