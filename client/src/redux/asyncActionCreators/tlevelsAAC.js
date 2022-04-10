import axios from "../../axios/axios"
import {tLevelsAC} from '../actionCreators/tlevelsAC'

export const axiosInitTLevels = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('/tlevel')
            console.log('res tlevels=>', response)
            dispatch(tLevelsAC(response.data))
        } catch (error){
            throw error
        }
    }
}
