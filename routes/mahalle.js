// Import our Controllers
const mahalleController = require('../controllers/mahalle')

const routes = [
  {
    method: 'GET',
    url: '/api/mahalles',
    handler: mahalleController.list
  },
  {
    method: 'GET',
    url: '/api/mahalles/:id',
    handler: mahalleController.getById
  },
  {
    method: 'POST',
    url: '/api/mahalles',
    handler: mahalleController.add,
  },
  {
    method: 'PUT',
    url: '/api/mahalles/:id',
    handler: mahalleController.update
  },
  {
    method: 'DELETE',
    url: '/api/mahalles/:id',
    handler: mahalleController.delete
  }
]

module.exports = routes
