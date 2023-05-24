const { server } = require('./app')



server.listen(server.get('port'), () => console.log(`Server listening on port ${server.get('port')}...`))
