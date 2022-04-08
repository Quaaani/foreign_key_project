import { combineReducers } from "redux";
import { sessionReducer } from './sessionReducer'
import { coursesReducer } from "./coursesReducer";
 

export const rootReducer = combineReducers({
  sessionReducer, coursesReducer,
})
