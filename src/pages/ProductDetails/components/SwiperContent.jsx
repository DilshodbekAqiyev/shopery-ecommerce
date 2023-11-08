import PropTypes from 'prop-types'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'
import { useEffect, useState } from 'react'

function SwiperContent({ product }) {
  const { images } = product
  const [mainImg, setMainImg] = useState(product.images?.src)

  useEffect(() => {
    setMainImg(product.images?.src)
  }, [product])

  const handlePutImg = (img) => {
    img !== null ? setMainImg(img) : setMainImg(product.images?.src)
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
          {images?.otherImages?.map(({ id, src, otherImageDescription }) => {
            return (
              <div key={id} className={`w-[90px] h-[90px] cursor-pointer`} onClick={() => handlePutImg(src)}>
                <img
                  src={src}
                  alt={otherImageDescription}
                  loading="lazy"
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
      <div className="w-[556px] h-[556px] border-2">
        <img src={mainImg} alt="sliderImg" loading="lazy" className="w-full h-full" />
      </div>
    </div>
  )
}

SwiperContent.propTypes = {
  product: PropTypes.any,
}

export default SwiperContent
