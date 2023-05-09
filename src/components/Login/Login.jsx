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

  const renderError = (errors) => {
    if (errors?.require) {
      return <p className={style.danger}>{errors.require}</p>
    }
    if (errors?.valid) {
      return <p className={style.danger}>{errors.valid}</p>
    }
    if (errors?.maxCharacters) {
      return <p className={style.danger}>{errors.maxCharacters}</p>
    }
    if (errors?.requireP) {
      return <p className={style.danger}>{errors.requireP}</p>
    }
    if (errors?.validP) {
      return <p className={style.danger}>{errors.validP}</p>
    }
    if (errors?.lengthP) {
      return <p className={style.danger}>{errors.lengthP}</p>
    }
  }

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.card}>
        <label htmlFor="email">Email:</label>
        <input type="text" id='email' name="email" value={userData.email} onChange={handleChange} className={errors.email && style.warning}/>
        {
          Object.keys(errors.email).length ? renderError(errors.email) : ''
        }
        <label htmlFor="password">Password:</label>

        <input type="password" id='password' name="password" value={userData.password} onChange={handleChange} className={errors.password && style.warning}/>
        {
          Object.keys(errors.password).length ? renderError(errors.password) : ''
        }

        <button type='submit' className={style.btn}>Login</button>
      </form>
    </div>
  )
}

// TODO: FALTA ESTILOS LOGIN
