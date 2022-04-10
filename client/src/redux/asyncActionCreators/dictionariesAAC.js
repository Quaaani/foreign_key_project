import axios from '../../axios/axios'
import { initDictionaryAC } from '../actionCreators/dictionariesAC'

export const axiosInitDictionaryAAC = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/dictionaries')
      console.log('DICTIONARY RES => ',response.data);
      dispatch(initDictionaryAC(response.data))
    } catch (error) {
      throw error
    }
  }
}
