import { INIT_DICTIONARY, DELETE_WORD } from '../actionTypes/dictionariesAT'

const initialState = { dictionary : null}

export const dictionariesReducer = (state = initialState, action) => {
  switch(action.type) {
    case INIT_DICTIONARY:
      return { ...state, dictionary: action.payload}
    
    case DELETE_WORD:
      return { ...state, dictionary: state.dictionary.filter(el => el.id !== action.payload)}

    default :
      return state
  }
}
