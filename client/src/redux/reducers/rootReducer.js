import { combineReducers } from "redux";
import { sessionReducer } from './sessionReducer'
import { coursesReducer } from "./coursesReducer";
import {tLevelsReducer} from "./tlevelsReducer";


export const rootReducer = combineReducers({
  sessionReducer, coursesReducer, tLevelsReducer
})
