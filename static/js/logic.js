// Creating our initial map object
// Centered in Colorado with a zoom that allows to cover most of the United States, recognizing that the focus area is the West Coast
var myMap = L.map("map", {
  center: [37.7392, -104.99],
  zoom: 4.3
});

// Adding the tile layer or base layer for the subsequent map additions
// 
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// Setting a d3.json response function to start bringing data to the map. All other layers will be added inside this function
var queryUrl = "https:earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

d3.json(queryUrl).then(function(response) {

  console.log(response);
// The json response return objects with the following keys: bbox, features and metadata.
// Inside features we can find geometry (where coordinates are stored) and properties, where the earthquake magnitude is found

  function CircleStyle(feature) {
    return {
      opacity: 1,
      fillOpacity: 1,
      fillColor: circleColor(feature.properties.mag),
      color: "#0033cc",
      //the radius is adjusted to have better resolution. If not multiplied by 2, the circles are too small
      radius: (feature.properties.mag)*2,
      stroke: true,
      weight: 1
    };
  }

  // Colors for the earthquake magnitude. Applying switch insted of elseif
  function circleColor(magnitude) {
    switch (true) {
    case magnitude > 5:
      return "#ff0000";
    case magnitude > 4:
      return "#ff0066";
    case magnitude > 3:
      return "#ff66ff";
    case magnitude > 2:
      return "#99ccff";
    case magnitude > 1:
      return "#66ffff";
    default:
      return "#ffffff";
    }}

//  from https://geospatialresponse.wordpress.com/2015/07/26/leaflet-geojson-pointtolayer/
    L.geoJson(response, {
      // Maken cricles
      pointToLayer: function(feature, latlng) {
        return new L.circleMarker(latlng);
      },
      // circle style
      style: CircleStyle,
      //-------------------------------------------------------------
      
      // popup for each marker
      onEachFeature: function(feature, layer) {
        layer.bindPopup(feature.properties.title);
        layer.on("mouseover", function(evt) { this.openPopup(); });
		    layer.on("mouseout", function(evt) { this.closePopup(); });
      }
    }).addTo(myMap);



});
