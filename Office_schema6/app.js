function myFunction() {



  var map = L.map('map').setView([51.101516, 10.313446], 6);
  if (map.tap) map.tap.disable();
  L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
	maxZoom: 16
}).addTo(map);
  map._layersMinZoom=5;

var markersLayer = new L.LayerGroup();   
map.addLayer(markersLayer);





  var controlSearch = new L.Control.Search({
    position:'topleft',    
    layer: markersLayer,
    initial: false,
    zoom: 11,
    marker: false,
    textPlaceholder: 'search...'
  });

  map.addControl(controlSearch); 

  controlSearch.on('search:collapsed', function(e) {
      map.setView([51.101516, 10.313446], 6);
  })

// add var "code"
var code = '1ciPq3VfxUv3ucttkMPzNXNR1NLKA1JrOq1tGiLg2CsI'

// loop through spreadsheet with Tabletop
    Tabletop.init({ 
    key: code,
    callback: function(sheet, tabletop){ 
      
      for (var i in sheet){
        var data = sheet[i];

          var icon = L.icon({
              iconUrl: data.icon,
              iconSize:     [52, 60], // size of the icon
              iconAnchor:   [26, 60], // point of the icon which will correspond to marker's location
              popupAnchor: [0, -60]
          });
          if (data.iconori === "left") {
            icon = L.icon({
              iconUrl: data.icon,
              iconSize:     [60, 52], 
              iconAnchor:   [60, 26], 
              popupAnchor: [-35, -26]
              });
          };
          if (data.iconori === "right") {
            icon = L.icon({
              iconUrl: data.icon,
              iconSize:     [60, 52], 
              iconAnchor:   [0, 26], 
              popupAnchor: [35, -26]
              })
            };

            var title = data.newsroom,  //value searched
            loc = [data.longitude, data.latitude]    //position found
            marker = new L.Marker(new L.latLng(loc), {title: title, icon:icon} );//se property searched
            marker.bindPopup("<strong style='color: #84b819'>" + title + "</strong><br>" + 
                      data.company + " | " + data.city + "<br>Head: " + data.head);
            markersLayer.addLayer(marker);

      }
    },
    simpleSheet: true 
  })
  
}