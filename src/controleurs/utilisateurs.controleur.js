const utilisateurs = require('../services/utilisateurs.service');

async function get(req, res) {
  try {
      res.status(200).json(await utilisateurs.get(req));
  } catch (err) {
      res.status(200).send("none");
  }
}

async function getOne(req, res) {
  try {
    res.status(200).json(await utilisateurs.getOne(req.params.id));
  } catch (err) {
    return res.status(404).send("ID unknow : " + req.params.id)
  }
}

async function create(req, res) {
  try {
    res.status(201).json(await utilisateurs.create(req.body));
  } catch (err) {
    return res.status(400).send("Input errors")
  }
}

async function update(req, res) {
  try {
    res.status(200).json(await utilisateurs.update(req.params.id, req.body));
  } catch (err) {
    return res.status(404).send("ID unknow : " + req.params.id)
  }
}

async function remove(req, res) {
  try {
    res.status(200).json(await utilisateurs.remove(req.params.id));
  } catch (err) {
    return res.status(404).send("ID unknow : " + req.params.id)
  }
}

module.exports = {
  get,
  getOne,
  create,
  update,
  remove
};

