var map = L.map( 'map', {
  center: [20.0, 5.0],
  minZoom: 2,
  zoom: 2
})

L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: ['a', 'b', 'c']
}).addTo( map )

var myURL = jQuery( 'script[src$="leaf-demo.js"]' ).attr( 'src' ).replace( 'leaf-demo.js', '' )

var myIcon = L.icon({
  iconUrl: myURL + 'images/pin24.png',
  iconRetinaUrl: myURL + 'images/pin48.png',
  iconSize: [29, 24],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14]
})

for ( var i=0; i < markers.length; ++i )
{
 L.marker( [markers[i].lat, markers[i].lng], {icon: myIcon} )
  .bindPopup( '<a href="' + markers[i].url + '" target="_blank">' + markers[i].name + '</a>' )
  .addTo( map );
}

// zoom control options
var zoomOptions = {
  zoomInText: '1',
  zoomOutText: '0',
};
// Creating zoom control
var zoom = L.control.zoom(zoomOptions);
zoom.addTo(map);


// var searchControl = L.esri.Geocoding.geosearch().addTo(map);

// var results = L.layerGroup().addTo(map);

// searchControl.on('results', function(data){
//   results.clearLayers();
  
//   for(var i=data.results.length - 1; i>=0; i--){
//     results.addLayer(L.marker(data.results[i].latlong));
//   }
// })



// L.control.scale().addTo(map);

    // search 
    // var searchLayer = L.layerGroup().addTo(map);
    // //... adding data in searchLayer ...
    // map.addControl( new L.Control.Search({layer: searchLayer}) );
    // //searchLayer is a L.LayerGroup contains searched markers
    // searchlayer = L.geoJSON.ajax('data.json').addTo(map);
    // searchlayer.on('data:loaded', function() {map.addControl(new L.Control.Search({layer:searchlayer}))});


  // var searchControl = new L.Control.Search({
  //   layer: geojsonLayer,
  //   propertyName: 'name',
  //   textPlaceholder: 'Suche',
  //   collapsed: false,
  //   marker: false,
  //   moveToLocation: function (latlng) {
  //     map.setView(latlng, 12);
  //   }
  // });
  
  // map.addControl(searchControl);
  