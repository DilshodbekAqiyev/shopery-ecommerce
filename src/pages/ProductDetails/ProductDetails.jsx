// import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ModalDetails from './components/ModalDetails'
import TabBar from './components/Tabs'
// import { useParams } from 'react-router-dom'

function ProductDetails({ data }) {
  // const [product, setProduct] = useState([])
  // const { id } = useParams()
  console.log('data::' + data)

  // useEffect(() => {
  //   const foundProduct = data?.find((item) => item.id === id)
  //   console.log(foundProduct)
  //   if (foundProduct) {
  //     setProduct(foundProduct)
  //   } else {
  //     return
  //   }
  // }, [data, id])

  return (
    <div className=" max-w-[1320px] mx-auto">
      <div>
        <ModalDetails />
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
