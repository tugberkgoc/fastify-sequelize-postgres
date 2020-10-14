// Import our Controllers
const cityController = require('../controllers/city')

const routes = [
  {
    method: 'GET',
    url: '/api/cities',
    handler: cityController.list
  },
  {
    method: 'GET',
    url: '/api/cities/:id',
    handler: cityController.getById
  },
  {
    method: 'POST',
    url: '/api/cities',
    handler: cityController.add,
  },
  {
    method: 'PUT',
    url: '/api/cities/:id',
    handler: cityController.update
  },
  {
    method: 'DELETE',
    url: '/api/cities/:id',
    handler: cityController.delete
  }
]

module.exports = routes
