import { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const Context = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const useProviderContext = () => {
  return useContext(Context)
}

const Provider = ({ children }) => {
  const [wishlist, setWishlist] = useState([])

  const values = { wishlist, setWishlist }

  return (
    <Context.Provider value={values}>
      {children}
    </Context.Provider>
  )
}


export default Provider

Provider.propTypes = {
  children: PropTypes.element,
}
