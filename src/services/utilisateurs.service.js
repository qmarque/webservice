const { Utilisateur } = require("../modeles/utilisateursModele");

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

async function existe(login, pwd) {
  const result = await Utilisateur.findOne({
    pseudo: login,
    mdp: pwd,
  }).exec();
  if (result != null) {
    console.log("ok");
    return {
      message: "ok",
    };
  }
}

module.exports = {
  creerUnUtilisateur,
  existe,
  modifierUnUtilisateur,
  recupererLesUtilisateurs,
  recupererUnUtilisateur,
  supprimerUnUtilisateur,
};
