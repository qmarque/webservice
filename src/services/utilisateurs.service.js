require('dotenv').config();
const { Utilisateur } = require("../modeles/utilisateursModele");
const jwt = require('jsonwebtoken');

async function recupererLesUtilisateurs() {
  return Utilisateur.find();
}

async function recupererUnUtilisateur(id) {
  return Utilisateur.findById(id);
}

async function creerUnUtilisateur(utilisateur) {
  const nouvelUtilisateur = new Utilisateur({
    pseudo: utilisateur.pseudo,
    nom: utilisateur.nom,
    prenom: utilisateur.prenom,
    mail: utilisateur.mail,
    mdp: utilisateur.mdp,
  });

  return nouvelUtilisateur.save();
}

async function modifierUnUtilisateur(id, utilisateur) {
  const modifierUtilisateur = {
    pseudo: utilisateur.pseudo,
    nom: utilisateur.nom,
    prenom: utilisateur.prenom,
    mail: utilisateur.mail,
    mdp: utilisateur.mdp,
  };

  return Utilisateur.findByIdAndUpdate(
    id,
    { $set: modifierUtilisateur },
    { new: true }
  );
}

async function supprimerUnUtilisateur(id) {
  return Utilisateur.findByIdAndRemove(id);
}

async function existe(utilisateur) {
  const result = await Utilisateur.findOne({
    pseudo: utilisateur.pseudo,
    mdp: utilisateur.mdp,
  }).exec();
  if (result != null) {
    const token = genererToken(utilisateur);
    const nouveauToken = genererNouveauToken(utilisateur);
    return {
      token,
      nouveauToken,
    };
  }
}

function genererToken(utilisateur) {
  return jwt.sign(utilisateur, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1800s' });
}

function genererNouveauToken(user) {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '1y'});
}

module.exports = {
  creerUnUtilisateur,
  existe,
  modifierUnUtilisateur,
  recupererLesUtilisateurs,
  recupererUnUtilisateur,
  supprimerUnUtilisateur,
};
