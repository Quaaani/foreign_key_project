import axios from '../../axios/axios'
import { initDictionaryAC } from '../actionCreators/dictionariesAC'

export const axiosInitDictionaryAAC = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/dictionaries')
      dispatch(initDictionaryAC(response.data))
    } catch (error) {
      throw error
    }
  }
}
