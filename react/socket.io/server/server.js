const express = require('express'),
      app = express(),
      server = require('http').createServer(app),
      io = require('socket.io')(server),
      cors = require('cors'),
      bodyParser = require('body-parser')

app.use(cors({origin: true, credentials: true}));
app.use(bodyParser.json())

io.on('connection', function (socket) {
  socket.on('from:react', function (data) {
    socket.emit('from:server', data)
  });
});

server.listen(3000, () => console.log('listening on port 3000!'))