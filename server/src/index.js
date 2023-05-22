const express = require('express');
const cors = require('cors')
const morgan = require('morgan')

// const { characterRouter } = require('./routes/character.routes');
// const { authenticationRouter } = require('./routes/authentication.routes');
// const { favoriteRouter } = require('./routes/favorite.routes');

const { routes } = require('./routes')

const PORT = process.env.PORT || 3001

const server = express()
server.set('appName', 'Rick and Morty - Nicolás Salvo')
server.set('port', PORT)
server.set('base', '/rickandmorty')

server.use(cors())
server.use(morgan('dev'))
server.use(express.json())
// server.use((req, res, next) => {
//   // req.url = '/rickandmorty'
//   console.log('Set base -> '+ req.url)
//   return next()
// })
// server.use('/rickandmorty', router)

// Routes
routes(server)



server.listen(server.get('port'), () => console.log(`Server listening on port ${server.get('port')}...`))

module.exports = {
  server
}