import { FaChevronUp, FaChevronDown } from 'react-icons/fa'
import { ProductSliderImgData } from '../__mock__/detailsData'
import { useState } from 'react'
import mainBigImg from '/assets/images/products/productSliderImg.png'

function SwiperContent() {
  const [mainImg, setMainImg] = useState(mainBigImg)

  const handlePutImg = (img) => {
    img !== null ? setMainImg(img) : setMainImg(mainBigImg)
  }

  const sliderTop = () => {
    let slider = document.querySelector('#slider')
    slider.scrollTop = slider.scrollTop - 105
  }

  const sliderBottom = () => {
    let slider = document.querySelector('#slider')
    slider.scrollTop = slider.scrollTop + 105
  }

  return (
    <div className="flex gap-3">
      <div className="flex flex-col items-center gap-14">
        <FaChevronUp
          size={25}
          onClick={sliderTop}
          className="cursor-pointer transition-all ease-in-out duration-300 hover:text-primary text-gray-400"
        />
        <div
          className="flex flex-col items-start gap-3 h-[400px] overflow-auto scroll-smooth transition-all ease-in-out duration-300 scrollbar-hide"
          id="slider"
        >
          {ProductSliderImgData.map(({ id, img }) => {
            return (
              <div key={id} className={`w-[90px] h-[90px] cursor-pointer`} onClick={() => handlePutImg(img)}>
                <img
                  src={img}
                  alt="SliderImg"
                  className="w-full h-full object-cover hover:scale-105 ease-in-out duration-300 hover:shadow-md"
                />
              </div>
            )
          })}
        </div>
        <FaChevronDown
          size={25}
          onClick={sliderBottom}
          className="cursor-pointer transition-all ease-in-out duration-300 hover:text-primary text-gray-400"
        />
      </div>
      <div className="w-[556px] h-[556px]">
        <img src={mainImg} alt="sliderImg" className="w-full h-full" />
      </div>
    </div>
  )
}

export default SwiperContent
