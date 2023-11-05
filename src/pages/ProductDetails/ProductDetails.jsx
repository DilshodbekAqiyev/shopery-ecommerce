import { Badge } from '../../components/ui/badge'
import SwiperContent from './components/SwiperContent'
import TabBar from './components/Tabs'

function ProductDetails() {
  return (
    <div className=" max-w-[1320px] mx-auto">
      <div className="flex items-start gap-3 mt-[34px] mb-1">
        <SwiperContent />
        <>
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-3">
              <h1 className="text-heading05 font-[600]">Chinese Cabbage</h1>
              <Badge
                className={'bg-softPrimary text-hardPrimary rounded-sm py-[2px] px-2 font-[400] hover:bg-softPrimary'}
              >
                In Stock
              </Badge>
            </div>
            <div className="text-gray-500 flex items-center gap-3">
              <h1>⭐⭐⭐⭐⭐ 4 Review</h1>
              <span>•</span>
              <div className="flex items-center gap-1">
                <h4 className="text-black font-[500]">SKU:</h4>
                <span>251594</span>
              </div>
            </div>
            <div></div>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </>
      </div>
      <TabBar />
      <h1 className="text-heading05 font-[600] text-center mb-8">Related Products</h1>
    </div>
  )
}

export default ProductDetails
