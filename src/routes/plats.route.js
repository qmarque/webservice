const express = require("express");
const router = express.Router();
const platsControleur = require("../controleurs/plats.controleur");

router.get("/", platsControleur.recupererLesPlats);

router.get("/:id", platsControleur.recupererUnPlat);

router.post("/", platsControleur.creerUnPlat);

router.put("/:id", platsControleur.modifierUnPlat);

router.delete("/:id", platsControleur.supprimerUnPlat);

module.exports = router;
