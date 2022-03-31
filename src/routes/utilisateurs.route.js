const express = require("express");
const { route } = require("express/lib/application");
const router = express.Router();
const utilisateursControleur = require("../controleurs/utilisateurs.controleur");
const { Utilisateur } = require("../modeles/utilisateursModele")

/**
 * @swagger
 * components:
 *   schemas:
 *       Utilisateur:
 *          type: object
 *          required:
 *           - pseudo
 *           - nom
 *           - prenom
 *           - mail
 *           - mdp
 *          properties:
*           id:
*              type: string
*              description: L'identifiant de l'utilisateur est généré automatiquement.
*           pseudo:
*              type: string
*              description: Le pseudo de l'utilisateur.
*           nom:
*              type: string
*              description: Le nom de l'utilisateur.
*           prenom:
*              type: string
*              description: Le prenom de l'utilisateur.
*           mail:
*              type: string
*              description: Le mail de l'utilisateur.
*           mdp:
*              type: string
*              description: Le mot de passe de l'utilisateur.
*/

/**
 * @swagger
 * tags:
 *  name: Utilisateurs
  */ 

/**
 * @swagger
 * /utilisateurs:
 *   get:
 *       summary: Retourne la liste de tous les utilisateurs
 *       tags: [Utilisateurs]
 *       responses:
 *          200:
 *            description: La liste des utilisateurs
 *            content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                           $ref: '#/components/schemas/Utilisateur'
 */

router.get("/", utilisateursControleur.recupererLesUtilisateurs);

/**
 * @swagger
 * /utilisateurs/{id}:
 *   get:
 *       summary: Retourne un utilisateur par id
 *       tags: [Utilisateurs]
 *       parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: L'utilisateur id
 *       responses:
 *          200:
 *            description: L'utilisateur par id
 *            content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Utilisateur'
 *          400:
 *            description: L'utilisateur n'a pas été trouvé
 */

router.get("/:id", utilisateursControleur.recupererUnUtilisateur);

/**
 * @swagger
 * /utilisateurs/{id}:
 *   put:
 *       summary: Modifier un utilisateur par id
 *       tags: [Utilisateurs]
 *       parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: L'utilisateur id
 *       requestBody:
 *          required: true
 *          content:
 *            application/json:
 *                schema:
 *                    $ref: '#/components/schemas/Utilisateur'
 *          responses:
 *            200:
 *              description: L'utilisateur a été modifié
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Utilisateur'
 *            404:
 *              description: L'utilisateur n'a pas été trouvé
 *            500:
 *              description: Des erreurs sont survenues
 */

router.put("/:id", utilisateursControleur.modifierUnUtilisateur);  

/**
 * @swagger
 * /utilisateurs/{id}:
 *   delete:
 *       summary: Supprimer un utilisateur par id
 *       tags: [Utilisateurs]
 *       parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: L'utilisateur id
 *       responses:
 *         200:
 *           description: L'utilisateur a été supprimé
 *         404:
 *           description: L'utilisateur n'a pas été trouvé
 */

router.delete("/:id", utilisateursControleur.supprimerUnUtilisateur);

module.exports = router;
