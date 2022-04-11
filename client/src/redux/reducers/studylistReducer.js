import {INIT_STUDYLIST} from "../actionTypes/studylistAT";


const initialState = { studylist: null }

export const studylistReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_STUDYLIST:
            return {...state, studylist: action.payload}
        default:
            return state
    }
}
