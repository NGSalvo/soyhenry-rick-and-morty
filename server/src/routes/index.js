const character = require('./character.routes')
const authentication = require('./authentication.routes')
const favorite = require('./favorite.routes')

const baseURL = '/rickandmorty'

const routes = (app) => {
  app.use(baseURL + '/character', character)
  app.use(baseURL + '/login', authentication)
  app.use(baseURL + '/fav', favorite)
}


module.exports = {
  routes
}
