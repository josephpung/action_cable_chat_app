  // App.room = App.cable.subscriptions.create "RoomChannel",
  //   connected: ->
  //     # Called when the subscription is ready for use on the server
  //
  //   disconnected: ->
  //     # Called when the subscription has been terminated by the server
  //
  //   received: (data) ->
  //     # Called when there's incoming data on the websocket for this channel

  App.room = App.cable.subscriptions.create("RoomChannel", {
    connected: function() {
      alert("User is connected")
    },
    disconnected: function() {},
    received: function(data) {
      // console.log(data);
      console.log(`New message + ${data.content}, ${data.username}`)
    }
  });
