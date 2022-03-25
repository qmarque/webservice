const fetch = require("node-fetch");
const { Plat } = require("../modeles/platsModele");

async function recupererLesPlats(req) {
  if (req.query != null) {
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

      for (p in req.query) {
        if (p.localeCompare("lat") != 0 && p.localeCompare("lon") != 0) {
          console.log(p);
          parametre[p] = req.query[p];
        }
      }

      return Plat.find(parametre).limit(req.query.limite);
    } else {
      return Plat.find(req.query).limit(req.query.limite);
    }
  } else {
    return Plat.find().limit(req.query.limite);
  }
}

async function recupererUnPlat(id) {
  return Plat.findById(id);
}

async function creerUnPlat(plat) {
  console.log(plat);
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

  console.log(nouveauPlat);

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
