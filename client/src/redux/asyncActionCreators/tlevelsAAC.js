import axios from "../../axios/axios"
import {tLevelsAC} from '../actionCreators/tlevelsAC'

export const axiosInitTLevels = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('/tlevel')
            dispatch(tLevelsAC(response.data))
        } catch (error){
            throw error
        }
    }
}
