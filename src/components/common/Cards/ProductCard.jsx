/* eslint-disable react/prop-types */
import { useState } from 'react'
import { Badge } from '../../ui/badge'

const ProductCard = (props) => {
  const [isHovered, setIsHovered] = useState(false)

  // eslint-disable-next-line react/prop-types
  const { name, originalPrice, discountPrice, images, rating, status, statusColor } = props

  const handleHover = () => {
    setIsHovered((prev) => !prev)
  }

  const handleMouseLeave = () => {
    setIsHovered((prev) => !prev)
  }

  return (
    <div
      className={`w-[312px] bg-white mt-[24px] shadow-lg rounded-[8px] p-4 relative cursor-pointer transition-transform border-[3px] border-solid border-branding-[#2C742F] hover:shadow-[#00B207] hover:shadow-md ${
        isHovered ? 'hover:scale-105' : ''
      }`}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <img src={images.src} alt={images.imageDescription} className="w-full object-cover rounded-md" />
      {status != '' ? <Badge className={`absolute top-2 left-2 bg-[${statusColor}]`}>{status}</Badge> : undefined}
      <div className="mt-4 flex justify-between items-center">
        <div>
          <div className={`text-base font-semibold leading-6 ${isHovered ? 'text-[#00B207]' : ''}`}>{name}</div>
          <div className="text-grays-gray900 text-xl font-semibold">
            ${discountPrice}
            &nbsp;&nbsp; $<span className="line-through">{originalPrice}</span>
          </div>
          <div className="flex items-center">
            {Array(5)
              .fill(undefined)
              .map((_, index) => (
                <img key={index} src={`/assets/icons/${index < rating ? 'star' : 'star-fill'}.svg`} alt="Star" />
              ))}
          </div>
        </div>
        <div
          className={`p-3 rounded-full w-[40px] h-[40px] flex justify-center items-center ${
            isHovered ? 'bg-[#00B207]' : 'bg-grays-gray0.5'
          }`}
        >
          <img
            src={`/assets/icons/${isHovered ? 'bag-white' : 'bag'}.svg`}
            alt="bag icon"
            loading="lazy"
            className="w-[20px] h-[20px]"
          />
        </div>
      </div>
      {isHovered && (
        <div className="absolute top-3 right-3 z-10 rounded-full  transition-transform">
          <div className="bg-white rounded-full p-2 shadow-md hover:scale-110 cursor-pointer">
            <img src="/assets/icons/heart.svg" alt="heart image" loading="lazy" className="w-[20px] h-[20px]" />
          </div>
          <div className="bg-white rounded-full p-2 mt-3 shadow-md hover:scale-110 cursor-pointer">
            <img src="/assets/icons/eye.svg" alt="eye image" loading="lazy" className="w-[20px] h-[20px]" />
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductCard
