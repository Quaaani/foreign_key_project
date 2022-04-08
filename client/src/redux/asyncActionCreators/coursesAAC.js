import axios from "../../axios/axios"
import { initCardsAC } from "../actionCreators/coursesAC"


export const axiosInitCards = (payload) => {
  return async (dispatch) => {
    const response = await axios.get('/courses')
    dispatch(initCardsAC(response.data))
  }
}
