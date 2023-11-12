import { instance } from '../apiRequest'
import { getUser } from '../utils'
export const AddToWishlist = (product) => {
  const { id } = product
  // console.log(id)
  getUser().then((user) => {
    const el = user.wishlist.find((wishitem) => wishitem.id === id)
    if (!el) {
      user.wishlist.push(product)
      instance.patch(`users/1`, user)
      console.log('added: =>' + user)
    } else {
      const newData = user.wishlist.filter((item) => item.id !== el.id)
      user.wishlist = newData
      instance.patch(`users/1`, user)
      console.log('deleted: =>' + user)
    }
  })
}
