import { INIT_DICTIONARY, DELETE_WORD } from "../actionTypes/dictionariesAT";

export function initDictionaryAC (payload) {
  return {
    type: INIT_DICTIONARY,
    payload
  }
}

export function deleteWordAC (payload) {
  return {
    type: DELETE_WORD,
    payload
  }
}
