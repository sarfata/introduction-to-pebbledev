# 1 - Just show some text on screen

    simply.text({
      title: "Hello",
      subtitle: "World",
      body: "The real sense of life the existence and the universe..."
    });

# 2 - First version - Display a clock

    function displayTime() {
      var now = new Date();
      simply.text({
        title: "         " + now.getHours() + ":" 
            + now.getMinutes() 
            + ":" + now.getSeconds()
        }, true);
      setTimeout(displayTime, 1000);
    }

    // FullScreen mode
    simply.fullscreen(true);

    // Display time now
    displayTime();

# 3 - And also display a quote!

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

Finally: Change the last parameter of `displayTime` call to `simply.text()` to be `false`.
