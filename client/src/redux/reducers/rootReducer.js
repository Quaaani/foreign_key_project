import { combineReducers } from "redux";
import { sessionReducer } from './sessionReducer'
import { coursesReducer } from "./coursesReducer";
import { favoritesReducer } from './favoritesReducer'
import { dictionariesReducer } from "./dictionariesReducer";
 

export const rootReducer = combineReducers({
  sessionReducer, coursesReducer, favoritesReducer, dictionariesReducer,
})
