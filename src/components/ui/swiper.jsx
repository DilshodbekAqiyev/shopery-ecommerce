import { Swiper, SwiperSlide } from 'swiper/react'
import foodFoto from '../../../public/assets/images/special/topSwiperFoto.png'
import foodFoto2 from '../../../public/assets/images/special/topSwiperFoto2.png'
import foodFoto3 from '../../../public/assets/images/special/topSwiperFoto3.png'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules'
import { Button } from './button'
import { ArrowRight } from 'lucide-react'

function SwiperTop() {
  return (
    <div className="pt-[68px] pb-[68px]">
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
          <div className="flex items-center gap-2">
            <div>
              <img src={foodFoto} alt="" />
            </div>
            <div>
              <p className="mb-[8px] text-[#00B207]">Welcome to shopery</p>
              <h1 className="family-poppins mb-[20px] text-4xl font-semibold">
                Fresh & Healthy <br /> Organic Food
              </h1>
              <p className="text-[#618062] mb-[32px] ">Free shipping on all your order. we deliver, you enjoy</p>
              <Button>
                Shop now <ArrowRight />
              </Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center gap-2">
            <div>
              <img src={foodFoto2} alt="" />
            </div>
            <div>
              <p className="mb-[8px] text-[#00B207]">Welcome to shopery</p>
              <h1 className="family-poppins mb-[20px] text-4xl font-semibold">
                Fresh & Healthy <br /> Organic Food
              </h1>
              <p className="text-[#618062] mb-[32px] ">Free shipping on all your order. we deliver, you enjoy</p>
              <Button>
                Shop now <ArrowRight />
              </Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center gap-2">
            <div>
              <img src={foodFoto3} alt="" />
            </div>
            <div>
              <p className="mb-[8px] text-[#00B207]">Welcome to shopery</p>
              <h1 className="family-poppins mb-[20px] text-4xl font-semibold">
                Fresh & Healthy <br /> Organic Food
              </h1>
              <p className="text-[#618062] mb-[32px] ">Free shipping on all your order. we deliver, you enjoy</p>
              <Button>
                Shop now <ArrowRight />
              </Button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SwiperTop
