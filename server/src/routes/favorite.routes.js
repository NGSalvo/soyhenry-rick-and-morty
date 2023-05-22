const { Router } = require('express');
const { addFavorite, deleteFavorite } = require('../controllers/favorites.controller');

const router = Router()


router.post('/', (req, res) => {
  addFavorite(req, res)
})

router.delete('/:id', (req, res) => {
  deleteFavorite(req, res)
})

module.exports = router