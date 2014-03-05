Pebble.addEventListener('ready', function() {
  console.log("Ready!");
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log("Got position! " + JSON.stringify(position));
    Pebble.sendAppMessage({ 42: "Lat: " + position.coords.latitude + " Long:" + position.coords.longitude });
  });
});
