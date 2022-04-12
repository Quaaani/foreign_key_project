import axios from '../../axios/axios'
import { initFeedbackAC } from '../actionCreators/feedbackAC'


export const axiosInitFeedback = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/feedback')
      dispatch(initFeedbackAC(response.data))
    } catch (error) {
      throw error
    }
  }
}


export const axiosAddFeedback = (payload) => {
  return async (dispatch) => {
    try {
      await axios.post('/feedback', payload)

    } catch (error) {
      throw error
    }
  }
}
