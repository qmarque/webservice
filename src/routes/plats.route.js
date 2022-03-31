const express = require("express");
const router = express.Router();
const platsControleur = require("../controleurs/plats.controleur");

/**
 * @swagger
 * components:
 *   schemas:
 *       Plat:
 *          type: object
 *          required:
 *           - auteur
 *           - nom
 *           - ingredients
 *           - temperatureMinExt
 *           - temperatureMaxExt
 *           - type
 *           - saison
 *           - etapes
 *           - nbPersonnes
 *           - difficulte
 *           - tempsPreparation
 *           - tempsCuisson
 *           - tempsTotal
 *          properties:
*           id:
*              type: string
*              description: L'identifiant du plat est généré automatiquement.
*           auteur:
*              type: string
*              description: Le pseudo de l'utilisateur qui a créé le plat.
*           nom:
*              type: string
*              description: Le nom du plat.
*           ingredients:
*              type: array
*              description: La liste des ingrédients nécessaires à la réalisation du plat.
*           temperatureMinExt:
*              type: integer
*              description: La température minimale extérieure de consommation.
*           temperatureMaxExt:
*              type: string
*              description: La température maximale extérieure de consommation.
*           type:
*              type: array
*              description: Le type du plat.
*           saison:
*              type: string
*              description: La saison à laquelle le plat est approprié.
*           etapes:
*              type: array
*              description: Les étapes de réalisation du plat.
*           nbPersonnes:
*              type: string
*              description: Le nombre de personnes.
*           difficulte:
*              type: integer
*              description: La difficulté de réalisation du plat.
*           tempsPreparation:
*              type: integer
*              description: Le temps de préparation du plat (en min).
*           tempsCuisson:
*              type: integer
*              description: Le temps de cuisson du plat (en min).
*           tempsTotal:
*              type: integer
*              description: Le temps total de réalisation du plat (en min).
*/

/**
 * @swagger
 * tags:
 *  name: Plats
  */ 

/**
 * @swagger
 * /plats:
 *   get:
 *       summary: Retourne la liste de tous les plats
 *       tags: [Plats]
 *       responses:
 *          200:
 *            description: La liste des plats
 *            content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                           $ref: '#/components/schemas/Plat'
 */

router.get("/", platsControleur.recupererLesPlats);

/**
 * @swagger
 * /plats/{id}:
 *   get:
 *       summary: Retourne un plat par id
 *       tags: [Plats]
 *       parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: Le plat id
 *       responses:
 *          200:
 *            description: Le plat par id
 *            content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Plat'
 *          404:
 *            description: Le plat n'a pas été trouvé
 */

router.get("/:id", platsControleur.recupererUnPlat);

/**
 * @swagger
 * /plats:
 *   post:
 *       summary: Ajouter un plat
 *       tags: [Plats]
 *       requestBody:
 *          required: true
 *          content:
 *            application/json:
 *                schema:
 *                    $ref: '#/components/schemas/Plat'
 *          responses:
 *            200:
 *              description: Le plat a été créé
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Plat'
 *            400:
 *              description: Des erreurs de saisies ont été repérées
 */

router.post("/", platsControleur.creerUnPlat);

/**
 * @swagger
 * /plats/{id}:
 *   put:
 *       summary: Modifier un plat par id
 *       tags: [Plats]
 *       parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: Le plat id
 *       requestBody:
 *          required: true
 *          content:
 *            application/json:
 *                schema:
 *                    $ref: '#/components/schemas/Plat'
 *          responses:
 *            200:
 *              description: Le plat a été modifié
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Plat'
 *            404:
 *              description: Le plat n'a pas été trouvé
 *            400:
 *              description: Des erreurs de saisies ont été repérées
 */

router.put("/:id", platsControleur.modifierUnPlat);

/**
 * @swagger
 * /plats/{id}:
 *   delete:
 *       summary: Supprimer un plat par id
 *       tags: [Plats]
 *       parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: Le plat id
 *       responses:
 *         200:
 *           description: Le plat a été supprimé
 *         404:
 *           description: Le plat n'a pas été trouvé
 */

router.delete("/:id", platsControleur.supprimerUnPlat);

module.exports = router;
