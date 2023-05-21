const express = require('express');
const cors = require('cors')
const morgan = require('morgan')

const { characterRouter } = require('./routes/character.routes');
const { authenticationRouter } = require('./routes/authentication.routes');

const PORT = process.env.PORT || 3001

const server = express()
server.set('appName', 'Rick and Morty - Nicolás Salvo')
server.set('port', PORT)

server.use(cors())
server.use(morgan('dev'))
server.use(express.json())

// Routes
server.use('/rickandmorty/character', characterRouter)
server.use('/login', authenticationRouter)

server.use((_, res, next) => {
  res.status(404).send('Route not found')

  next()
})


server.listen(server.get('port'), () => console.log(`Server listening on port ${server.get('port')}...`))

module.exports = {
  server
}