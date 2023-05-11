import { ADD_FAV, REMOVE_FAV } from "./action-types"

const initialState = {
  myFavorites: []
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload]
      }
    case REMOVE_FAV:
      const filteredFavorites = state.myFavorites.filter(char => char.id !== action.payload)
      return {
        ...state,
        myFavorites: filteredFavorites
      }
    default:
      return {...state}
  }
}