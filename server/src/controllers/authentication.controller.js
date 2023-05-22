const { users } = require('../utils/users')

const login = (req, res) => {
  try {
    const {email, password} = req.body

    const foundUser = users.find(user => user.email === email)

    if (foundUser && foundUser.password === password) return res.status(200).send({access: true})
    return res.status(401).send({access: false})

  } catch(error) {
    res.status(500).send(error.message)
  }
}


module.exports = {
  login
}