// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: true
})

const {sequelize} = require('./models/index')

// Import Routes
const userRoutes = require('./routes/user')
const mahalleRoutes = require('./routes/mahalle')
const carRoutes = require('./routes/car')

// Declare a route
fastify.get('/', (request, reply) => {
  reply.send({hello: 'world'})
})

// Run the server!
fastify.listen(3000, (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`server listening on ${address}`)
})

// Loop over each route
userRoutes.forEach((route, index) => {
  fastify.route(route)
})
mahalleRoutes.forEach((route, index) => {
  fastify.route(route)
})
carRoutes.forEach((route, index) => {
  fastify.route(route)
})

sequelize.sync().then(() => {
  console.log("Users db and user table have been created");
});
