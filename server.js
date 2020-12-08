let express = require('express');
let app = express();
let port = 3000;

// Préparation du serveur

app.use(express.static(__dirname + '/www'));

//Ajout des librairies
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.listen(port, () => {
    console.log('Le serveur est en route');
    console.log(`Serveur listening at http://localhost:${port}`);
})

// Redirection vers page index
app.get('/', (req, res, next) => {
    res.sendFile('www/index.html');
});