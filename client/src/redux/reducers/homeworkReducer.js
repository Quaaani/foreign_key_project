import { INIT_HOMEWORK } from '../actionTypes/homeworkAT'

const initialState = { homework: null}

export const homeworkReducer = (state = initialState, action) => {  
  switch(action.type) {
    case INIT_HOMEWORK:
      return { ...state, homework: action.payload}
    default:
      return state
    }
}
