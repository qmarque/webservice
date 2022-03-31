const plats = require("../services/plats.service");

async function recupererLesPlats(req, res) {
  try {
    res.status(200).json(await plats.recupererLesPlats(req));
  } catch (err) {
    res.status(200).send("Il n'existe aucun plat");
  }
}

async function recupererUnPlat(req, res) {
  try {
    res.status(200).json(await plats.recupererUnPlat(req.params.id));
  } catch (err) {
    return res.status(404).send("ID inconnu : " + req.params.id);
  }
}

async function creerUnPlat(req, res) {
  try {
    res.status(201).json(await plats.creerUnPlat(req.body));
  } catch (err) {
    return res.status(400).send("Erreur lors de la création du plat");
  }
}

async function modifierUnPlat(req, res) {
  try {
    res.status(200).json(await plats.modifierUnPlat(req.params.id, req.body));
  } catch (err) {
    return res.status(404).send("ID inconnu : " + req.params.id);
  }
}

async function supprimerUnPlat(req, res) {
  try {
    res.status(200).json(await plats.supprimerUnPlat(req.params.id));
  } catch (err) {
    return res.status(404).send("ID inconnu : " + req.params.id);
  }
}

module.exports = {
  recupererLesPlats,
  creerUnPlat,
  modifierUnPlat,
  supprimerUnPlat,
  recupererUnPlat,
};
