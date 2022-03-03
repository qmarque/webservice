const express = require('express');
const router = express.Router();
// const ObjectID = require('mongoose').Types.ObjectId;

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

module.exports = router;