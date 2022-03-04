const plats = require('../services/plats.service');

async function get(req, res) {
  try {
      res.status(200).json(await plats.get(req));
  } catch (err) {
      res.status(200).send("none");
  }
}

async function getOne(req, res) {
  try {
    res.status(200).json(await plats.getOne(req.params.id));
  } catch (err) {
    return res.status(404).send("ID unknow : " + req.params.id)
  }
}

async function create(req, res) {
  try {
    res.status(201).json(await plats.create(req.body));
  } catch (err) {
    return res.status(400).send("Input errors")
  }
}

async function update(req, res) {
  try {
    res.status(200).json(await plats.update(req.params.id, req.body));
  } catch (err) {
    return res.status(404).send("ID unknow : " + req.params.id)
  }
}

async function remove(req, res) {
  try {
    res.status(200).json(await plats.remove(req.params.id));
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

