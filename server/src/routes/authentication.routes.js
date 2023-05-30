const { Router } = require('express');
const { login } = require('../controllers');

const router = Router()


router.post('/', (req, res) => {
  login(req, res)
})

module.exports = router