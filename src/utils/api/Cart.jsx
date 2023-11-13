import { instance } from '../apiRequest'
import { getUser } from '../utils'

export const AddToCart = (product) => {
  getUser().then((user) => {
    const el = user.shoppingCart.find((cart) => cart.id === product.id)
    const elIdx = user.shoppingCart.findIndex((cart) => cart.id === product.id)
    if (!el) {
      user.shoppingCart.push(product)
      instance.patch(`users/${user.id}`, user)
    } else {
      user.shoppingCart[elIdx] = product
      instance.patch(`users/${user.id}`, user)
    }
  })
}

export const RemoveFromCart = (product) => {
  getUser().then((user) => {
    const newData = user.shoppingCart.filter((item) => item.id !== product.id)
    user.shoppingCart = newData
    instance.patch(`users/${user.id}`, user)
  })
}

export const toggleCart = (product) => {
  getUser().then((user) => {
    const el = user.shoppingCart.find((cart) => cart.id === product.id)
    if (!el) {
      user.shoppingCart.push(product)
      instance.patch(`users/${user.id}`, user)
    } else {
      const newData = user.shoppingCart.filter((item) => item.id !== product.id)
      user.shoppingCart = newData
      instance.patch(`users/${user.id}`, user)
    }
  })
}