import PropTypes from 'prop-types'
import { instance } from '../apiRequest' 
import { getUser } from '../utils'
export const AddToWishlist = (product) => {
  const { id, name, category, originalPrice, discountPrice, status, images } = product
  // console.log(id)
  getUser().then((user) => {
    const el = user.wishlist.find((wishitem) => wishitem.id === id)
    if (!el) {  
      user.wishlist.push({
        id,
        name,
        category,
        discountPrice,
        originalPrice,
        status,
        images,
      })
      const request = instance.patch(`users/1`, user)
      console.log(request)
      console.log('added: =>' + user)
    } else {
      const newData = user.wishlist.filter((item) => item.id !== el.id)
      user.wishlist = newData
      const request = instance.patch(`users/1`, user)
      console.log(request)
      console.log('deleted: =>' + user)
    }
  })
}
AddToWishlist.propTypes = {
  id: PropTypes.number,
}
