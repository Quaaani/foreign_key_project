import { INIT_CARDS } from '../actionTypes/coursesAT'

export const initCardsAC = (payload) => {
  return {
    type: INIT_CARDS,
    payload
  }
}
