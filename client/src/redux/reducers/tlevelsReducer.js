import { INIT_TLEVELS} from "../actionTypes/tlevelsAT";

const initialState = { tLevels: null }

export const tLevelsReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_TLEVELS:
            return {...state, tLevels: action.payload}
        default:
            return state
    }
}
