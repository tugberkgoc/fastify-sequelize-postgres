const{car, user, county, city, photo} = require('../models')

module.exports = {
  list(req, res) {
    return user
    .findAll({
      include: [
        {
          model: county,
          include: [{
            model: city,
          }]
        },
        {
          model: car,
        },
        {
          model: photo,
        }
      ],
    })
    .then((users) => res.status(200).send(users))
    .catch((error) => {
      res.status(400).send(error);
    });
  },

  getById(req, res) {
    return user
    .findById(req.params.id,
      {
        include: [
          {
            model: county,
            include: [{
              model: city,
            }]
          },
          {
            model: car,
          },
          {
            model: photo,
          }
        ],
      }
    )
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
    return user
    .create({
      name: req.body.name,
      countyId: req.body.countyId || user.countyId
    })
    .then((user) => res.status(201).send(user))
    .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return user
    .findById(req.params.id)
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: 'User Not Found',
        });
      }
      return user
      .update({
        name: req.body.name || user.name,
        countyId: req.body.countyId || user.countyId
      })
      .then(() => res.status(200).send(user))
      .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return user
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
