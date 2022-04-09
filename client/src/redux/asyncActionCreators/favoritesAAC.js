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
