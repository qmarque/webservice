const fetch = require("node-fetch");
const { Plat } = require("../modeles/platsModele");

async function recupererLesPlats(req) {
  if (req.query.lat && req.query.lon) {
    //Appel API
    const reponse = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
        req.query.lat +
        "&lon=" +
        req.query.lon +
        "&appid=9543685ef70ae794d21e49ef00692c0b"
    );
    const data = await reponse.json();

    const temp = parseFloat(data.main.temp) - 273.15;

    //Requête
    var parametre = {
      temperatureMinExt: { $lt: temp },
      temperatureMaxExt: { $gt: temp },
    };
  }
  var parametre;
  for (p in req.query) {
    if (p.localeCompare("limite") == 0) {
      var limite = req.query[p];
    } else if (p.localeCompare("trierPar") == 0) {
      var tri = req.query[p];
    } else if (p.localeCompare("ordre") == 0) {
      var ordre = req.query[p];
    }
  }
  if (tri && ordre) {
    if (ordre == "asc") {
      return Plat.find(parametre)
        .sort([[tri, 1]])
        .limit(limite);
    } else if (ordre == "desc") {
      return Plat.find(parametre)
        .sort([[tri, -1]])
        .limit(limite);
    }
  } else {
    if (typeof parametre !== "undefined") {
      return Plat.find().limit(limite);
    }

    return Plat.find(parametre).limit(req.query.limite);
  }
}

async function recupererUnPlat(id) {
  return Plat.findById(id);
}

async function creerUnPlat(plat) {
  const nouveauPlat = new Plat({
    auteur: plat.auteur,
    nom: plat.nom,
    ingredients: plat.ingredients,
    temperatureMinExt: plat.temperatureMinExt,
    temperatureMaxExt: plat.temperatureMaxExt,
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
