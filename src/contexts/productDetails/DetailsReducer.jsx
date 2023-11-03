import { ACTION_TYPES } from './ActioinTypes'

export const detailsReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.ISPLAY:
      state.isPlay = !state.isPlay
      break
  }
  return { ...state }
}
