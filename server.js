let express = require('express');
let app = express();
let port = 3000;

let bodyparser = require('body-parser');

// Préparation du serveur
app.use('/', express.static(__dirname + '/www')); // redirect root
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/js', express.static(__dirname + '/node_modules/popper.js/dist/umd')); // redirect popper
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect

// Bodyparser
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

// On lance l'écoute sur le port spécifié
app.listen(port, () => {
  console.log('Le serveur est en route');
  console.log(`Serveur listening at http://localhost:${port}`);
})

let monobjet = {
  nom: 'monobjet',
  valeur:10
}

// Configuration d'EJS
app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views')); // redirect views

// Routes
app.get('/', (req, res, next) => {
  res.render('index.ejs', {monobjet: monobjet});
});

app.get('/page2', (req, res, next) => {
  res.render('page2.ejs');
});

// Route POST
app.post('/page2', (req, res, next) => {
  console.log(req.body.name); //body = contenu de la requete, name=nom du champ du formulaire
});



// Si la page ne correspond à aucune route
app.use((req, res, next) => {
  res.status(404).render('error.ejs');
});

