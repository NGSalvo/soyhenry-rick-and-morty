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

  const renderError = ({email, password}) => {
    if (email?.require) {
      return <p className={style.danger}>{email.require}</p>
    }
    if (email?.valid) {
      return <p className={style.danger}>{email.valid}</p>
    }
    if (email?.maxChar) {
      return <p className={style.danger}>{email.maxCharacters}</p>
    }
    if (password?.require) {
      return <p className={style.danger}>{password.require}</p>
    }
    if (password?.valid) {
      return <p className={style.danger}>{password.valid}</p>
    }
    if (password?.length) {
      return <p className={style.danger}>{password.length}</p>
    }
  }

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.card}>
        <label htmlFor="email">Email:</label>
        <input type="text" id='email' name="email" value={userData.email} onChange={handleChange} className={errors.email && style.warning}/>
        {
          Object.keys(errors.email).length ? renderError(errors): ''
        }
        <label htmlFor="password">Password:</label>

        <input type="password" id='password' name="password" value={userData.password} onChange={handleChange} className={errors.password && style.warning}/>
        {
          Object.keys(errors.password).length ? renderError(errors) : ''
        }

        <button type='submit' className={style.btn}>Login</button>
      </form>
    </div>
  )
}

// TODO: FALTA ESTILOS LOGIN
