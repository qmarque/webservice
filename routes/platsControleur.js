const express = require('express');
const router = express.Router();
// const ObjectID = require('mongoose').Types.ObjectId;

const { Plat } = require('../modeles/platsModele');


router.get('/', (req, res) => {
  Plat.find((err, docs) => {
      if (!err) res.send(docs);
      else console.log("Error to get data : " + err);
    })
  });

router.post('/', (req, res) => {
    const nouveauPlat = new Plat({
        "auteur": req.body.auteur,
        "ingredients": req.body.ingredients,
        "type": req.body.type,
        "saison": req.body.saison,
        "etapes": req.body.etapes,
        "nbPersonnes": req.body.nbPersonnes,
        "difficulte": req.body.difficulte,
        "tempsPreparation": req.body.tempsPreparation,
        "tempsCuisson": req.body.tempsCuisson,
        "tempsTotal": req.body.tempsTotal
    });

    nouveauPlat.save((err, docs) => {
      if (!err) res.send(docs);
      else console.log('Error creating new data : ' + err);
    })
  });

module.exports = router;