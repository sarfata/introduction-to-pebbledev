# helloworld2 - add a text layer

      // Create and configure the details layer
      details_layer = text_layer_create(GRect(0, 80, 144, 88));
      text_layer_set_text(details_layer, "Details...");
      text_layer_set_text_alignment(details_layer, GTextAlignmentCenter);
      layer_add_child(window_get_root_layer(window), text_layer_get_layer(details_layer));

      // +deinit
      text_layer_destroy(details_layer);


# helloworld3 - accel

Add a new handler:

    void handle_accel(AccelData *data, uint32_t num_samples) {
      static char buffer[40];

      snprintf(buffer, sizeof(buffer), "X: %i Y: %i Z: %i", data->x, data->y, data->z);
      text_layer_set_text(details_layer, buffer);
    }

And in handle_init:

      accel_data_service_subscribe(3, handle_accel);

# helloworld4 appmessage

Replace the accel handler with:

    void handle_inbox_received(DictionaryIterator *received, void *context) {
      static char buffer[40];

      Tuple *message = dict_find(received, 42);

      if (message != NULL) {
        strncpy(buffer, message->value->cstring, sizeof(buffer));
        text_layer_set_text(details_layer, buffer);
      }
    }

And replace the accel subscribe call in `handle_init` with:


      app_message_register_inbox_received(handle_inbox_received);
      app_message_open(100, 100);

And some JS:

    Pebble.addEventListener('ready', function() {
      console.log("Ready!");
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Got position! " + JSON.stringify(position));
        Pebble.sendAppMessage({ 42: "Lat: " + position.coords.latitude + " Long:" + position.coords.longitude });
      });
    });
