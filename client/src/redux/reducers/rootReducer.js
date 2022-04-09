import { combineReducers } from "redux";
import { sessionReducer } from './sessionReducer'
import { coursesReducer } from "./coursesReducer";
import { favoritesReducer } from './favoritesReducer'
 

export const rootReducer = combineReducers({
  sessionReducer, coursesReducer, favoritesReducer,
})
