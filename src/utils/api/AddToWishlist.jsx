import PropTypes from 'prop-types'
import { instance } from '../apiRequest'
import { getUser } from '../utils'
export const AddToWishlist = ({ id }) => {
  // name, category, originalPrice, discountPrice, status, images

  getUser().then((user) => {
    const request = instance.post(`users/${user.wishlist}/1`, {
      id: id,
      name: 'suhrob',
      category: 'vegetables',
    })
    console.log(user.wishlist)
    console.log(request)
  })
}
AddToWishlist.propTypes = {
  id: PropTypes.number,
}
