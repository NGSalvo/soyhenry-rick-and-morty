const http = require('http')
const { getCharacterById } = require('./controllers/Character.controller')

const PORT = process.env.PORT || 3001

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  
  const characterIdRegex = /\/rickandmorty\/character\/\d+$/

  if (characterIdRegex.test(req.url) && req.method === 'GET') {
    const id = +req.url.split('/').at(-1)
    getCharacterById(res, id)
  } else {
    res.writeHead(404, {'Content-Type' : 'text/html'})
    return res.end('Route not found')
  }

})

server.listen(3001, () => console.log(`Server listening on port ${PORT}...`))

module.exports = {
  server
}

