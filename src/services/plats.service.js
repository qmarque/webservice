const { Plat } = require("../modeles/platsModele");

async function recupererLesPlats() {
  return Plat.find();
}

async function recupererUnPlat(id) {
  return Plat.findById(id);
}

async function creerUnPlat(plat) {
  const nouveauPlat = new Plat({
    auteur: plat.auteur,
    nom: plat.nom,
    ingredients: plat.ingredients,
    type: plat.type,
    saison: plat.saison,
    etapes: plat.etapes,
    nbPersonnes: plat.nbPersonnes,
    difficulte: plat.difficulte,
    tempsPreparation: plat.tempsPreparation,
    tempsCuisson: plat.tempsCuisson,
    tempsTotal: plat.tempsTotal,
  });

  return nouveauPlat.save();
}

async function modifierUnPlat(id, plat) {
  const modifierPlat = {
    auteur: plat.auteur,
    nom: plat.nom,
    ingredients: plat.ingredients,
    type: plat.type,
    saison: plat.saison,
    etapes: plat.etapes,
    nbPersonnes: plat.nbPersonnes,
    difficulte: plat.difficulte,
    tempsPreparation: plat.tempsPreparation,
    tempsCuisson: plat.tempsCuisson,
    tempsTotal: plat.tempsTotal,
  };

  return Plat.findByIdAndUpdate(id, { $set: modifierPlat }, { new: true });
}

async function supprimerUnPlat(id) {
  return Plat.findByIdAndRemove(id);
}

module.exports = {
  creerUnPlat,
  modifierUnPlat,
  recupererLesPlats,
  recupererUnPlat,
  supprimerUnPlat,
};
