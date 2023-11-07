import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ModalDetails from './components/ModalDetails'
import TabBar from './components/Tabs'
import { useParams } from 'react-router-dom'
import { instance } from '../../utils/apiRequest'

function ProductDetails() {
  const { id } = useParams()
  const [foundProduct, setFoundProduct] = useState(null)

  console.log(foundProduct)

  useEffect(() => {
    // eslint-disable-next-line no-extra-semi
    ;(async () => {
      const response = await instance.get(`products/${id}`)
      setFoundProduct(response.data)
    })()
  }, [id])

  return (
    <div className="max-w-[1320px] mx-auto">
      <div>
        <ModalDetails product={foundProduct} />
        <TabBar />
        <h1 className="text-heading05 font-[600] text-center mb-8">Related Products</h1>
      </div>
    </div>
  )
}

ProductDetails.propTypes = {
  data: PropTypes.array,
}

export default ProductDetails
