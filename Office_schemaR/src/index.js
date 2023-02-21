import L from 'leaflet';
import 'leaflet-search';

import markers from './markers/markers';
import { getMarkerPopUpTemplate, getIconTemplate } from './utils/templates';

import mapLayer from './assets/media/map.jpg';

import './styles/leaflet 1.7.1.css';
import './styles/leaflet-search.css';
import './styles/fonts.css';
import './styles/main.css';


// Using leaflet.js to pan and zoom a big image.
// See also: http://kempe.net/blog/2014/06/14/leaflet-pan-zoom-image.html

// create the slippy map
const mapOptions = {
  minZoom: 1,
  maxZoom: 4,
  center: [0, 0],
  zoom: 1,
  crs: L.CRS.Simple
}

const map = new L.map('image-map', mapOptions);

// dimensions of the image
const w = 1920,
  h = 1368,
  url = mapLayer;

// calculate the edges of the image, in coordinate space
const northWest = map.unproject([0, h], map.getMaxZoom() - 1);
const southEast = map.unproject([w, 0], map.getMaxZoom() - 1);
const bounds = new L.LatLngBounds(northWest, southEast);
// add the image overlay, 
// so that it covers the entire map
L.imageOverlay(url, bounds).addTo(map);
// tell leaflet that the map is exactly as big as the image
map.setMaxBounds(bounds);


// //search 
// const searchLayer = L.layerGroup().addTo(map);
// //... adding data in searchLayer ...
// map.addControl( new L.Control.Search({layer: searchLayer}) );
// //searchLayer is a L.LayerGroup contains searched markers

// L.control.scale().addTo(map);

// // Creating a marker
// const marker = L.marker([-50, 200]).bindPopup('This is marker').openPopup().addTo(map);
// const marker2 = L.marker([-100, 200]).bindPopup('This is marker2').openPopup().addTo(map);

// // Adding marker to the map
// marker.addTo(map);
// marker2.addTo(map);


// Icon options
//   const iconOptions = {
//     className: 'image-icon',
//     // iconUrl: 'media/semernin.png',
//     iconSize: [40, 40],
//     iconUrl: 'img',
//     className: 'image-icon'
//     }
//   // Creating a custom icon
//   const customIcon = L.icon(iconOptions);
//   const markerOptions = {
//     clickable: true,
//     draggable: false,
//     icon: customIcon
//  }
const markersLayer = new L.LayerGroup();
map.addLayer(markersLayer);

var controlSearch = new L.Control.Search({
  position: 'topleft',
  layer: markersLayer,
  initial: false,
  zoom: 6,
  marker: false,
  textPlaceholder: 'search...'
});
map.addControl(controlSearch);

controlSearch.on('search:collapsed', function (e) {
  map.setView([51.101516, 10.313446], 6);
});

markers.forEach(m => {
  const title = `${m.first_name} ${m.last_name}`;
  const markerLocation = [m.latitude, m.longitude];

  const icon = L.divIcon({
    html: getIconTemplate(m.icon, title),
    iconSize: [40, 40], // size of the icon
    iconAnchor: [26, 60], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -60],
    class: "marker",
  });
  const marker = new L.Marker(new L.latLng(markerLocation), { title, icon });//set property searched
  marker.bindPopup
    (getMarkerPopUpTemplate(title, m.url));
  markersLayer.addLayer(marker);
})

const circle = L.circle([-100, 100], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 20
})
  .bindPopup('This is circle')
  .addTo(map);

const polygon = L.polygon([
  [-100, 10],
  [-151, 50],
  [-120, 60],
  [-80, 20]],
  {
    color: 'green',
  })
  .bindPopup('This is polygon')
  .addTo(map);


//// take coordinates by click
function onMapClick(e) {
  L.popup()
    .setLatLng(e.latlng)
    .setContent(e.latlng.toString())
    .openOn(map);
}
map.on('click', onMapClick);




// // add a layer group, yet empty
// const markersLayer = new L.LayerGroup();  
// map.addLayer(markersLayer); 
// // add the search bar to the map
// const controlSearch = new L.Control.Search({
//   position:'topright',    // where do you want the search bar?
//   layer: markers,  // name of the layer
//   initial: false,
//   zoom: 11,        // set zoom to found location when searched
//   marker: false,
//   textPlaceholder: 'search...' // placeholder while nothing is searched
// });

// map.addControl(controlSearch); // add it to the map

//////////////////////////////////////////////////////////////

////add markers to map
// map.on('click', onMapClick);
// function onMapClick(e) {
//         const marker = new L.Marker(e.latlng, {draggable:true});
//         map.addLayer(marker);
//         marker.bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();
// };



//////////////////////////////////////////////////////////////
//     //// add two markers
// let img = `<img src='${semernin}'/>`;
// const marker1 = new L.marker([-48.862312, 100.332317], {
//   icon: L.divIcon({
//     html: img,
//     // Specify a class name we can refer to in CSS.
//     className: 'image-icon',
//     // Set a markers width and height.
//     iconSize: [40, 40]
//   })
// });
// marker1.bindPopup('Misha').openPopup().addTo(map);

// img = `<img src='${kosmos}'/>`;
// const marker2 = new L.marker([-48.862312, 50.332317], {
//   icon: L.divIcon({
//     html: img,
//     // Specify a class name we can refer to in CSS.
//     className: 'image-icon',
//     // Set a markers width and height.
//     iconSize: [40, 40]
//   })
// });
// marker2.bindPopup('Kosmos').openPopup().addTo(map);