const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://hugobarsacq:hugobarsacq@cluster0.rhjep.mongodb.net/biblicette?retryWrites=true&w=majority',{
  useNewUrlParser : true,
  useUnifiedTopology: true
})
const db = mongoose.connection;
db.on("error",console.error.bind(console, "Erreur de connexion à Mongo : "));
db.once("open", function () {
  console.log("Connexion à Mongo OK");
})
