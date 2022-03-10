const express = require("express");
const router = express.Router();
const utilisateursControleur = require("../controleurs/utilisateurs.controleur");

router.post("/connexion", utilisateursControleur.connexion);

module.exports = router;
