# leaflet-challenge

### Workflow:
* Initial world map is loaded and center in Denver, CO. United Sates.
* Main layer is added (tile layer) to hold the subsequent map layers using mapbox standar API call. This layer is held in a variable called "street".
* Second layer (satellite view) is held in a variable called "satellite".
* A dictionary is created to hold the text of the layer control menu.
* The control menu is created using L.control.layers.
* Earthquake locations and magnitudes are obtained from: "https:earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson 
* Markers style are set in a defined function called "CircleStyle" where the radius of each marker will be read from the json response "feature.properties.mag" representing the earthquake magnitude.
* Colors to represent each earthquake magnituded are defined in a switch-case-return function.
* Markers location are obtained using the geojson response of "https://geospatialresponse.wordpress.com/2015/07/26/leaflet-geojson-pointtolayer/"
* Popup for each marker is added with a mouse over function to make it interactive and "clickless"
* Legend is added directly in the html file, creating a "div" tag to represent each earthquake magnitude. 

<b> NOTE </b>: Capture of the html file running in the local server can be found in in Images/Capture route of this repository.
