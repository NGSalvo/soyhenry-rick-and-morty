const axios = require('axios')
const URL_API = 'https://rickandmortyapi.com/api/character'

const getCharacterById = async (res, id) => {
  try {
    const { data } = await axios(`${URL_API}/${id}`);
    const {name, gender, species, origin, image, status} = data

    const character = {
      id,
      name,
      gender,
      species,
      origin,
      image,
      status
    }
    
    res.writeHead(200, {'Content-Type' : 'application/json'})
    return res.end(JSON.stringify(character))
  } catch(error) {
    res.writeHead(500, {'Content-Type' : 'text/plain'})
    res.end(error.message) 
  }
}


module.exports = {
  getCharacterById
}