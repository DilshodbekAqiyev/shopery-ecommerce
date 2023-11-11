import { useEffect, useState } from "react"
import { instance } from "../../utils/apiRequest"
import Container from "../../components/common/Container"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { Button } from "../../components/ui/button"
import { Link } from "react-router-dom"

function About() {
  const [data, setData] = useState({})

  const getData = async () => {
    const res = await instance.get('/aboutUs')
    setData(res.data)
    console.log(res.data);
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
          className="h-[685px] w-full"
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
      <Container>
        <div className="mt-[160px] flex items-center  justify-between gap-[29px] ">
          <div className="">
            <h1 className="w-[552px] leading-[57px] text-[48px] font-[600]">We Delivered, You Enjoy Your Order.</h1>
            <p className="w-[536px] mt-[20px] text-[16px] font-[400] text-gray-600">Ut suscipit egestas suscipit. Sed posuere pellentesque nunc, ultrices consectetur velit dapibus eu. Mauris sollicitudin dignissim diam, ac mattis eros accumsan rhoncus. Curabitur auctor bibendum nunc eget elementum.</p>
            <div className="flex items-center mt-[20px] gap-[8px]">
              <img src="/assets/images/About/about-check.svg" alt="img" />
              <p className="text-gray-600 text-[14px]" >Sed in metus pellentesque.</p>
            </div>
            <div className="flex items-center mt-[16px] gap-[8px]">
              <img src="/assets/images/About/about-check.svg" alt="img" />
              <p className="text-gray-600 text-[14px]">Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.</p>
            </div>
            <div className="flex items-center mt-[16px] gap-[8px]">
              <img src="/assets/images/About/about-check.svg" alt="img" />
              <p className="text-gray-600 text-[14px]">Maecenas ut nunc fringilla erat varius.</p>
            </div>
            <Link to={"/shop"}>
              <Button className="mt-[24px]  rounded-[43px]">Shop Now <img className="ml-[16px]" src="/assets/images/About/about-icon.svg" alt="img" /></Button>
            </Link>
          </div>
          <div className=" w-[895px] ">
            <LazyLoadImage
              delayTime={300}
              src="/assets/images/About/fruit-about-img.png"
              alt="img"
              effect="blur"
              className="w-full"
            />
          </div>
        </div>
      </Container>
      <div className="bg-gradient-to-r from-[#F2F2F2] to-[#FFF] ">
        <Container>
          <div className="pt-[80px] text-center">
            <h1 className="text-[48px] font-[600]">Our Awesome Team</h1>
            <p className="w-[640px] mx-auto text-gray-600 text-[16px]">Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi.</p>
          </div>

          <div className=" mt-[100px] mb-[100px] flex overflow-hidden gap-[24px] pr-[10px]">
            {data.cards?.map((item) => (<div key={item.id}>
              <div className="border w-[312px] h-[368px] bg-white rounded-[8px] mt-[20px] shadow-[0_20px_48px_0_rgba(0,38,3,0.08)]">
                <img src={item.linkImg} alt="" />
                <div className="pt-[16px] pl-[20px]">
                  <h3 className="text-[18px] font-[500]">{item.title}</h3>
                  <p className="text-gray-500 text-[14px]">{item.category}</p>
                </div>
              </div>
            </div>))}
          </div>
        </Container>
      </div>

    </div>


  )
}

export default About
