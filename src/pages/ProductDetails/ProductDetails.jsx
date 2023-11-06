// import { useEffect, useState } from 'react'
// import { instance } from '../../utils/apiRequest'
import ModalDetails from './components/ModalDetails'
import TabBar from './components/Tabs'
// import { useParams } from 'react-router-dom'

function ProductDetails() {
  // const [data, setData] = useState([])
  // const { productID } = useParams()

  // const getProductData = async () => {
  //   const data = await instance.get(`products`)
  //   setData(data.data)
  // }

  // useEffect(() => {
  //   getProductData()
  // }, [])

  return (
    <div className=" max-w-[1320px] mx-auto">
      <ModalDetails />
      <TabBar />
      <h1 className="text-heading05 font-[600] text-center mb-8">Related Products</h1>
    </div>
  )
}

export default ProductDetails
