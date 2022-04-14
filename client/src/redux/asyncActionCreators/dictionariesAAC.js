import axios from '../../axios/axios'
import { deleteWordAC, initDictionaryAC } from '../actionCreators/dictionariesAC'

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

export const axiosAddNewWord = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/dictionaries', payload)
    } catch(error) {
        throw error
    }
  }
}

export const axiosDeleteWord = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`/dictionaries/${payload}`)

      dispatch(deleteWordAC(response.data))
    } catch (error) {
        throw error
    }
  }
}

