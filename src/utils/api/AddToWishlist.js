import PropTypes from 'prop-types'
import { instance } from '../apiRequest'
import { getUser } from '../utils'
export const AddToWishlist = ({ id }) => {
  // name, category, originalPrice, discountPrice, status, images
  console.log(id)
  //   let userInfo = ''

  //   const getUserWishlist = async () => {
  //     const data = await instance.get('users/1')
  //     console.log(data)
  //     // if (data?.data) {
  //     //   userInfo = data?.data
  //     // }
  //   }

  getUser().then((user) => {
    const request = instance
      .post(`users/${user}`, {
        id: 3,
        name: 'suhrob',
        category: 'vegetables',
      })
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        console.log('Error!' + err)
      })
    console.log(request)
  })
}
AddToWishlist.propTypes = {
  id: PropTypes.number,
}
