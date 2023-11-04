import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules'
import Sliderimg from '../../public/assets/images/sliderImg.png'

function HeaderSection() {
  return (
    <>
      <div className="bg-red-500 py-[68px] mx-auto">
        <div>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex items-center">
                <div className="flex">
                  <div>
                    <img src={Sliderimg} alt="" className="w-[795px] h-[564px]" />
                  </div>
                  <div className="w-[100px] h-[100px] rounded-[50%] pl-8 pt-8 bg-warning">
                    <p >70% <br /> off</p>
                  </div>
                </div>
                <div>
                  <p>Welcome to shopery</p>
                  <p>Fresh & Healthy Organic Food</p>
                  <p>Free shipping on all your order. we deliver, you enjoy</p>
                  <button>Shop now</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default HeaderSection
