import { createContext, useContext, useReducer } from 'react'

import PropTypes from 'prop-types'

const FilterContext = createContext()

export function useFilter() {
  return useContext(FilterContext)
}

const initialState = {
  categories: [],
  slider: { min: 0, max: 1000 },
  rating: [],
  popularTags: [],
  products: [],
}

const filterReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CATEGORIES':
      return { ...state, categories: action.payload }
    case 'SET_SLIDER':
      return { ...state, slider: action.payload }
    case 'SET_RATING':
      return { ...state, rating: action.payload }
    case 'SET_POPULAR_TAGS':
      return { ...state, popularTags: action.payload }
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload }
    default:
      return state
  }
}

export function FilterProvider({ children }) {
  const [state, dispatch] = useReducer(filterReducer, initialState)

  return <FilterContext.Provider value={{ state, dispatch }}>{children}</FilterContext.Provider>
}

FilterProvider.propTypes = {
  children: PropTypes.any,
}
