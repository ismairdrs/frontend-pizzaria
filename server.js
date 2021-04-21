const express = require('express');
const cors = require('cors');
const app = express();

var corsOptions = {
    origin: function (origin, callback) {
      db.loadOrigins(function (error, origins) {
        callback(error, origins)
      })
    }
  }

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/frontend'));

app.get('/*', cors(corsOptions), (req, res) => {
    res.sendFile(__dirname + '/dist/frontend/index.html');
    res.json({msg: 'cors'})
});

app.listen(PORT, () => {
    console.log('Servidor iniciadio na porta ' + PORT)
});

