const { Router } = require('express');
const { login } = require('../controllers/authentication.controller');

const router = Router()


router.post('/', (req, res) => {
  login(req, res)
})

module.exports = {
  authenticationRouter: router
}