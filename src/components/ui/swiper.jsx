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
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
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
              <div className="w-[100px] h-[100px] flex-col  text-[#fff] bg-[#FF8A00]  items-center flex rounded-[50%]  ml-[-150px] items-center justify-center">
                <span className="text-[32px] mt-[5px]">70%</span> <span className="mt-[-10px] text-[18px]">off</span>
              </div>
              <p className="mb-[8px] mt-[-120px]  text-[#00B207]">Welcome to shopery</p>
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
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center gap-2">
            <div>
              <img src={foodFoto2} alt="" />
            </div>
            <div className="">
              <div className="w-[100px] h-[100px] flex-col  text-[#fff] bg-[#FF8A00]  items-center flex rounded-[50%]  ml-[-150px] items-center justify-center">
                <span className="text-[32px] mt-[5px]">70%</span> <span className="mt-[-10px] text-[18px]">off</span>
              </div>
              <p className="mb-[8px] mt-[-120px]  text-[#00B207]">Welcome to shopery</p>
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
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center gap-2">
            <div>
              <img src={foodFoto3} alt="" />
            </div>
            <div className="">
              <div className="w-[100px] h-[100px] flex-col  text-[#fff] bg-[#FF8A00]  items-center flex rounded-[50%]  ml-[-150px] items-center justify-center">
                <span className="text-[32px] mt-[5px]">70%</span> <span className="mt-[-10px] text-[18px]">off</span>
              </div>
              <p className="mb-[8px] mt-[-120px]  text-[#00B207]">Welcome to shopery</p>
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
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SwiperTop
