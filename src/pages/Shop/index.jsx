import ShopProvider from '../../contexts/shop/ShopContext'
import Shop from './shop'

const ShopPage = () => {
  return (
    <ShopProvider>
      <Shop />
    </ShopProvider>
  )
}

export default ShopPage
