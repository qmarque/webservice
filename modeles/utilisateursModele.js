const mongoose = require('mongoose') ;

const UtilisateurSchema = new mongoose.Schema(
    {
        "pseudo": {
            type: String,
            required: true
        },
        "nom": {
            type: String,
            required: true
        },
        "prenom": {
            type: String,
            required: true
        },
        "mail": {
            type: String,
            required: true
        },
        "mdp": {
            type: String,
            required: true
        }
    },
);


const Utilisateur = mongoose.model("utilisateurs", UtilisateurSchema);

module.exports = { Utilisateur } ;