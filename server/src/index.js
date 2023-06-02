const { server } = require('./app')
const { connection } = require('./db')

connection.sync({force: true})

server.listen(server.get('port'), () => console.log(`Server listening on port ${server.get('port')}...`))
