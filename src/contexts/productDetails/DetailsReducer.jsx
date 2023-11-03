import { ACTION_TYPES } from './ActioinTypes'

export const detailsReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.PLAY:
      return { ...state }, action.payload
    case ACTION_TYPES.PAUSE:
      return { ...state }, action.payload
    default:
      break
  }
}
