const { User } = require('../db')
const { hasAllProperties } = require('../utils/utils')

const postUser = async (req, res) => {
  const { email, password } = req.body
  console.log(req.body)

  try {
    if (!hasAllProperties(req.body, {email: true, password: true})) return res.status(400).send('Faltan datos')

    const user = await User.findOrCreate({ where: { email, password } })

    return res.status(200).send(user)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  postUser
}