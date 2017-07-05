// $(function() {
  var ws = new WebSocket("ws://localhost:8906");
    ws.onopen = function (e) {
        console.log('Connection to server opened');
    }
    function sendMessage() {
        ws.send($('#message').val());
    }


// });