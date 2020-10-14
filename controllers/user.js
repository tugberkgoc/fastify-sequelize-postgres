const Car = require('../models').Car;
const User = require('../models').User;
const Mahalle = require('../models').Mahalle;

module.exports = {
  list(req, res) {
    return User
    .findAll({
      include: [{
        model: Mahalle,
        as: 'mahalles',
      },
        {
          model: Car,
          as: 'cars'
        }],
    })
    .then((users) => res.status(200).send(users))
    .catch((error) => {
      res.status(400).send(error);
    });
  },

  getById(req, res) {
    return User
    .findById(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: 'User Not Found',
        });
      }
      return res.status(200).send(user);
    })
    .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return User
    .create({
      name: req.body.name
    })
    .then((user) => res.status(201).send(user))
    .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return User
    .findById(req.params.id)
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: 'User Not Found',
        });
      }
      return user
      .update({
        username: req.body.name || user.name
      })
      .then(() => res.status(200).send(user))
      .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return User
    .findById(req.params.id)
    .then(user => {
      if (!user) {
        return res.status(400).send({
          message: 'User Not Found',
        });
      }
      return user
      .destroy()
      .then(() => res.status(204).send())
      .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
  },
};
