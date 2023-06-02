const { Favororite, Favorite } = require('../db')
const { hasAllProperties } = require('../utils/utils')

const addFavorite = async (req, res) => {
  try {
    const { id } = req.body
    const requiredProperties = {
      id: true,
      name: true,
      gender: true,
      species: true,
      origin: true,
      image: true,
      status: true
    }

    if (!hasAllProperties(req.body), requiredProperties) return res.status(401).send('Faltan datos')

    const character = {
      id: +id,
      ...req.body
    }

    const favorites = await Favorite.findOrCreate({ where: { character } })
    
    return res.status(200).send(favorites)
  } catch(error) {
    res.status(500).send(error.message)
  }
}

const deleteFavorite = async (req, res) => {
  try {
    const { id } = req.params

    await Favorite.destroy({ where: id })

    // if (!deletedRows) throw new Error('Not found')

    const favorites = Favorite.findAll()
    
    return res.status(200).send(favorites)
  } catch(error) {
    // if (error.message === `Not found`) return res.status(404).send(favorites)
    res.status(500).send(error.message)
  }
}


module.exports = {
  addFavorite,
  deleteFavorite,
}