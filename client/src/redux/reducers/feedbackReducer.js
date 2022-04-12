import { INIT_FEEDBACK, ADD_FEEDBACK } from "../actionTypes/feedbackAT";

const initialState = { feedbacks: null }

export const feedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_FEEDBACK:
        return {...state, feedbacks: action.payload}
    case ADD_FEEDBACK:
        return {...state, feedbacks:[...state.feedbacks, action.payload]}
    default:
      return state
  }
}
