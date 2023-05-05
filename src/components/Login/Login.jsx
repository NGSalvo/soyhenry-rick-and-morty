import { useState } from 'react'

import { validate } from '../../utils/validation'

import style from './Login.module.css'

const initialState = {
  email: '',
  password: ''
}

export const Login = ({login}) => {
  const [userData, setUserData] = useState(initialState)
  const [errors, setErrors] = useState(initialState)

  const handleChange = (e) => {
    const newState = {[e.target.name]: e.target.value};
    setUserData(prev => ({...prev,  ...newState}))

    setErrors(
      validate({...userData, [e.target.name]: e.target.value})
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    login(userData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input type="text" id='email' name="email" value={userData.email} onChange={handleChange} className={errors.email && style.warning}/>
      {errors.email.split('\n').map((error, index) => <p key={index} className={style.danger}>{error}</p>)}
      
      <label htmlFor="password">Password:</label>
      <input type="password" id='password' name="password" value={userData.password} onChange={handleChange} className={errors.password && style.warning}/>
      <p className={style.danger}>{errors.password}</p>

      <button type='submit'>Login</button>
    </form>
  )
}
