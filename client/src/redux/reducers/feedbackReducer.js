import { INIT_FEEDBACK } from "../actionTypes/feedbackAT";

const initialState = { feedback: null }

export const feedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_FEEDBACK:
        return {...state, feedback: action.payload}
    default:
      return state
  }
}
