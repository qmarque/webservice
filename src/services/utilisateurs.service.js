require("dotenv").config();
const nodemailer = require("nodemailer");
const path = require("path");
const hbs = require("nodemailer-express-handlebars");

const { Utilisateur } = require("../modeles/utilisateursModele");
const jwt = require("jsonwebtoken");

async function recupererLesUtilisateurs(req) {
  if (req.query != null) {
    var parametre = {};
    for (p in req.query) {
      if (p.localeCompare("limite") == 0) {
        var limite = req.query[p];
      } else if (p.localeCompare("trierPar") == 0) {
        var tri = req.query[p];
      } else if (p.localeCompare("ordre") == 0) {
        var ordre = req.query[p];
      } else {
        parametre[p] = req.query[p];
      }
    }
    if (tri && ordre) {
      if (ordre == "asc") {
        return Utilisateur.find(parametre)
          .sort([[tri, 1]])
          .limit(limite);
      } else if (ordre == "desc") {
        return Utilisateur.find(parametre)
          .sort([[tri, -1]])
          .limit(limite);
      }
    } else {
      if (typeof parametre !== "undefined") {
        var reponse = Utilisateur.find(parametre).limit(req.query.limite);

        return reponse.select("pseudo nom prenom mail");
      } else {
        var reponse = Utilisateur.find().limit(req.query.limite);

        return reponse.select("pseudo nom prenom mail");
      }
    }
  } else {
    var reponse = Utilisateur.find().limit(req.query.limite);
    return reponse.select("pseudo nom prenom mail");
  }
}

async function recupererUnUtilisateur(id) {
  return Utilisateur.findById(id);
}

async function creerUnUtilisateur(utilisateur) {
  const nouvelUtilisateur = new Utilisateur({
    pseudo: utilisateur.pseudo,
    nom: utilisateur.nom,
    prenom: utilisateur.prenom,
    mail: utilisateur.mail,
    mdp: utilisateur.mdp,
  });

  var sauvegarde = nouvelUtilisateur.save();

  if (sauvegarde != null) {
    //Mail de confirmation
    async function main() {
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "biblicette@gmail.com",
          pass: "Biblicette33",
        },
      });

      const handlebarOptions = {
        viewEngine: {
          partialsDir: path.resolve("./src/templates"),
          defaultLayout: false,
        },
        viewPath: path.resolve("./src/templates/"),
      };

      transporter.use("compile", hbs(handlebarOptions));

      var mailOptions = {
        from: '"Biblicette" <biblicette@gmail.com>',
        to: utilisateur.mail,
        subject: "Bienvenue chez Biblicette",
        template: "email",
        context: {
          pseudo: utilisateur.pseudo,
        },
      };

      transporter.sendMail(mailOptions);
    }

    main().catch(console.error);
  }

  return sauvegarde;
}

async function modifierUnUtilisateur(id, utilisateur) {
  const modifierUtilisateur = {
    pseudo: utilisateur.pseudo,
    nom: utilisateur.nom,
    prenom: utilisateur.prenom,
    mail: utilisateur.mail,
    mdp: utilisateur.mdp,
  };

  return Utilisateur.findByIdAndUpdate(
    id,
    { $set: modifierUtilisateur },
    { new: true }
  );
}

async function supprimerUnUtilisateur(id) {
  return Utilisateur.findByIdAndRemove(id);
}

async function existe(utilisateur) {
  const result = await Utilisateur.findOne({
    pseudo: utilisateur.pseudo,
    mdp: utilisateur.mdp,
  }).exec();
  if (result != null) {
    const token = genererToken(utilisateur);
    return token;
  }
}

function genererToken(utilisateur) {
  return jwt.sign(utilisateur, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1800s",
  });
}

module.exports = {
  creerUnUtilisateur,
  existe,
  modifierUnUtilisateur,
  recupererLesUtilisateurs,
  recupererUnUtilisateur,
  supprimerUnUtilisateur,
};
