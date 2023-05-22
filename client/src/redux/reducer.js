import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-types"

const initialState = {
  myFavorites: [],
  allCharacters: []
}

export const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: payload,
        allCharacters: payload
      }
    
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: payload,
        allCharacters: payload
      }
    case FILTER:
      let filteredCharacters = state.allCharacters.filter(character => character.gender === payload)
      if (payload === 'Everyone') {
        filteredCharacters = [...state.allCharacters]
      }
      return {
        ...state,
        myFavorites: filteredCharacters
      }

    case ORDER:
      const copyOfFavoriteCharacters = [...state.allCharacters]
      return {
        ...state,
        myFavorites: payload === 'A' ? copyOfFavoriteCharacters.sort((a,b) => a.id - b.id) : copyOfFavoriteCharacters.sort((a,b) => b.id - a.id)
      }

    default:
      return {...state}
  }
}