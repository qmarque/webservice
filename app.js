const express = require('express');
const app = express();
require('./modeles/dbConfig');
const utilisateursRoutes = require('./routes/utilisateursControleur');
const platsRoutes = require('./routes/platsControleur');

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/utilisateurs', utilisateursRoutes);
app.use('/plats', platsRoutes);

app.listen(8080, () => console.log('Server started: 8080'));