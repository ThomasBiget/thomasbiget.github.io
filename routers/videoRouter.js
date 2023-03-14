const express = require('express');
const videoRouter = express.Router();

videoRouter.get("/video", (req, res) => {
    res.locals.needCss = false;
    res.locals.message = "L'url que vous cherchez est introuvable";
    res.status(404).render('error404');
});

module.exports = videoRouter;