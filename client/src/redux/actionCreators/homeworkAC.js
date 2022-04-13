import { INIT_HOMEWORK } from '../actionTypes/homeworkAT'

export function initHomeworkAC (payload) {
    
  console.log('INIT',INIT_HOMEWORK)
  return {
        type: INIT_HOMEWORK,
        payload
    }
}
