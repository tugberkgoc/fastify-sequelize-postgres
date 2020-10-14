const {photo} = require('../models');

module.exports = {
  list(req, res) {
    return photo
    .findAll()
    .then((photos) => res.status(200).send(photos))
    .catch((error) => {
      res.status(400).send(error);
    });
  },

  getById(req, res) {
    return photo
    .findById(req.params.id)
    .then((photo) => {
      if (!photo) {
        return res.status(404).send({
          message: 'Photo Not Found',
        });
      }
      return res.status(200).send(photo);
    })
    .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return photo
    .create({
      url: req.body.url,
      name: req.body.name,
    })
    .then((photo) => res.status(201).send(photo))
    .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return photo
    .findById(req.params.id)
    .then(photo => {
      if (!photo) {
        return res.status(404).send({
          message: 'Photo Not Found',
        });
      }
      return photo
      .update({
        url: req.body.url || photo.url,
        name: req.body.name || photo.countyId,
      })
      .then(() => res.status(200).send(photo))
      .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return photo
    .findById(req.params.id)
    .then(photo => {
      if (!photo) {
        return res.status(400).send({
          message: 'Photo Not Found',
        });
      }
      return photo
      .destroy()
      .then(() => res.status(204).send())
      .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
  },
};
