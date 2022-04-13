import axios from '../../axios/axios'
import { initHomeworkAC } from '../actionCreators/homeworkAC'

export const axiosSendHomeworkAAC = (payload) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('/homework', payload)
        } catch (error) {
            throw error
        }
    }
}

export const axiosInitHomeworkAAC = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/homework')
      dispatch(initHomeworkAC(response.data))
    } catch (error) {
      throw error
    }
  }
}

export const axiosAddLevelAAC = (id, payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`/homework/${id}`, payload)
    } catch (error) {
        throw error
    }
  }
}
