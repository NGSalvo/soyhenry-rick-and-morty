const http = require('http')
const CHARACTERS = require('./utils/data')

const PORT = process.env.PORT || 3001

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  
  const characterIdRegex = /\/rickandmorty\/character\/\d+$/

  if (characterIdRegex.test(req.url) && req.method === 'GET') {
    const id = +req.url.split('/').at(-1)
    const foundCharacter = CHARACTERS.find(character => character.id === id)
    if (foundCharacter) return res.end(JSON.stringify(foundCharacter))
    return res.end(`Character with id ${id} not found`)
  } else {
    console.log('NO ENCONTRADO')
    res.writeHead(404, {'Content-Type' : 'text/html'})
    res.end('Route not found')
  }

  return res.end()

})

server.listen(3001, () => console.log(`Server listening on port ${PORT}...`))

exports = {
  server
}

