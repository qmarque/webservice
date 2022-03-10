const express = require("express");
const router = express.Router();
const utilisateursControleur = require("../controleurs/utilisateurs.controleur");

router.get("/", utilisateursControleur.recupererLesUtilisateurs);

router.get("/:id", utilisateursControleur.recupererUnUtilisateur);

router.post("/", utilisateursControleur.creerUnUtilisateur);

router.put("/:id", utilisateursControleur.modifierUnUtilisateur);

router.delete("/:id", utilisateursControleur.supprimerUnUtilisateur);

module.exports = router;
