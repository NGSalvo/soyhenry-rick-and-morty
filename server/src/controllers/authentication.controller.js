const { User } = require('../db')
const { hasAllProperties } = require('../utils/utils')

const login = async (req, res) => {
  try {
    const {email, password} = req.body

    if (!hasAllProperties(req.body, { email: true, password: true })) return res.status(400).send('Faltan datos')

    const foundUser = await User.findOne({where: { email, password } })

    if (!foundUser) return res.status(401).send('Usuario no autorizado')

    return res.status(200).send({access: true})

  } catch(error) {
    res.status(500).send(error.message)
  }
}


module.exports = {
  login
}