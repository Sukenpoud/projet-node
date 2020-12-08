let express = require('express');
let app = express();
let port = 3000;

// Préparation du serveur
app.listen(port, () => {
    console.log('Le serveur est en route');
    console.log(`Serveur listening at http://localhost:${port}`);
})

app.use(express.static(__dirname + '/www'));

// Redirection vers page index
app.get('/', (req, res, next) => {
    res.sendFile('/www/index.html');
});