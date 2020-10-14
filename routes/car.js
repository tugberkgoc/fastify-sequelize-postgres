// Import our Controllers
const carController = require('../controllers/car')

const routes = [
  {
    method: 'GET',
    url: '/api/cars',
    handler: carController.list
  },
  {
    method: 'GET',
    url: '/api/cars/:id',
    handler: carController.getById
  },
  {
    method: 'POST',
    url: '/api/cars',
    handler: carController.add,
  },
  {
    method: 'PUT',
    url: '/api/cars/:id',
    handler: carController.update
  },
  {
    method: 'DELETE',
    url: '/api/cars/:id',
    handler: carController.delete
  }
]

module.exports = routes
