const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/frontend'));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/frontend/index.html');
});

app.listen(PORT, () => {
    console.log('Servidor iniciadio na porta ' + PORT)
});