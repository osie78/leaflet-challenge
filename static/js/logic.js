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

// Setting a d3.jason response function to start bringing data to the map. All other layers will be added inside this function
var queryUrl = "https:earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

d3.json(queryUrl).then(function(response) {

  console.log(response);



});
