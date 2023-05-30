const { login } = require('./authentication.controller')
const { getCharacterById } = require('./character.controller')
const { addFavorite, deleteFavorite } = require('./favorites.controller')

module.exports = {
  login,
  getCharacterById,
  addFavorite,
  deleteFavorite
}

