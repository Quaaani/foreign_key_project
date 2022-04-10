import { INIT_FAVORITES } from '../actionTypes/favoritesAT'

const initialState = { favorites: null }

export const favoritesReducer = (state = initialState, action) => {
  switch(action.type) {
    case INIT_FAVORITES:
      return { ...state, favorites: action.payload}

    default: 
      return state
  }
}
