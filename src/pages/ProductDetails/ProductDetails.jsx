import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram } from 'react-icons/bi'
import { FaPinterestP } from 'react-icons/fa'
import { Badge } from '../../components/ui/badge'
import SwiperContent from './components/SwiperContent'
import TabBar from './components/Tabs'

function ProductDetails() {
  return (
    <div className=" max-w-[1320px] mx-auto">
      <div className="flex items-start gap-6 mt-[34px] mb-1">
        <SwiperContent />
        <div className="w-full flex flex-col items-start gap-6">
          <div className="flex flex-col items-start w-full border-b-2">
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
            <div className="flex w-full items-center gap-1 py-5">
              <h2 className="text-grays-gray300 text-[20px] line-through">$48.00</h2>
              <h2 className="text-hardPrimary font-[500] text-[24px] mr-3">$17.28</h2>
              <Badge className={'bg-red-200 text-red-600'}>64% Off</Badge>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-[10px]">
                <h3>Brand:</h3>
                <img src="/assets/images/products/brands/BrandIcon.svg" alt="BrandIcon" loading="lazy" />
              </div>
              <div className="flex items-center gap-[10px]">
                <h2>Share Item:</h2>
                <div className="flex items-center gap-1">
                  <div className="hover:bg-primary text-grays-gray700 p-2 cursor-pointer rounded-full transition-all ease-in-out duration-500 hover:text-white">
                    <BiLogoFacebook fontSize={24} />
                  </div>
                  <div className="hover:bg-primary text-grays-gray700 p-2 cursor-pointer rounded-full transition-all ease-in-out duration-500 hover:text-white">
                    <BiLogoTwitter fontSize={24} />
                  </div>
                  <div className="hover:bg-primary text-grays-gray700 p-2 cursor-pointer rounded-full transition-all ease-in-out duration-500 hover:text-white">
                    <FaPinterestP fontSize={24} />
                  </div>
                  <div className="hover:bg-primary text-grays-gray700 p-2 cursor-pointer rounded-full transition-all ease-in-out duration-500 hover:text-white">
                    <BiLogoInstagram fontSize={24} />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-500 mt-4">
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh
              diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar.
            </p>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
      <TabBar />
      <h1 className="text-heading05 font-[600] text-center mb-8">Related Products</h1>
    </div>
  )
}

export default ProductDetails
