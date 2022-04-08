import { INIT_SESSION } from '../actionTypes/sessionAT'
const initialState = { session: null }

export const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_SESSION: {
      return { ...state, session: action.payload }
    }

    default:
      return state
  }
}
