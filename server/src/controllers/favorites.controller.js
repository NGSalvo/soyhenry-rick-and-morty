let favorites = []

const addFavorite = (req, res) => {
  try {
    const { id, name, gender, species, origin, image, status } = req.body

    const character = {
      id: +id,
      name,
      gender,
      species,
      origin,
      image,
      status
    }

    favorites.push(character)
    
    return res.status(200).send(favorites)
  } catch(error) {
    if (error.response.status === 404) return res.status(404).send('Not found')
    res.status(500).end(error.message)
  }
}

const deleteFavorite = (req, res) => {
  try {
    const { id } = req.params

    const foundIndexFavorite = favorites.findIndex(character => character.id === Number(id))

    console.log(id, foundIndexFavorite)

    if (foundIndexFavorite === -1) return res.status(404).send(`Character with id ${id} not found`)
    
    favorites = [...favorites.slice(0,foundIndexFavorite), ...favorites.slice(foundIndexFavorite+1)]
    
    return res.status(200).send(favorites)
  } catch(error) {
    if (error.response.status === 404) return res.status(404).send('Not found')
    res.status(500).end(error.message)
  }
}


module.exports = {
  addFavorite,
  deleteFavorite
}