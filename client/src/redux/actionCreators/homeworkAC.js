import {SEND_HOMEWORK } from '../actionTypes/homeworkAT'

export function sendHomeworkAC (payload) {
    return {
        type: SEND_HOMEWORK,
        payload
    }
}
