const { server } = require('../src/app');
const supertest = require('supertest');
const request = supertest(server);
let { favorites } = require('../src/controllers/favorites.controller');

describe('GET /rickandmorty/character/:id', () => {
  it('should return an 200', async () => {
    await request.get('/rickandmorty/character/1').expect(200)
  })
  it('should get an object with the following properties: "id", "name", "species", "gender", "status", "origin" and "image"', async () => {
    const properties = ["id", "name", "species", "gender", "status", "origin", "image"]
    const object = (await request.get('/rickandmorty/character/1')).body
    for (property of properties) {
      expect(object).toHaveProperty(property)
    }
  })
  it('should return an Error with status 404 when not found an id', async () => {
    await request.get('/rickandmorty/character/1000').expect(404)
  })
  it('should return an Error with status 500 when using an incorrect param', async () => {
    await request.get('/rickandmorty/character/asd').expect(500)
  })
})

describe('POST /rickandmorty/login', () => {
  it('should log in when the credentials are OK', async () => {
    const credential = {
      email: 'nicosalvo@gmail.com',
      password: ''
    }
    await request
      .post('/rickandmorty/login')
      .send(credential)
      .expect({ access: true })
  })

  it('should not login when the credentials are wrong', async () => {
    const credential = {}
    await request
      .post('/rickandmorty/login')
      .send(credential)
      .expect(401)
      .expect({ access: false })
  })
})

describe.only('POST /rickandmorty/fav', () => {
  it('should add a character to favorites', async () => {
    const character1 = { 
      id: 1,
      name: 'Nico',
      gender: 'Male',
      species: 'Human',
      origin: {name: 'Earth'},
      image: 'someImage',
      status: 'Alive'
    }
    const character2 = { 
      id: 2,
      name: 'The One',
      gender: 'Male',
      species: 'Human',
      origin: {name: 'Earth'},
      image: 'someImage',
      status: 'Alive'
    }
    
    let response = (await request
      .post('/rickandmorty/fav')
      .send(character1).expect(200)).body
      

    expect(response).toContainEqual(character1)
    
    response = (await request
      .post('/rickandmorty/fav')
      .send(character2)
      .expect(200)).body
    
    expect(response).toHaveLength(2)
  })
})

describe.only('DELETE /rickandmorty/fav/:id', () => {
  it('should remove a character from favorites', async () => {
    const response = (await request
      .delete('/rickandmorty/fav/1')
      .expect(200)).body
    
    expect(response).toHaveLength(1)
  })

  it('should return all the favorites when sending an non-existent ID', async () => {
    try {
      const response = await request
        .delete('/rickandmorty/fav/1345')
        .expect(404)
      
      expect(response.body).toHaveLength(1)
    } catch (error) {
      console.log(error)
    }
  })
})
