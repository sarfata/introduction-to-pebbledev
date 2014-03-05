// Clear the screen
simply.text({}, true);

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
