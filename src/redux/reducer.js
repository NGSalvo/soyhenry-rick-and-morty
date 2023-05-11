import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-types"

const initialState = {
  myFavorites: [],
  allCharacters: []
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.allCharacters, action.payload],
        allCharacters: [...state.allCharacters, action.payload]
      }
    
    case REMOVE_FAV:
      const filteredFavorites = state.myFavorites.filter(char => char.id !== action.payload)
      return {
        ...state,
        myFavorites: filteredFavorites
      }
    case FILTER:
      let filteredCharacters = state.allCharacters.filter(character => character.gender === action.payload)
      if (action.payload === 'Everyone') {
        filteredCharacters = [...state.allCharacters]
      }
      return {
        ...state,
        myFavorites: filteredCharacters,
        allCharacters: filteredCharacters
      }

    case ORDER:
      const copyOfFavoriteCharacters = [...state.allCharacters]
      return {
        ...state,
        myFavorites: action.payload === 'A' ? copyOfFavoriteCharacters.sort((a,b) => a.id - b.id) : copyOfFavoriteCharacters.sort((a,b) => b.id - a.id)
      }

    default:
      return {...state}
  }
}