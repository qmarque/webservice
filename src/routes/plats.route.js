const express = require('express');
const router = express.Router();
const platsControleur = require('../controleurs/plats.controleur');

router.get('/', platsControleur.get);

router.get('/:id', platsControleur.getOne);
  
router.post('/', platsControleur.create);

router.put('/:id', platsControleur.update);

router.delete('/:id', platsControleur.remove);

module.exports = router;