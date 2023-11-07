import { createContext, useReducer, useContext } from 'react'

import PropTypes from 'prop-types'

import shopReducer from './ShopReducer'

const ShopContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const useShopContext = () => {
  return useContext(ShopContext)
}

const initialState = {
  data: [],
  categoryFilter: 'All Categories',
  priceFilter: [0, 1000],
  ratingFilter: null,
  tagFilter: null,
  filteredProducts: [],
}

const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState)

  return <ShopContext.Provider value={{ state, dispatch }}>{children}</ShopContext.Provider>
}

export default ShopProvider

ShopProvider.propTypes = {
  children: PropTypes.element,
}
