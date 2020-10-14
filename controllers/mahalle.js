const Mahalle = require('../models').Mahalle;

module.exports = {
  list(req, res) {
    return Mahalle
    .findAll()
    .then((mahalles) => res.status(200).send(mahalles))
    .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Mahalle
    .findById(req.params.id)
    .then((mahalle) => {
      if (!mahalle) {
        return res.status(404).send({
          message: 'Mahalle Not Found',
        });
      }
      return res.status(200).send(mahalle);
    })
    .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Mahalle
    .create({
      name: req.body.name,
      userId: req.body.userId,
    })
    .then((mahalle) => res.status(201).send(mahalle))
    .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Mahalle
    .findById(req.params.id)
    .then(mahalle => {
      if (!mahalle) {
        return res.status(404).send({
          message: 'User Not Found',
        });
      }
      return mahalle
      .update({
        name: req.body.name || user.name,
        userId: req.body.userId || user.userId,
      })
      .then(() => res.status(200).send(mahalle))
      .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Mahalle
    .findById(req.params.id)
    .then(mahalle => {
      if (!mahalle) {
        return res.status(400).send({
          message: 'Mahalle Not Found',
        });
      }
      return Mahalle
      .destroy()
      .then(() => res.status(204).send())
      .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
  },
};
