// Import our Controllers
const countyController = require('../controllers/county')

// Import Swagger documentation
// const documentation = require('./documentation/userApi')

const routes = [
  {
    method: 'GET',
    url: '/api/counties',
    handler: countyController.list
  },
  {
    method: 'GET',
    url: '/api/counties/:id',
    handler: countyController.getById
  },
  {
    method: 'POST',
    url: '/api/counties',
    handler: countyController.add,
  },
  {
    method: 'PUT',
    url: '/api/counties/:id',
    handler: countyController.update
  },
  {
    method: 'DELETE',
    url: '/api/counties/:id',
    handler: countyController.delete
  }
]

module.exports = routes
