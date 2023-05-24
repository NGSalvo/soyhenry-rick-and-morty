const { server } = require('../src/app');
const request = require('supertest');
const agent = request(server);

describe('GET /rickandmorty/character/:id', () => {
  it('should return an 200', async () => {
    await agent.get('/rickandmorty/character/1').expect(200)
  })
  it('should get an object with the following properties: "id", "name", "species", "gender", "status", "origin" and "image"', async () => {
    const properties = ["id", "name", "species", "gender", "status", "origin", "image"]
    const object = (await agent.get('/rickandmorty/character/1')).body
    for (property of properties) {
      expect(object).toHaveProperty(property)
    }
  })
  it('should return an Error with status 404 when not found an id', async () => {
    await agent.get('/rickandmorty/character/1000').expect(404)
  })
  it('should return an Error with status 500 when using an incorrect param', async () => {
    await agent.get('/rickandmorty/character/asd').expect(500)
  })
})

describe('POST /rickandmorty/login', () => {
  it('should log in when the credentials are OK', async () => {
    const credential = {
      email: 'nicosalvo@gmail.com',
      password: ''
    }
    await agent
      .post('/rickandmorty/login')
      .send(credential)
      .expect({ access: true })
  })

  it('should not login when the credentials are wrong', async () => {
    const credential = {}
    await agent
      .post('/rickandmorty/login')
      .send(credential)
      .expect(401)
      .expect({ access: false })
  })
})

