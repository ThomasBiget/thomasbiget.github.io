/*!===================================
*   Import des dépendence
*=====================================*/
// on charge le module express
const express = require('express');

//importe notre routeur pour la 404
const errorRouter = require('./routers/errorRouter');

const loginRouter = require('./routers/loginRouter');

/*!===================================
*   Configuration d'express
*=====================================*/
// on initialise express
const app = express();
const port = 4000;

// On demande à notre application d'utiliser le moteur de rendu ejs
app.set('view engine', 'ejs');

/*!===================================
*   Gestion des routes
*=====================================*/

// ON défini le dossier public comme étant l'endroit où on va stocké nos fichiers static. (css , js front, images, videos, pdf, ....);
app.use(express.static('public'));

// Toute les requête POST passerons par ce middleware et verront leur body intéerprété et lisible dans la requete grace à req.body
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.locals.needCss = false;
    //Pas besoin de préciser qu'on cherche dans le dossier views car par defaut c'est qu'ira cherché Express
    //res.rend est une fonction de terminaison. donc à mettre en fin de la fonction qui doit afficher la page. Si du code est présent en dessous il ne sera jamais exécuté
    res.render('./login/login');
});

app.use('/login',loginRouter);

/*!===================================
*   Lancement de l'app
*=====================================*/
app.listen(port, () => console.log(`Le serveur est lancé et écoute sur l'adresse http://localhost:${port}`));
