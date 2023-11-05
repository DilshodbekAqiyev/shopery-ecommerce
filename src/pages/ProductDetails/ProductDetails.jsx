import SwiperContent from './components/SwiperContent'
import TabBar from './components/Tabs'

function ProductDetails() {
  return (
    <div className=" max-w-[1320px] mx-auto">
      <div className="flex items-start gap-3 mt-[34px] mb-1">
        <SwiperContent />
        <>
          <h1 className="text-heading05 font-[600]">Chinese Cabbage</h1>
        </>
      </div>
      <TabBar />
      <h1 className="text-heading05 font-[600] text-center mb-8">Related Products</h1>
    </div>
  )
}

export default ProductDetails
