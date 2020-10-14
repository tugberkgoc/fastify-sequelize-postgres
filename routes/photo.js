// Import our Controllers
const photoController = require('../controllers/photo')

const routes = [
  {
    method: 'GET',
    url: '/api/photos',
    handler: photoController.list
  },
  {
    method: 'GET',
    url: '/api/photos/:id',
    handler: photoController.getById
  },
  {
    method: 'POST',
    url: '/api/photos',
    handler: photoController.add,
  },
  {
    method: 'PUT',
    url: '/api/photos/:id',
    handler: photoController.update
  },
  {
    method: 'DELETE',
    url: '/api/photos/:id',
    handler: photoController.delete
  }
]

module.exports = routes
