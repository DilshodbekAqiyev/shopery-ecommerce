import { useEffect, useState } from "react"
import { instance } from "../../utils/apiRequest"
import Container from "../../components/common/Container"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { Button } from "../../components/ui/button"
import { Link } from "react-router-dom"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from "react-icons/bi"
import { FaPinterestP } from "react-icons/fa"
import Icon from "./components/icon"

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

  const Left = () => {
    let Slider = document.querySelector("#slider")
    Slider.scrollLeft = Slider.scrollLeft + 337
  }
  const Right = () => {
    let Slider = document.querySelector("#slider")
    Slider.scrollLeft = Slider.scrollLeft - 345
  }

  const ClientSliderLeft = () => {
    let ClientSlider = document.querySelector("#client-slider")
    ClientSlider.scrollLeft = ClientSlider.scrollLeft - 440
  }
  const ClientSliderRight = () => {
    let ClientSlider = document.querySelector("#client-slider")
    ClientSlider.scrollLeft = ClientSlider.scrollLeft + 440
  }

  return (
    <>
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
                  <h2 className="text-[18px] font-[500]">Great Support 24/7</h2>
                  <p className="mt-[5px] text-[14px] text-gray-600 ">Instant access to Contact</p>
                </div>
              </div>
              <div className="flex items-center gap-[16px] mt-[24px]">
                <img src="/assets/images/About/about-icon-shop.svg" alt="" />
                <div>
                  <h2 className="text-[18px] font-[500]">100% Sucure Payment</h2>
                  <p className="mt-[5px] text-[14px] text-gray-600 ">We ensure your money is save</p>
                </div>
              </div>
              <div className="flex items-center gap-[16px]  mt-[24px]">
                <img src="/assets/images/About/about-icon-organ-food.svg" alt="" />
                <div>
                  <h2 className="text-[18px] font-[500]">100% Organic Food</h2>
                  <p className="mt-[5px] text-[14px] text-gray-600 ">100% healthy & Fresh food.</p>
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

      <div className="bg-gradient-to-b from-[#F2F2F2] to-[#FFF] ">
        <Container>
          <div className="pt-[80px] text-center">
            <h1 className="text-[48px] font-[600]">Our Awesome Team</h1>
            <p className="w-[640px] mx-auto text-gray-600 text-[16px]">Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi.</p>
          </div>
          <div className="flex gap-[20px] relative">
            <div className="border p-[13px] absolute top-[260px] left-[-70px] rounded-[50px] cursor-pointer bg-white hover:bg-[#00B207] hover:text-white" onClick={Right}><AiOutlineArrowLeft /></div>
            <div className="border p-[13px] absolute top-[255px] right-[-70px] rounded-[50px] cursor-pointer bg-white hover:bg-[#00B207] hover:text-white" onClick={Left}><AiOutlineArrowRight /></div>
          </div>
          <div id="slider" className="scroll-smooth mt-[100px] pb-[100px] flex overflow-x-scroll  scrollbar-hide gap-[24px] pr-[10px]">
            {data.cards?.map((item) => (<div key={item.id}>
              <div className="border w-[312px] h-[368px] bg-white rounded-[8px] shadow-[0_20px_48px_0_rgba(0,38,3,0.08)]">
                <img className="w-[312px] h-[280px]" src={item.linkImg} alt="" />
                <div className="pt-[16px] pl-[20px]">
                  <h3 className="text-[18px] font-[500]">{item.title}</h3>
                  <p className="text-gray-500 text-[14px]">{item.category}</p>
                </div>
                <div className="overlay relative ">
                  <div className="h-[280px] w-[311px]  content opacity-0 hover:opacity-100 cursor-pointer hover:bg-black hover:bg-opacity-40 rounded-t-lg flex items-center justify-center gap-[4px] absolute top-[-344px] left-0 hover:transition-all">
                    <div className="flex items-center gap-1">
                      <div className="hover:bg-primary text-white p-2 cursor-pointer rounded-full transition-all ease-in-out duration-500 hover:text-white">
                        <BiLogoFacebook fontSize={24} />
                      </div>
                      <div className="hover:bg-primary text-white p-2 cursor-pointer rounded-full transition-all ease-in-out duration-500 hover:text-white">
                        <BiLogoTwitter fontSize={24} />
                      </div>
                      <div className="hover:bg-primary text-white p-2 cursor-pointer rounded-full transition-all ease-in-out duration-500 hover:text-white">
                        <FaPinterestP fontSize={24} />
                      </div>
                      <div className="hover:bg-primary text-white p-2 cursor-pointer rounded-full transition-all ease-in-out duration-500 hover:text-white">
                        <BiLogoInstagram fontSize={24} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>))}
          </div>
        </Container>
      </div>

      <div className=" bg-gradient-to-t from-gray-50 to-[#F2F2F2] pt-[100px]  pb-[100px]">
        <Container>
          <div className="flex items-center justify-between ">
            <h1 className="text-[48px] font-[600]">Client Testimonail</h1>
            <div className="flex items-center gap-[12px]">
              <div className="border p-[13px] rounded-[50px] cursor-pointer bg-white hover:bg-[#00B207] hover:text-white" onClick={ClientSliderLeft}><AiOutlineArrowLeft /></div>
              <div className="border p-[13px] rounded-[50px] cursor-pointer bg-white hover:bg-[#00B207] hover:text-white" onClick={ClientSliderRight}><AiOutlineArrowRight /></div>
            </div>
          </div>
          <div id="client-slider" className="scroll-smooth mt-[50px] flex gap-[24px] overflow-x-scroll  scrollbar-hide">
            {data.client?.map((item) => (
              <div key={item.id}>
                <div className="w-[420px] h-[250px] p-[24px] px-[24px] rounded-[8px] bg-white shadow-[0_10px_20px_0_rgba(0,0,0,0.01)]">
                  <img src={item.icon} alt="icon" />
                  <p className="w-[376px] text-[14px] my-[16px] text-gray-700">{item.title}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[12px]">
                      <img src={item.linkImg} alt="img" className="cursor-pointer " />
                      <div>
                        <h1 className="text-[16px] font-[500]">{item.user}</h1>
                        <p className="text-[14px] text-gray-400">{item.category}</p>
                      </div>
                    </div>
                    <div className="flex">
                      {Array(5)
                        .fill(undefined)
                        .map((_, index) => (
                          <img key={index} src="/assets/images/About/star-img.svg" alt="Star" />
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <Container>
        <div className="py-[80px]">
          <a href="#">
              <Icon></Icon>
          </a>
        </div>
      </Container>

    </>
  )
}

export default About
