const express = require("express");
const { route } = require("express/lib/application");
const router = express.Router();
const utilisateursControleur = require("../controleurs/utilisateurs.controleur");

router.get("/", utilisateursControleur.recupererLesUtilisateurs);

router.get("/:id", utilisateursControleur.recupererUnUtilisateur);

router.put("/:id", utilisateursControleur.modifierUnUtilisateur);

router.delete("/:id", utilisateursControleur.supprimerUnUtilisateur);

module.exports = router;
