import { useEffect, useState } from 'react'
import ProductCard from '../../components/common/Cards/ProductCard'
import FeaturedProducts from './FeaturedProducts'
import Video from '../../components/common/video/video'
import LatestCard from '../../components/common/Cards/LatestCard'
import OurSpecial from './components/OurSpecial'
import Timer from './components/timer'
import SwiperTop from '../../components/ui/swiper'
import Featured from '../../components/common/featured/featured'
import { instance } from '../../utils/apiRequest'

const vegetablesData = ['All', 'Vegetables', 'Fruit', 'Meat & Fish', ' View All']

const Home = () => {
  const [dataProduct, setdataProduct] = useState([])
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    ;(async () => {
      const dataProductPage = await instance.get(`/products`)
      setdataProduct(dataProductPage.data)
      // console.log(dataProductPage);
    })()
  }, [])

  const [matches, setMatches] = useState(window.matchMedia('(min-width: 570px)').matches)
  window.matchMedia('(min-width: 570px)').addEventListener('change', (e) => setMatches(e.matches))

  return (
    <div>
      <div className="relative max-w-[1320px] m-auto">
        <SwiperTop />
        <div>
          <Featured />
        </div>
      </div>
      <div className="bg-[#EDF2EE] py-[100px]">
        <h1 className="font-[600] text-[40px] text-center  mb-[24px]">Introducing Our Products</h1>
        <div className="text-center mb-[50px]">
          {vegetablesData.map((item, index) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <a href="#0" key={index}>
                <span className="hover:border-b-2 hover:text-[#00B207] text-[#808080] text-[16px] font-[500] border-[#20B526] py-[8px] px-[12px]">
                  {item}
                </span>{' '}
                {index < vegetablesData.length - 1 ? (
                  <span className="mx-[10px] text-[#B4CCB4] font-[400]">|</span>
                ) : (
                  ''
                )}
              </a>
            )
          })}
        </div>
        <div className="border px-[146px]">
          <div className="flex flex-wrap">
            {dataProduct.map((data) => {
              // console.log(data)
              return <ProductCard key={data.id} {...data} />
            })}
          </div>
        </div>
      </div>
      <OurSpecial />

      <div className="bg-slate-300 ">
        <div className="mx-auto  flex overflow-hidden items-center justify-between">
          <div className="mx-auto w-[1518px] flex overflow-hidden items-center justify-between py-20">
            <img className="w-[521px]" src="/assets/images/special/special_left.png" alt="" />
            <Timer />
            <img className="w-[700px] mb-[-80px]" src="/assets/images/special/special_right.png" alt="" />
          </div>
        </div>

        <div className="bg-white">
          <div className="container">{/* <FeaturedProducts dataFeatures={data} /> */}</div>
        </div>

        <div className=" bg-latestWhiteGrayReverse">
          <div className=" container py-[100px] ">
            <Video
              src="https://youtu.be/0ptb_0gN7_4"
              width="1320px"
              height={matches ? '740px' : '500px'}
              title="We’re the Best Organic Farm in the World"
            />
          </div>
        </div>
        <div className="flex items-center justify-start flex-col h-[712px] max-xl:h-auto gap-[34px] bg-latestWhiteGray">
          <p className="font-semibold text-[40px]">Latest News</p>
          <div className=" flex gap-[24px] items-center justify-center max-xl:flex-wrap">
            {/* {Array.from(Array(3).keys()).map((item) => (
              <LatestCard key={item} {...data} />
            ))} */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
