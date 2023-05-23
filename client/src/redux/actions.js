import axios from 'axios'
import { rickAndMortyURL } from '../utils/const'

import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";

const URL = `${rickAndMortyURL}/fav`

export const addFav = (character) => {
  return async function(dispatch) {
    try {
      const { data } = await axios.post(URL, character)
  
      return dispatch({type: ADD_FAV,
      payload: data})
    } catch (error) {
      console.log('Could not add to favorite')
    }
  }
}

export const removeFav = (id) => {
  return async function(dispatch) {
    try {
      const { data } = await axios.delete(`${URL}/${id}`)
      return dispatch({type: REMOVE_FAV,
      payload: data})
    } catch (error) {
      console.log('Could not remove from fav')
    }
  }
}

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender
  }
}

export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order
  }
}