import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";

export const addFav = (character) => {
  return function(dispatch) {
    return dispatch({type: ADD_FAV,
    payload: character})
  }
}

export const removeFav = (id) => {
  return function(dispatch) {
    return dispatch({type: REMOVE_FAV,
    payload: id})
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