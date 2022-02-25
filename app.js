const mongoose = require('mongoose');

const express = require('express')
const app = express()
const port = 8080

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

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})