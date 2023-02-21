function showmap(){
    // Using leaflet.js to pan and zoom a big image.
    // See also: http://kempe.net/blog/2014/06/14/leaflet-pan-zoom-image.html

    // create the slippy map
    var mapOptions = {
      minZoom: 1,
      maxZoom: 4,
      center: [0, 0],
      zoom: 1,
      crs: L.CRS.Simple
   }

    var map = new L.map('image-map', mapOptions);

    // dimensions of the image
    var w = 1920,
        h = 1368,
        url = 'media/map.jpg';

    // calculate the edges of the image, in coordinate space
    var northWest = map.unproject([0, h], map.getMaxZoom()-1);
    var southEast = map.unproject([w, 0], map.getMaxZoom()-1);
    var bounds = new L.LatLngBounds(northWest, southEast);
    // add the image overlay, 
    // so that it covers the entire map
    L.imageOverlay(url, bounds).addTo(map);
    // tell leaflet that the map is exactly as big as the image
    map.setMaxBounds(bounds);


    // //search 
    // var searchLayer = L.layerGroup().addTo(map);
    // //... adding data in searchLayer ...
    // map.addControl( new L.Control.Search({layer: searchLayer}) );
    // //searchLayer is a L.LayerGroup contains searched markers

    // L.control.scale().addTo(map);

    // // Creating a marker
    // var marker = L.marker([-50, 200]).bindPopup('This is marker').openPopup().addTo(map);
    // var marker2 = L.marker([-100, 200]).bindPopup('This is marker2').openPopup().addTo(map);

    // // Adding marker to the map
    // marker.addTo(map);
    // marker2.addTo(map);


    // Icon options
  //   var iconOptions = {
  //     className: 'image-icon',
  //     // iconUrl: 'media/semernin.png',
  //     iconSize: [40, 40],
  //     iconUrl: 'img',
  //     className: 'image-icon'
  //     }
  //   // Creating a custom icon
  //   var customIcon = L.icon(iconOptions);
  //   var markerOptions = {
  //     clickable: true,
  //     draggable: false,
  //     icon: customIcon
  //  }

    for ( var i=0; i < markers.length; ++i )
    {
    //  L.marker( [markers[i].lat, markers[i].lng], markerOptions).bindPopup(markers[i].name + "<br>" + markers[i].url).openPopup().addTo(map);
    L.marker( [markers[i].lat, markers[i].lng])
    .bindPopup(markers[i].name  + "<br>" + '<a href="' + markers[i].url + '" target="_blank">' + markers[i].url + '</a>')
    .addTo( map );
    }

//     for ( var i=0; i < markers.length; ++i )
// {
//  L.marker( [markers[i].lat, markers[i].lng], {icon: myIcon} )
//   .bindPopup( '<a href="' + markers[i].url + '" target="_blank">' + markers[i].name + '</a>' )
//   .addTo( map );
// }

    var circle = L.circle([-100, 100], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 20
    })
    .bindPopup('This is circle')
    .addTo(map);

    var polygon = L.polygon([
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
// var markersLayer = new L.LayerGroup();  
// map.addLayer(markersLayer); 
// // add the search bar to the map
// var controlSearch = new L.Control.Search({
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
    //         var marker = new L.Marker(e.latlng, {draggable:true});
    //         map.addLayer(marker);
    //         marker.bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();
    // };



    //////////////////////////////////////////////////////////////
//     //// add two markers
var img = "<img src='media/semernin.png'/>";
var marker1 = new L.marker([-48.862312, 100.332317], {icon: L.divIcon({html: img, className: 'image-icon', iconSize: [40, 40]}) });
marker1.bindPopup('Name: Misha' + '<br>' + "Phone: 066-7778899").openPopup().addTo(map);

var img = "<img src='media/kosmos.png'/>";
var marker2 = new L.marker([-48.862312, 50.332317], {
    icon: L.divIcon({
        html: img,
        // Specify a class name we can refer to in CSS.
        className: 'image-icon',
        // Set a markers width and height.
        iconSize: [40, 40]
        }) 
});
marker2.bindPopup('Kosmos').openPopup().addTo(map);

    
}




