const express = require("express");
const router = express.Router();
const utilisateursControleur = require("../controleurs/utilisateurs.controleur");

router.get("/", utilisateursControleur.get);

router.get("/:id", utilisateursControleur.getOne);

router.post("/", utilisateursControleur.create);

router.put("/:id", utilisateursControleur.update);

router.delete("/:id", utilisateursControleur.remove);

router.post("/login", utilisateursControleur.login);

module.exports = router;
