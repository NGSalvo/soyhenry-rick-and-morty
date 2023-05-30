const { Router } = require('express');
const { getCharacterById } = require('../controllers');

const router = Router()

router.get('/:id', (req, res) => {
  getCharacterById(req, res)
})

module.exports = router