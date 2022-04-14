import axios from '../../axios/axios'
import { initSessionAC } from '../actionCreators/sessionAC'

export const axiosInitSession = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/session')
      dispatch(initSessionAC(response.data.data))
    } catch (error) {
      throw error
    }
  }
}
