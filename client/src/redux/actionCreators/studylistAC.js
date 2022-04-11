import { INIT_STUDYLIST } from "../actionTypes/studylistAT"

export function initStudylistAC (payload) {
    return {
        type: INIT_STUDYLIST,
        payload
    }
}
