const City = require('../models').City;

module.exports = {
  list(req, res) {
    return City
    .findAll()
    .then((cities) => res.status(200).send(cities))
    .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return City
    .findById(req.params.id)
    .then((city) => {
      if (!city) {
        return res.status(404).send({
          message: 'City Not Found',
        });
      }
      return res.status(200).send(city);
    })
    .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return City
    .create({
      name: req.body.name,
      countyId: req.body.countyId,
    })
    .then((city) => res.status(201).send(city))
    .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return City
    .findById(req.params.id)
    .then(city => {
      if (!city) {
        return res.status(404).send({
          message: 'City Not Found',
        });
      }
      return city
      .update({
        name: req.body.name || user.name,
        countyId: req.body.countyId || user.countyId,
      })
      .then(() => res.status(200).send(city))
      .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return City
    .findById(req.params.id)
    .then(city => {
      if (!city) {
        return res.status(400).send({
          message: 'City Not Found',
        });
      }
      return City
      .destroy()
      .then(() => res.status(204).send())
      .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
  },
};
