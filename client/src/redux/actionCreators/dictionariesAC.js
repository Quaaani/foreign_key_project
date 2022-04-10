import { INIT_DICTIONARY } from "../actionTypes/dictionariesAT";

export function initDictionaryAC (payload) {
  return {
    type: INIT_DICTIONARY,
    payload
  }
}
