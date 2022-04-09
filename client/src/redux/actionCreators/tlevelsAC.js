import { INIT_TLEVELS} from "../actionTypes/tlevelsAT";

export const tLevelsAC = (payload) => {
    return {
        type: INIT_TLEVELS,
        payload
    }
}
