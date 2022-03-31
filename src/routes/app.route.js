const express = require("express");
const router = express.Router();
const utilisateursControleur = require("../controleurs/utilisateurs.controleur");

/**
 * @swagger
 * components:
 *   schemas:
 *       Connexion:
 *          type: object
 *          required:
 *           - pseudo
 *           - mdp
 *          properties:
*           pseudo:
*              type: string
*              description: Le pseudo de l'utilisateur.
*           mdp:
*              type: string
*              description: Le mdp de l'utilisateur.
*/

/**
 * @swagger
 * tags:
 *  name: Connexion
  */ 

/**
 * @swagger
 * /connexion:
 *   post:
 *       summary: Se connecter
 *       tags: [Connexion]
 *       requestBody:
 *          required: true
 *          content:
 *            application/json:
 *                schema:
 *                    $ref: '#/components/schemas/Connexion'
 *          responses:
 *            200:
 *              description: Vous êtes connecté(e)
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Connexion'
 *            400:
 *              description: Des erreurs de saisies ont été repérées
 */

router.post("/connexion", utilisateursControleur.connexion);

/**
 * @swagger
 * components:
 *   schemas:
 *       Inscription:
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
*              description: Votre identifiant sera généré automatiquement.
*           pseudo:
*              type: string
*              description: Votre pseudo.
*           nom:
*              type: string
*              description: Votre nom.
*           prenom:
*              type: string
*              description: Votre prenom.
*           mail:
*              type: string
*              description: Votre mail.
*           mdp:
*              type: string
*              description: Votre mot de passe.
*/

/**
 * @swagger
 * /inscription:
 *   post:
 *       summary: S'inscrire
 *       tags: [Inscription]
 *       requestBody:
 *          required: true
 *          content:
 *            application/json:
 *                schema:
 *                    $ref: '#/components/schemas/Utilisateur'
 *          responses:
 *            200:
 *              description: L'utilisateur a été créé'
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Utilisateur'
 *            400:
 *              description: Des erreurs de saisies ont été repérées
 */

router.post("/inscription", utilisateursControleur.creerUnUtilisateur);

module.exports = router;
