import axios from '../../axios/axios'
import { sendHomeworkAC } from '../actionCreators/homeworkAC'

export const axiosSendHomeworkAAC = (payload) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('/homework', payload)
        } catch (error) {
            throw error
        }
    }
}
