const County = require('../models').County;
const City = require('../models').City;

module.exports = {
  list(req, res) {
    return County
    .findAll(
      {
        include: [{
          model: City,
          as: 'cities',
        }]
      }
    )
    .then((counties) => res.status(200).send(counties))
    .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return County
    .findById(req.params.id, {
      include: [{
        model: City,
        as: 'cities',
      }]
    })
    .then((county) => {
      if (!county) {
        return res.status(404).send({
          message: 'County Not Found',
        });
      }
      return res.status(200).send(county);
    })
    .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return County
    .create({
      name: req.body.name,
      userId: req.body.userId,
    })
    .then((county) => res.status(201).send(county))
    .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return County
    .findById(req.params.id)
    .then(county => {
      if (!county) {
        return res.status(404).send({
          message: 'County Not Found',
        });
      }
      return county
      .update({
        name: req.body.name || user.name,
        userId: req.body.userId || user.userId,
      })
      .then(() => res.status(200).send(county))
      .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return County
    .findById(req.params.id)
    .then(county => {
      if (!county) {
        return res.status(400).send({
          message: 'County Not Found',
        });
      }
      return County
      .destroy()
      .then(() => res.status(204).send())
      .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
  },
};
