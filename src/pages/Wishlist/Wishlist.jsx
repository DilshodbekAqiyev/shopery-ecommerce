import { useState } from 'react'
import { useEffect } from 'react'
import { instance } from '../../utils/apiRequest'
import SocialMediaIcons from '../../components/common/SocialMediaIcons'

export default function Wishlist() {
  const [wishlistData, setWishlistData] = useState([])

  const getWishData = async () => {
    const data = await instance.get('users/1')
    setWishlistData(data.data.wishlist)
    console.log(data.data.wishlist)
  }

  useEffect(() => {
    getWishData()
  }, [])
  return (
    <div className="bg-[#F5F5F5]">
      <div className="container pt-[110px]  pb-[80px]">
        <div className="border rounded-[8px]">
          <div className="flex pt-[16px] pl-[24px] pb-[16px] gap-x-[466px]">
            <h3 className="text-[#808080] text-[14px]">PRODUCT</h3>
            <div className="flex justify-between gap-x-[295px]">
              <h3 className="text-[#808080] text-[14px]">PRICE</h3>
              <h3 className="text-[#808080] text-[14px]">STOCK STATUS</h3>
            </div>
          </div>
          <hr className="bg-[#EDEDED] h-[1px] mb-[30px]" />
          <div className="pl-[24px] pr-[24px] pb-[24px]">
            {wishlistData.map((data, index) => {
              return (
                <div className="flex mt-[24px] items-center justify-between w-[1272px] text-left" key={index}>
                  <div className="flex gap-x-[20px] items-center">
                    <img src={data.images.src} alt={data.images.imageDescription} className="w-[100px] h-[100px]" />
                    <h4 className="text-[16px] text-[#1A1A1A]">{data.name}</h4>
                  </div>
                  {data.originalPrice ? (
                    <div className="flex">
                      <h3 className="text-[#1A1A1A] text-[16px] text-left">{`$${data.discountPrice}`}</h3>
                      <del className="text-[#999] text-[16px] ml-1">{`$${data.originalPrice}`}</del>
                    </div>
                  ) : (
                    <h3 className="text-[16px] text-left">{data.discountPrice} </h3>
                  )}
                  <div>
                    {!data.status ? (
                      <div className="flex gap-x-[136px] items-center">
                        <h3 className="text-[#2C742F] text-[14px] bg-[#CAE8CC] text-center px-[8px] py-[4px]">
                          In Stock
                        </h3>
                        <div className="flex gap-x-[24px] items-center">
                          <button className="bg-[#00B207] rounded-[43px] text-[white] px-[32px] py-[15px] hover:bg-[#19BA1F] transition">
                            Add to Cart
                          </button>
                          <button className="w-[24px] h-[24px] p-[2px] rounded-[50%] border-gray-500">
                            <i className="fa-regular fa-circle-xmark text-[gray] scale-[1.2]"></i>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex gap-x-[106px] items-center">
                        <h3 className="text-[#EA4B48] text-[14px] bg-[#F3D3D2] px-[8px] py-[4px]">{data.status}</h3>
                        <div className="flex gap-x-[24px] items-center">
                          <button className="bg-[#F2F2F2] rounded-[43px] text-[#B3B3B3] px-[32px] py-[15px] cursor-not-allowed">
                            Add to Cart
                          </button>
                          <button className="w-[24px] h-[24px] rounded-[50%] border-gray-500 ">
                            <i className="fa-regular fa-circle-xmark text-[gray] scale-[1.2]"></i>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
          <hr className="bg-[#EDEDED] h-[1px]" />
          <div className="flex py-[24px] pl-[24px] items-center">
            <h3 className="text-[14px] font-normal mr-[20px]">Share:</h3>
            <SocialMediaIcons />
          </div>
        </div>
      </div>
    </div>
  )
}
