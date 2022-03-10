const utilisateurs = require("../services/utilisateurs.service");

async function recupererLesUtilisateurs(req, res) {
  try {
    res.status(200).json(await utilisateurs.recupererLesUtilisateurs(req));
  } catch (err) {
    res.status(200).send("Il n'existe aucun utilisateur");
  }
}

async function recupererUnUtilisateur(req, res) {
  try {
    res
      .status(200)
      .json(await utilisateurs.recupererUnUtilisateur(req.params.id));
  } catch (err) {
    return res.status(404).send("ID inconnu : " + req.params.id);
  }
}

async function creerUnUtilisateur(req, res) {
  try {
    res.status(201).json(await utilisateurs.creerUnUtilisateur(req.body));
  } catch (err) {
    return res.status(400).send("Erreur de création de l'utilisateur");
  }
}

async function modifierUnUtilisateur(req, res) {
  try {
    res
      .status(200)
      .json(await utilisateurs.modifierUnUtilisateur(req.params.id, req.body));
  } catch (err) {
    return res.status(404).send("ID inconnu : " + req.params.id);
  }
}

async function supprimerUnUtilisateur(req, res) {
  try {
    res
      .status(200)
      .json(await utilisateurs.supprimerUnUtilisateur(req.params.id));
  } catch (err) {
    return res.status(404).send("ID inconnu : " + req.params.id);
  }
}

async function connexion(req, res) {
  try {
    res
      .status(200)
      .json(await utilisateurs.existe(req.body.pseudo, req.body.mdp));
  } catch (err) {
    return res.status(401).send("Erreur de connexion");
  }
}

module.exports = {
  creerUnUtilisateur,
  connexion,
  modifierUnUtilisateur,
  recupererLesUtilisateurs,
  recupererUnUtilisateur,
  supprimerUnUtilisateur,
};
