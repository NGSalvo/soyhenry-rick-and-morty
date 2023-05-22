const axios = require('axios')
const URL_API = 'https://rickandmortyapi.com/api/character'

const getCharacterById = async (req, res) => {
  try {
    const { id } = req.params
    const { data } = await axios(`${URL_API}/${id}`);
    const { name, gender, species, origin, image, status } = data

    const character = {
      id: +id,
      name,
      gender,
      species,
      origin,
      image,
      status
    }
    
    return res.status(200).send(character)
  } catch(error) {
    if (error.response.status === 404) return res.status(404).send('Not found')
    res.status(500).end(error.message)
  }
}


module.exports = {
  getCharacterById
}