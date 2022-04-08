import axios from '../../axios/axios'
import { initSessionAC } from '../actionCreators/sessionAC'

export const axiosInitSessionAAC = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/session')
      console.log('res =>', response.data.data)
      dispatch(initSessionAC(response.data.data))
    } catch (error) {
      throw error
    }
  }
}
