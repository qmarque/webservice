const express = require('express');
const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;

const { Plat } = require('../modeles/platsModele');


router.get('/', (req, res) => {
  Plat.find((err, docs) => {
    if (!err) res.status(200).send(docs);
    else console.log("Error to get data : " + err);
  })
});

router.get("/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id))
  return res.status(404).send("ID unknow : " + req.params.id)
  
  Plat.findById(req.params.id, function(err, docs) {
    if (!err) res.status(200).send(docs);
    else console.log("Error to get data : " + err);
  })
});

router.post('/', (req, res) => {
    const nouveauPlat = new Plat({
        "auteur": req.body.auteur,
        "nom": req.body.nom,
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
        if (!err) res.status(201).send(docs);
        else console.log('Error creating new data : ' + err);
    })
});

  router.put("/:id", (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(404).send("ID unknow : " + req.params.id)
    
    const modifierPlat = {
        "auteur": req.body.auteur,
        "nom": req.body.nom,
        "ingredients": req.body.ingredients,
        "type": req.body.type,
        "saison": req.body.saison,
        "etapes": req.body.etapes,
        "nbPersonnes": req.body.nbPersonnes,
        "difficulte": req.body.difficulte,
        "tempsPreparation": req.body.tempsPreparation,
        "tempsCuisson": req.body.tempsCuisson,
        "tempsTotal": req.body.tempsTotal
    };
  
    Plat.findByIdAndUpdate(
      req.params.id,
      { $set: modifierPlat},
      { new: true },
      (err, docs) => {
        if (!err) res.status(200).send(docs);
        else console.log("Update error : " + err);
      }
    )
});
  
  router.delete("/:id", (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(404).send("ID unknow : " + req.params.id)
    
      Plat.findByIdAndRemove(
      req.params.id,
      (err, docs) => {
        if (!err) res.status(200).send(docs);
        else console.log("Delete error : " + err);
      })
});

module.exports = router;