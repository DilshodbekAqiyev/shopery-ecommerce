/* eslint-disable react/prop-types */
import { useState } from 'react'
import { Badge } from '../../ui/badge'
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const ProductCard = (props) => {
  const [isHovered, setIsHovered] = useState(false)

  // eslint-disable-next-line react/prop-types
  const { name, originalPrice, discountPrice, images, rating, status, statusColor, featrues } = props

  const handleHover = () => {
    setIsHovered((prev) => !prev)
  }

  const handleMouseLeave = () => {
    setIsHovered((prev) => !prev)
  }

  return (
    <div
      className={`w-[330px] h-[428.5px] bg-white shadow-lg  px-4 relative cursor-pointer transition-transform border-[2px] border-solid border-branding-[#2C742F] hover:shadow-[#00B207] hover:shadow-md ${isHovered ? "border-[#2C742F]" : ''
        } ${featrues ? 'border border-[#E6E6E6] w-1/5 h-auto' : ''}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <LazyLoadImage delayTime={300} src={images.src} alt={images.imageDescription} effect="blur" className="w-full  h-[250px] object-contain rounded-md mt-[50px]" />
      {status != '' ? <Badge className={`absolute bg-red-500 rounded-[2px] py-[3px] px-[8px] text-[14px] font-[400]  top-2 left-2 ]`}>{status}</Badge> : undefined}
      <div className={`mt-[20px] flex justify-between items-center ${featrues ? "mt-[10px]" : " "}`}>
        <div>
          <div className={`text-base font-[400] text-[16px] leading-6 text-[#2B572E] ${featrues ? "text-[14px]" : " "} ${isHovered ? 'text-[#00B207]' : ''}`}>{name}</div>
          <div className={`text-grays-gray900 text-[18px] font-[500] ${featrues ? "text-[16px]" : " "}`}>
            ${discountPrice}
            &nbsp;&nbsp;<span className="line-through text-[16px] font-[400] text-[#7A997C]">${originalPrice}</span>
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
          className={`p-3 rounded-full w-[40px] h-[40px] flex justify-center items-center ${isHovered ? 'bg-[#00B207]' : 'bg-grays-gray0.5'
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
