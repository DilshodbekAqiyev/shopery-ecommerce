/* eslint-disable no-extra-semi */
import PropTypes from 'prop-types'
import ModalDetails from './components/ModalDetails'
import TabBar from './components/Tabs'
import { useParams } from 'react-router-dom'
import { instance } from '../../utils/apiRequest'
import { useEffect, useState } from 'react'
import ProductCard from '../../components/common/Cards/ProductCard'

function ProductDetails() {
  const { productID } = useParams()
  const [foundProduct, setFoundProduct] = useState({})
  const [sliceProduct, setSliceProduct] = useState([])

  useEffect(() => {
    ;(async () => {
      const response = await instance.get(`products/${productID}`)
      setFoundProduct(response.data)
    })()
  }, [productID])

  useEffect(() => {
    ;(async () => {
      const response = await instance.get(`products?_start=1&_end=5`)
      console.log(response.data)
      setSliceProduct(response.data)
    })()
  }, [])

  return (
    <div className="max-w-[1320px] mx-auto">
      <ModalDetails product={foundProduct} />
      <TabBar product={foundProduct} />
      <h1 className="text-heading05 font-[600] text-center mb-8">Related Products</h1>
      <div className="flex justify-between">
        {sliceProduct?.map((item) => {
          return <ProductCard key={item.id} {...item} />
        })}
      </div>
    </div>
  )
}

ProductDetails.propTypes = {
  data: PropTypes.array,
}

export default ProductDetails
