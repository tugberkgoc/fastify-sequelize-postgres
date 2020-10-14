// Import our Controllers
const userController = require('../controllers/user')

// Import Swagger documentation
// const documentation = require('./documentation/userApi')

const routes = [
  {
    method: 'GET',
    url: '/api/users',
    handler: userController.list
  },
  {
    method: 'GET',
    url: '/api/users/:id',
    handler: userController.getById
  },
  {
    method: 'POST',
    url: '/api/users',
    handler: userController.add,
  },
  {
    method: 'PUT',
    url: '/api/users/:id',
    handler: userController.update
  },
  {
    method: 'DELETE',
    url: '/api/users/:id',
    handler: userController.delete
  }
]

module.exports = routes
