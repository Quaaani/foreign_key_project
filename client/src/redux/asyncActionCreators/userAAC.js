import { addUserAC } from '../actionCreators/userAC'
import axios from '../../axios/axios'

export const axiosAddUser = (payload) => {
  return async (dispatch) => {
    // GET
    const response = await axios.get('/example')
    console.log('AXIOS GET RESPONSE =>', response)

    // POST
    const responseTwo = await axios.post('/example', payload)
    console.log('AXIOS POST RESPONSE =>', responseTwo)
  }
}
