const { Utilisateur } = require("../modeles/utilisateursModele");

async function get() {
  return Utilisateur.find();
}

async function getOne(id) {
  return Utilisateur.findById(id);
}

async function create(utilisateur) {
  const nouvelUtilisateur = new Utilisateur({
    pseudo: utilisateur.pseudo,
    nom: utilisateur.nom,
    prenom: utilisateur.prenom,
    mail: utilisateur.mail,
    mdp: utilisateur.mdp,
  });

  return nouvelUtilisateur.save();
}

async function update(id, utilisateur) {
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

async function remove(id) {
  return Utilisateur.findByIdAndRemove(id);
}

async function exist(login, pwd) {
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
  get,
  getOne,
  create,
  update,
  remove,
  exist,
};
