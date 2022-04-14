import axios from '../../axios/axios'
import { initFavoritesAC } from '../actionCreators/favoritesAC'

export const axiosInitFavoritesAAC = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/favorites')
      dispatch(initFavoritesAC(response.data))
    } catch (error) {
      throw error
    }
  }
}

export const axiosAddFavoritesAAC = (payload) => {
  return async (dispatch) => {
    try {
      const resposne = await axios.post('/favorites', payload)
    } catch (error) {
        throw error
    }
  }
}
