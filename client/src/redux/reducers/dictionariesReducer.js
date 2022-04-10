import { INIT_DICTIONARY } from '../actionTypes/dictionariesAT'

const initialState = { dictionary : null}

export const dictionariesReducer = (state = initialState, action) => {
  switch(action.type) {
    case INIT_DICTIONARY:
      return { ...state, dictionary: action.payload}
    default :
      return state
  }
}
