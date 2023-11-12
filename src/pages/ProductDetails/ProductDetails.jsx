/* eslint-disable no-extra-semi */
import PropTypes from 'prop-types'
import ModalDetails from './components/ModalDetails'
import TabBar from './components/Tabs'
import { useParams } from 'react-router-dom'
import { instance } from '../../utils/apiRequest'
import { useEffect } from 'react'
import { useReducer } from 'react'
import ProductCard from '../../components/common/Cards/ProductCard'
import { detailsReducer } from '../../contexts/productDetails/DetailsReducer'
import { ACTION_TYPES } from '../../contexts/productDetails/ActioinTypes'

function ProductDetails() {
  const { productID } = useParams()
  const [state, dispatch] = useReducer(detailsReducer, {
    foundProduct: {},
    sliceProduct: [],
  })

  const setSliceProduct = (data) => {
    dispatch({ type: ACTION_TYPES.SLICE_PRODUCT, payload: data })
  }
  const setFoundProduct = (data) => {
    dispatch({ type: ACTION_TYPES.FOUND_PRODUCT, payload: data })
  }

  useEffect(() => {
    ;(async () => {
      const response = await  instance.get(`products/${productID}`)
      setFoundProduct(response.data)
    })()

  }, [productID] )

  useEffect(() => {
    ;(async () => {
      const response = await instance.get(`products?_start=1&_end=5`)
      // console.log(response.data)
      setSliceProduct(response.data)
    })()
  }, [])

  return (
    <div className="max-w-[1320px] mx-auto">
      <ModalDetails product={state.foundProduct} />
      <TabBar product={state.foundProduct} />
      <h1 className="text-heading05 font-[600] text-center mb-8">Related Products</h1>
      <div className="flex justify-between">
        {state?.sliceProduct?.map((item) => {
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
