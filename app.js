const express = require("express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const app = express();
require("./src/modeles/dbConfig");
const jwt = require("jsonwebtoken");

const utilisateursRouteur = require("./src/routes/utilisateurs.route");
const platsRouteur = require("./src/routes/plats.route");
const connexionRouteur = require("./src/routes/app.route");
const bodyParser = require("body-parser");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Biblicette",
      version: "0.1.0",
      description:
        "La librairie API du projet biblicette développé avec Express et documenté avec Swagger",
    },
    servers: [
      {
        url: "http://localhost:8080",
      },
    ],
  },
  apis: ["./src/routes/*.js "],
};

const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

app.use(bodyParser.json());
app.use("/utilisateurs", authentifierToken, utilisateursRouteur);
app.use("/plats", authentifierToken, platsRouteur);
app.use("", connexionRouteur);

app.listen(8080, () =>
  console.log("Le serveur est démarré sur le port : 8080")
);

async function authentifierToken(req, res, next) {
  const auth = req.headers["authorization"];
  const token = auth && auth.split(" ")[1];

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
