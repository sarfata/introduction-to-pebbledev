function displayTime() {
    var now = new Date();
      simply.text({
            title: "         " + now.getHours() + ":" 
              + now.getMinutes() 
              + ":" + now.getSeconds()
          }, true);
}

// FullScreen mode
simply.fullscreen(true);

// Display time now
displayTime();

// And update it every second
setInterval(displayTime, 1000);
