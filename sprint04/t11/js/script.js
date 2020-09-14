// Set access token.
mapboxgl.accessToken = "pk.eyJ1IjoiaWh1bWVuaXVrIiwiYSI6ImNrZXV4aTN0ZjJ2ajEyd284dDNwNjE4cWkifQ.kbxgWC34JoAYI8nHaVWS1A";

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v10',
  zoom: 13,
  center: [165.973, -50.604167]
});

var geocoder = new MapboxGeocoder({ // Initialize the geocoder
  accessToken: mapboxgl.accessToken, // Set the access token
  mapboxgl: mapboxgl, // Set the mapbox-gl instance
  marker: false, // Do not use the default marker style
});

// Add the geocoder to the map
var geocoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  marker: {
    color: "skyblue"
  },
  mapboxgl: mapboxgl,
  placeholder: "Search", // Placeholder text for the search bar
});

map.addControl(geocoder);

// Initialize the geolocate control.
var geolocate = new mapboxgl.GeolocateControl({
  positionOptions: {
    enableHighAccuracy: true
  },
  trackUserLocation: true
});

// Add the control to the map.
map.addControl(geolocate);

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

var userPositionMarker;
var userCoords;

geolocate.on('geolocate', function (e) {
  userCoords = [e.coords.longitude, e.coords.latitude];
});

geolocate.on('trackuserlocationstart', function (e) {
  userPositionMarker?.remove();
});

geolocate.on('trackuserlocationend', function (e) {
  console.log(userCoords);
  userPositionMarker = new mapboxgl.Marker()
    .setLngLat(userCoords)
    .addTo(map);
});
