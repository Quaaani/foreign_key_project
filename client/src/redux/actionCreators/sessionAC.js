import { INIT_SESSION } from '../actionTypes/sessionAT'

export const initSessionAC = (payload) => {
  return {
    type: INIT_SESSION,
    payload
  }
}
