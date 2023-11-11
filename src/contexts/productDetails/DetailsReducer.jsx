import { ACTION_TYPES } from './ActioinTypes'

export const detailsReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.ISPLAY:
      state.isPlay = !state.isPlay
      break
    case ACTION_TYPES.SLICE_PRODUCT:
      state.sliceProduct = action.payload
      break
    case ACTION_TYPES.FOUND_PRODUCT:
      state.foundProduct = action.payload
      break
  }
  return { ...state }
}
