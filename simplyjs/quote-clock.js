function displayTime() {
    var now = new Date();
      simply.text({
            title: "         " + now.getHours() + ":"
              + now.getMinutes()
              + ":" + now.getSeconds()
          }, false);
}

// Clear the screen
simply.text({}, true);

// FullScreen mode
simply.fullscreen(true);

// Display time now
displayTime();

// And update it every second
setInterval(displayTime, 1000);

// Fetch a quote
ajax({ 
    url: 'http://api.theysaidso.com/qod.json', 
    type: 'json' 
  }, 
  function(quote) {
    simply.text( { subtitle: quote.contents.author, 
                   body: quote.contents.quote });
  }
);
simply.scrollable(true);
