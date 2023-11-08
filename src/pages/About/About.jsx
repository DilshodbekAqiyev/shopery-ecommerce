import { useEffect, useState } from "react"
import { instance } from "../../utils/apiRequest"
import Container from "../../components/common/Container"
import { LazyLoadImage } from "react-lazy-load-image-component"

function About() {
  const [data, setData] = useState({})

  const getData = async () => {
    const res = await instance.get('aboutUs')
    setData(res.data)
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <div>
      <Container >
        <div className="mt-[80px] flex justify-between items-center gap-[41px]">
          <div>
            <h1 className="text-[56px] font-[600] leading-[67px]">{data.welcome?.[0].title}</h1>
            <p className="mt-[32px] w-[565px] text-gray-600 font-[18px] leading-[27px]">{data.welcome?.[0].content}</p>
          </div>
          <LazyLoadImage
            delayTime={300}
            src={data.welcome?.[0].image}
            alt="img"
            effect="blur"
            className="w-[716px] h-[492px] object-contain rounded-md"
          />
        </div>
      </Container>
      <div className="max-w-[1620px] mx-auto mt-[80px]  flex gap-[32px] bg-[url('/assets/images/About/about_bg.png')] bg-no-repeat">
        <LazyLoadImage
          delayTime={300}
          src={data.welcome?.[1].image}
          alt="img"
          effect="blur"
        />
        <div>
          <h1 className="mt-[80px] text-[56px] font-[600] leading-[67px] w-[544px]">{data.welcome?.[1].title}</h1>
          <p className="mt-[32px] w-[565px] text-gray-600  leading-[27px]">{data.welcome?.[1].content}</p>
          <div className="flex mt-[24px] gap-[24px]">
            <div>
              <div className="flex items-center gap-[16px]">
                <img src="/assets/images/About/about-icon-leaf.svg" alt="" />
                <div>
                  <h2 className="text-[18px] font-[500]">100% Organic food</h2>
                  <p className="mt-[5px] text-[14px] text-gray-600 ">100% healthy & Fresh food.</p>
                </div>
              </div>
              <div className="flex items-center gap-[16px] mt-[24px]">
                <img src="/assets/images/About/about-icon-star.svg" alt="" />
                <div>
                  <h2 className="text-[18px] font-[500]">Customer Feedback</h2>
                  <p className="mt-[5px] text-[14px] text-gray-600 ">Our happy customer</p>
                </div>
              </div>
              <div className="flex items-center gap-[16px]  mt-[24px]">
                <img src="/assets/images/About/about-icon-car.svg" alt="" />
                <div>
                  <h2 className="text-[18px] font-[500]">Free Shipping</h2>
                  <p className="mt-[5px] text-[14px] text-gray-600 ">Free shipping with discount</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-[16px]">
                <img src="/assets/images/About/about-icon-earphone.svg" alt="" />
                <div>
                  <h2 className="text-[18px] font-[500]">100% Organic food</h2>
                  <p className="mt-[5px] text-[14px] text-gray-600 ">100% healthy & Fresh food.</p>
                </div>
              </div>
              <div className="flex items-center gap-[16px] mt-[24px]">
                <img src="/assets/images/About/about-icon-shop.svg" alt="" />
                <div>
                  <h2 className="text-[18px] font-[500]">Customer Feedback</h2>
                  <p className="mt-[5px] text-[14px] text-gray-600 ">Our happy customer</p>
                </div>
              </div>
              <div className="flex items-center gap-[16px]  mt-[24px]">
                <img src="/assets/images/About/about-icon-organ-food.svg" alt="" />
                <div>
                  <h2 className="text-[18px] font-[500]">Free Shipping</h2>
                  <p className="mt-[5px] text-[14px] text-gray-600 ">Free shipping with discount</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About
