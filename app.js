const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const express = require('express');
const  utilisateurModel = require('./model/Utilisateur');
const app = express()
const PORT = 8080;

// MongoDB
mongoose.connect('mongodb+srv://hugobarsacq:hugobarsacq@cluster0.rhjep.mongodb.net/biblicette?retryWrites=true&w=majority',{
  useNewUrlParser : true,
  useUnifiedTopology: true
})
const db = mongoose.connection;
db.on("error",console.error.bind(console, "Erreur de connexion à Mongo : "));
db.once("open", function () {
  console.log("Connexion à Mongo OK");
})

app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log('Le serveur est lancé sur le port : ' + PORT )
})

//ROUTES

//ajout d'un utilisateur
app.post('/utilisateur/add', async(req, res)=>{
    
    const utilisateur = new utilisateurModel({
        "pseudo": req.body.pseudo,
        "nom": req.body.nom,
        "prenom": req.body.prenom,
        "mail": req.body.mail,
        "mdp": req.body.mdp
    });

    utilisateur.save();

    return res.status(200).json({
        message: utilisateur
    })
})
