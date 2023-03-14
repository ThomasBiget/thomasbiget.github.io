const express = require('express');
const loginRouter = express.Router();
const users = require('../users.json');
// url : /login/
loginRouter.get('/', (req, res) => {
    res.locals.needCss = false;
    // Dans le répretoire views on ouvre le sous répertoire login et on va cherche le fichier ejs appelé login
    res.render('login/login')
})

//ON veut maintenant intercepter les requête http sur la route /login/verif qui utilisent la méthode POST
// url : /login/verif
loginRouter.post('/verif', (req, res, next) =>{


    //avec find

        if('nikita' === req.body.login && 'doby' == req.body.pass ){
           res.render('login/video')
            
        }else{
            res.locals.needCss = false;
            res.status(403).render('error403');
        }

    }
    //avec une boucle


    // if(req.body.login != 'seb' || req.body.pass != 'tagazok'){
    //     res.status(403).send('<h1>403 - forbidden</h1>');
    // }else{
    //     next()
    // }
)

loginRouter.post('/verif', (req, res) =>{
    res.status(301);
    res.redirect('/');
})

module.exports = loginRouter;