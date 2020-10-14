const {county, city} = require('../models');

module.exports = {
  list(req, res) {
    return county
    .findAll(
      {
        include: [{
          model: city,
        }]
      }
    )
    .then((counties) => res.status(200).send(counties))
    .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return county
    .findById(req.params.id, {
      include: [{
        model: city,
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
    return county
    .create({
      name: req.body.name,
      cityId: req.body.cityId,
    })
    .then((county) => res.status(201).send(county))
    .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return county
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
        cityId: req.body.cityId || user.cityId,
      })
      .then(() => res.status(200).send(county))
      .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return county
    .findById(req.params.id)
    .then(county => {
      if (!county) {
        return res.status(400).send({
          message: 'County Not Found',
        });
      }
      return county
      .destroy()
      .then(() => res.status(204).send())
      .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
  },
};
