import { addUserAC } from '../actionCreators/userAC'
import axios from '../../axios/axios'
import { ReactReduxContext } from 'react-redux'

// export const axiosAddUser = (payload) => {
//   return async (dispatch) => {
//     // GET
//     const response = await axios.get('/example')
//     console.log('AXIOS GET RESPONSE =>', response)
//     dispatch(addUserAC(response.data))

    // POST
    // const responseTwo = await axios.post('/example', payload)
    // console.log('AXIOS POST RESPONSE =>', responseTwo)
//   }
// }

export const axiosAddUserAAC = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/registration', payload)
      console.log(response);
    } catch (error) {
      throw error
    }
  }
}

export const axiosLoginUserAAC = (payload) => {
  return async (dispatch) => {
    try {
      const resp = await axios.post('/login', payload)
      console.log(resp);
    } catch (error) {
      throw error
    }
  }
}
