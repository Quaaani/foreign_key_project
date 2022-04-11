import { combineReducers } from "redux";
import { sessionReducer } from './sessionReducer'
import { coursesReducer } from "./coursesReducer";
import { favoritesReducer } from './favoritesReducer'
import { dictionariesReducer } from "./dictionariesReducer";
import {tLevelsReducer} from "./tlevelsReducer";
import {studylistReducer} from "./studylistReducer";

export const rootReducer = combineReducers({
  sessionReducer, coursesReducer, favoritesReducer, dictionariesReducer, tLevelsReducer, studylistReducer
})
