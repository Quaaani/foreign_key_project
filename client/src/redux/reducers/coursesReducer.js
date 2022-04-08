import { INIT_CARDS } from "../actionTypes/coursesAT"

const initialState = { courses: null }

export const coursesReducer = ( state = initialState, action) => {
  switch(action.type) {
    case INIT_CARDS:
      return { ...state, courses: action.payload }

    default:
      return state
  }
}
