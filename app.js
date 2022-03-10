const express = require("express");
const app = express();
require("./src/modeles/dbConfig");
const jwt = require('jsonwebtoken');

const utilisateursRouteur = require("./src/routes/utilisateurs.route");
const platsRouteur = require("./src/routes/plats.route");
const connexionRouteur = require("./src/routes/app.route");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use("/utilisateurs", authentifierToken, utilisateursRouteur);
app.use("/plats", authentifierToken,platsRouteur);
app.use("", connexionRouteur);

app.listen(8080, () =>
  console.log("Le serveur est démarré sur le port : 8080")
);

async function authentifierToken(req, res, next) {
    const auth = req.headers['authorization'];
    const token = auth && auth.split(' ')[1];
  
    if (!token) {
      return res.sendStatus(401);
    }
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, utilisateur) => {
      if (err) {
        return res.sendStatus(401);
      }
      req.utilisateur = utilisateur;
      next();
    });
}