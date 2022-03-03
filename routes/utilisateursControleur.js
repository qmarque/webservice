const express = require('express');
const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;

const { Utilisateur } = require('../modeles/utilisateursModele');


router.get('/', (req, res) => {
  Utilisateur.find((err, docs) => {
      if (!err) res.send(docs);
      else console.log("Error to get data : " + err);
    })
  });

router.post('/', (req, res) => {
  const nouvelUtilisateur = new Utilisateur({
    "pseudo": req.body.pseudo,
    "nom": req.body.nom,
    "prenom": req.body.prenom,
    "mail": req.body.mail,
    "mdp": req.body.mdp
  });

  nouvelUtilisateur.save((err, docs) => {
    if (!err) res.send(docs);
    else console.log('Error creating new data : ' + err);
  })
});

router.put("/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknow : " + req.params.id)
  
  const modifierUtilisateur = {
    "pseudo": req.body.pseudo,
    "nom": req.body.nom,
    "prenom": req.body.prenom,
    "mail": req.body.mail,
    "mdp": req.body.mdp
  };

  Utilisateur.findByIdAndUpdate(
    req.params.id,
    { $set: modifierUtilisateur},
    { new: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log("Update error : " + err);
    }
  )
});

router.delete("/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknow : " + req.params.id)
  
    Utilisateur.findByIdAndRemove(
    req.params.id,
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log("Delete error : " + err);
    })
});

module.exports = router;