const shopReducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, data: action.payload }
    case 'SET_CATEGORY_FILTER':
      return { ...state, categoryFilter: action.payload }
    case 'SET_PRICE_FILTER':
      return { ...state, priceFilter: action.payload }
    case 'SET_RATING_FILTER':
      return { ...state, ratingFilter: action.payload }
    case 'SET_TAG_FILTER':
      return { ...state, tagFilter: action.payload }
    case 'SET_FILTERED_DATA':
      return { ...state, filteredProducts: action.payload }
    default:
      return state
  }
}

export default shopReducer
