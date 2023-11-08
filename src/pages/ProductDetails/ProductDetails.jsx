/* eslint-disable no-extra-semi */
import PropTypes from 'prop-types'
import ModalDetails from './components/ModalDetails'
import TabBar from './components/Tabs'
import { useParams } from 'react-router-dom'
import { instance } from '../../utils/apiRequest'
import { useEffect, useState } from 'react'

function ProductDetails() {
  const { productID } = useParams()
  const [foundProduct, setFoundProduct] = useState({})
  // const context = createContext()

  console.log(foundProduct)

  useEffect(() => {
    // eslint-disable-next-line no-extra-semi
    ;(async () => {
      const response = await instance.get(`products/${productID}`)
      setFoundProduct(response.data)
    })()
  }, [productID])

  return (
    <div className="max-w-[1320px] mx-auto">
      <>
        <ModalDetails product={foundProduct} />
        <TabBar product={foundProduct} />
      </>
      <h1 className="text-heading05 font-[600] text-center mb-8">Related Products</h1>
    </div>
  )
}

ProductDetails.propTypes = {
  data: PropTypes.array,
}

export default ProductDetails
