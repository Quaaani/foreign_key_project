import { INIT_SESSION, DELETE_SESSION } from '../actionTypes/sessionAT'

export const initSessionAC = (payload) => {
  return {
    type: INIT_SESSION,
    payload
  }
}

export const deleteSessionAC = () => {
  return {
    type: DELETE_SESSION
  }
}
