import axios from '../../axios/axios'
import { initStudylistAC } from "../actionCreators/studylistAC";

export const axiosInitStudylistAAC = (params) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`/courses/${params}`)
            // console.log('Here response ===>', response)
            dispatch(initStudylistAC(response.data))
        } catch (error) {
            throw error
        }
    }

}
