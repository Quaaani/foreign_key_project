import { INIT_FAVORITES } from "../actionTypes/favoritesAT"

export function initFavoritesAC (payload) {
  return {
    type: INIT_FAVORITES,
    payload
  }
}

