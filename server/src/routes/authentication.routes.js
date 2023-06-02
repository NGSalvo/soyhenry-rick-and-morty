const { Router } = require('express');
const { login } = require('../controllers');
const { postUser } = require('../controllers/user.controller');

const router = Router()


router.get('/', (req, res) => {
  login(req, res)
})

router.post('/', (req, res) => {
  postUser(req, res)
})

module.exports = router