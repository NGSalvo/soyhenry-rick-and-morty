const { Router } = require('express');
const { getCharacterById } = require('../controllers/character.controller');

const router = Router()

router.get('/:id', (req, res) => {
  getCharacterById(req, res)
})

module.exports = {
  characterRouter: router
}