const { Plat } = require('../modeles/platsModele');

async function get() {
    return Plat.find();
}

async function getOne(id) {
    return Plat.findById(id);
}

async function create(plat) {
    const nouveauPlat = new Plat({
        "auteur": plat.auteur,
        "nom": plat.nom,
        "ingredients": plat.ingredients,
        "type": plat.type,
        "saison": plat.saison,
        "etapes": plat.etapes,
        "nbPersonnes": plat.nbPersonnes,
        "difficulte": plat.difficulte,
        "tempsPreparation": plat.tempsPreparation,
        "tempsCuisson": plat.tempsCuisson,
        "tempsTotal": plat.tempsTotal
    });

    return nouveauPlat.save();
}

async function update(id, plat) {
    const modifierPlat = {
        "auteur": plat.auteur,
        "nom": plat.nom,
        "ingredients": plat.ingredients,
        "type": plat.type,
        "saison": plat.saison,
        "etapes": plat.etapes,
        "nbPersonnes": plat.nbPersonnes,
        "difficulte": plat.difficulte,
        "tempsPreparation": plat.tempsPreparation,
        "tempsCuisson": plat.tempsCuisson,
        "tempsTotal": plat.tempsTotal
        };
    
    return Plat.findByIdAndUpdate(
    id,
    { $set: modifierPlat},
    { new: true });
}

async function remove(id) {
    return Plat.findByIdAndRemove(id);
}

module.exports = {
    get,
    getOne,
    create,
    update,
    remove
}