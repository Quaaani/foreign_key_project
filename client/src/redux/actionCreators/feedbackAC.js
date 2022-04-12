import {ADD_FEEDBACK, INIT_FEEDBACK} from '../actionTypes/feedbackAT';

export const sendFeedbackAC = (payload) => {
  return {
    type: ADD_FEEDBACK,
    payload
  }
}

export const initFeedbackAC = (payload) => {
  return {
    type: INIT_FEEDBACK,
    payload
  }
}
