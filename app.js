const express = require("express");
const app = express();
require("./src/modeles/dbConfig");

const utilisateursRouteur = require("./src/routes/utilisateurs.route");
const platsRouteur = require("./src/routes/plats.route");

const bodyParser = require("body-parser");

// const auth = require('./src/middleware/auth');

app.use(bodyParser.json());
app.use("/utilisateurs", utilisateursRouteur);
app.use("/plats", platsRouteur);

app.listen(8080, () =>
  console.log("Le serveur est démarré sur le port : 8080")
);
