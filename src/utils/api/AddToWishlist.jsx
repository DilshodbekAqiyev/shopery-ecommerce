import PropTypes from 'prop-types'
import { instance } from '../apiRequest'
export const AddToWishlist = ({ id }) => {
  //   const { id, name, category, originalPrice, discountPrice, status, images } = product

  const request = instance.post(`users/wishlist`, {
    id: id,
    name: 'suhrob',
    category: 'vegetables',
  })
  console.log(request)
}
AddToWishlist.propTypes = {
  product: PropTypes.object,
}
