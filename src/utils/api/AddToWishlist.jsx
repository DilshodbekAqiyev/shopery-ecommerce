import { instance } from '../apiRequest'
import { getUser } from '../utils'

export const AddToWishlist = (product) => {
  getUser().then((user) => {
    const el = user.wishlist.find((wishitem) => wishitem.id === product.id)
    if (!el) {
      user.wishlist.push(product)
      instance.patch(`users/${user.id}`, user)
    } else {
      const newData = user.wishlist.filter((item) => item.id !== el.id)
      user.wishlist = newData
      instance.patch(`users/${user.id}`, user)
    }
  })
}
