import { INIT_FAVORITES, ADD_FAAVORITES } from "../actionTypes/favoritesAT"

export function initFavoritesAC (payload) {
  return {
    type: INIT_FAVORITES,
    payload
  }
}

export function addFavoritesAC (payload) {
  return {
    type: ADD_FAAVORITES,
    payload
  }
}
