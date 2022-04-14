import { INIT_HOMEWORK } from '../actionTypes/homeworkAT'

export function initHomeworkAC (payload) {
    
  return {
        type: INIT_HOMEWORK,
        payload
    }
}
