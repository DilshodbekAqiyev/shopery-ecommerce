import React from 'react'
import DeliveryTruck from './deliveryTruck'
import HeadPhones from './headPhones'
import ShoppingBag from './shoppingBag'
import Paccages from './paccages'

function Featured() {
  return (
    <div className=" flex mx-0 ">
      <div className="w-[330px] h-[222px] border border-[#E6E6E6] p-[40px] hover:bg-[#00B207] hover:cursor-pointer hover:text-white">
        <div className="w-[70px] h-[70px] border border-[#DAE5DA] rounded-[50%]   bg-white flex items-center justify-center mb-4">
          <DeliveryTruck />
        </div>
        <h2 className="font-semibold text-base mb-2">Free Shipping</h2>
        <p>Free shipping with discount</p>
      </div>
      <div className="w-[330px] h-[222px] border border-[#E6E6E6] p-[40px] hover:bg-[#00B207] hover:cursor-pointer hover:text-white">
        <div className="w-[70px] h-[70px] border border-[#DAE5DA] rounded-[50%]   bg-white flex items-center justify-center mb-4">
          <HeadPhones />
        </div>
        <h2 className="font-semibold text-base mb-2">Great Support 24/7</h2>
        <p>Instant access to Contact</p>
      </div>
      <div className="w-[330px] h-[222px] border border-[#E6E6E6] p-[40px] hover:bg-[#00B207] hover:cursor-pointer hover:text-white">
        <div className="w-[70px] h-[70px] border border-[#DAE5DA] rounded-[50%]   bg-white flex items-center justify-center mb-4">
          <ShoppingBag />
        </div>
        <h2 className="font-semibold text-base mb-2">Money-Back Guarantee</h2>
        <p>30 days money-back guarant</p>
      </div>
      <div className="w-[330px] h-[222px] border border-[#E6E6E6] p-[40px] hover:bg-[#00B207] hover:cursor-pointer hover:text-white">
        <div className="w-[70px] h-[70px] border border-[#DAE5DA] rounded-[50%]   bg-white flex items-center justify-center mb-4">
          <Paccages />
        </div>
        <h2 className="font-semibold text-base mb-2">Free Shipping</h2>
        <p>Free shipping with discount</p>
      </div>
    </div>
  )
}

export default Featured
