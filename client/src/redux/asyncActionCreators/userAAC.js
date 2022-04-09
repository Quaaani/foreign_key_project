import axios from '../../axios/axios'
import { deleteSessionAC } from '../actionCreators/sessionAC'

export const axiosAddUserAAC = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/registration', payload)
    } catch (error) {
      throw error
    }
  }
}

export const axiosLoginUserAAC = (payload) => {
  return async (dispatch) => {
    try {
      const resp = await axios.post('/login', payload)
    } catch (error) {
      throw error
    }
  }
}

export const axiosLogoutUserAAC = (payload) => {
  return async (dispatch) => {
    try {
      const resp = await axios.get('/logout')
      dispatch(deleteSessionAC())
    } catch (error) {
      throw error
    }
  }
}

