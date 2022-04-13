import axios from '../../axios/axios'
import { initCoursesAndStidentsAC } from '../actionCreators/teachersProfileAC'

export const axiosinitCoursesAndStidentsAAC = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/teacherProfile')
      dispatch(initCoursesAndStidentsAC(response.data))
    } catch (error) {
        throw error
    }
  }
}
