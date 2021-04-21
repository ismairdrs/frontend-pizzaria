const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(express.static(__dirname + '/dist/frontend'));

app.get('/*', cors(corsOptions), (req, res) => {
    res.sendFile(__dirname + '/dist/frontend/index.html');
    res.json({msg: 'cors'})
});

app.listen(PORT, () => {
    console.log('Servidor iniciadio na porta ' + PORT)
});

