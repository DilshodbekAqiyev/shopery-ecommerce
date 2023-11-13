import { createContext, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { getUser } from '../utils/utils'

const Context = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const useProviderContext = () => {
  return useContext(Context)
}

const Provider = ({ children }) => {
  const [wishlist, setWishlist] = useState([])
  const [shoppingCart, setShoppingCart] = useState([])

  const values = { wishlist, setWishlist, shoppingCart, setShoppingCart }

  useEffect(() => {
    (async () => {
      const res = await getUser()
      setWishlist(res.wishlist)
      setShoppingCart(res.shoppingCart)
    })()
  }, [])

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
