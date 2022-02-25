const mongoose = require('mongoose') ;

const PlatSchema = new mongoose.Schema({
    "auteur": {
        type: String,
        required: true
    },
    "ingredients": {
        type: [String],
        required: true
    },
    "type": {
        type: [String],
        required: true
    },
    "saison":{
        type: String,
        required: true
    },
    "etapes":{
        type: [String],
        required: true
    },
    "personnes": {
        type: Number,
        required: true
    },
    "difficulte": {
        type: Number,
        required: true
    },
    "tempsPreparation": {
        type: Number,
        required: true
    },
    "tempsCuisson": {
        type: Number,
        required: true
    },
    "tempsTotal": {
        type: Number,
        required: true
    }
});

const Plat = mongoose.model("plats", PlatSchema);

module.exports = Plat ;