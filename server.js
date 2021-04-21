const express = require('express');
const app = express();



const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/frontend'));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/frontend/index.html');
});

app.listen(PORT, () => {
    console.log('Servidor iniciadio na porta ' + PORT)
});

