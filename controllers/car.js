const {car} = require('../models');

module.exports = {
  list(req, res) {
    return car
    .findAll()
    .then((cars) => res.status(200).send(cars))
    .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return car
    .findById(req.params.id)
    .then((car) => {
      if (!car) {
        return res.status(404).send({
          message: 'Car Not Found',
        });
      }
      return res.status(200).send(car);
    })
    .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return car
    .create({
      model: req.body.model
    })
    .then((car) => res.status(201).send(car))
    .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return car
    .findById(req.params.id)
    .then(car => {
      if (!car) {
        return res.status(404).send({
          message: 'Car Not Found',
        });
      }
      return car
      .update({
        model: req.body.model || user.model
      })
      .then(() => res.status(200).send(car))
      .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return car
    .findById(req.params.id)
    .then(car => {
      if (!car) {
        return res.status(400).send({
          message: 'Car Not Found',
        });
      }
      return car
      .destroy()
      .then(() => res.status(204).send())
      .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
  },
};
