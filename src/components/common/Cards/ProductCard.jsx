import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { Badge } from '../../ui/badge'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { useNavigate } from 'react-router-dom'
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '../../ui/dialog'
import ModalDetails from '../../../pages/ProductDetails/components/ModalDetails'
import { instance } from '../../../utils/apiRequest'
import bag from '../../../../public/assets/icons/bag.svg'
import bag_white from '../../../../public/assets/icons/bag-white.svg'
import { AddToWishlist } from '../../../utils/api/AddToWishlist'
import { toggleCart } from '../../../utils/api/Cart'
import { getUser } from '../../../utils/utils'
import { useProviderContext } from '../../../contexts/Provider'

const ProductCard = (props) => {
  const { wishlist, setWishlist, shoppingCart, setShoppingCart } = useProviderContext()
  const [isHovered, setIsHovered] = useState(false)
  const [foundProduct, setFoundProduct] = useState({})
  const [logged, setLogged] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    (async () => {
      const res = await getUser()
      setLogged(res !== null)
    })()
  }, [])

  const { id, name, originalPrice, discountPrice, images, rating, status, featrues } = props

  const handleHover = () => {
    setIsHovered((prev) => !prev)
  }

  const handleMouseLeave = () => {
    setIsHovered((prev) => !prev)
  }

  const handleShopClick = (e) => {
    e.stopPropagation()
    if (logged) {
      toggleCart({ ...props, quantity: 1 })
      const el = shoppingCart.find((cart) => cart.id === props.id)
      if (!el) {
        setShoppingCart(prev => [...prev, { ...props, quantity: 1 }])
        alert('Product added to Cart')
      } else {
        setShoppingCart(shoppingCart.filter((cart) => cart.id !== el.id))
      }
    } else {
      alert("Please Log In")
    }
  }

  const handleLikeClick = (e) => {
    e.stopPropagation()
    if (logged) {
      AddToWishlist(props)
      const el = wishlist.find((wishitem) => wishitem.id === props.id)
      if (!el) {
        setWishlist(prev => [...prev, props])
      } else {
        setWishlist(wishlist.filter((wishitem) => wishitem.id !== el.id))
      }
    } else {
      alert("Please Log In")
    }
  }

  useEffect(() => {
    // eslint-disable-next-line no-extra-semi
    ; (async () => {
      const response = await instance.get(`products/${id}`)
      setFoundProduct(response.data)
    })()
  }, [id])

  return (
    <>
      <div
        className={`w-[300px] bg-white shadow-lg  p-4 relative cursor-pointer transition-transform border-[2px] border-solid border-branding-[#2C742F] hover:shadow-[#00B207] hover:shadow-md ${isHovered ? 'border-[#2C742F]' : ''
          } ${featrues ? 'border border-[#E6E6E6] w-1/5 h-auto' : ''}`}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
        onClick={() => navigate('/shop/' + id)}
      >
        <LazyLoadImage
          delayTime={300}
          src={images.src}
          alt={images.imageDescription}
          effect="blur"
          className="w-full  h-[250px] object-contain rounded-md mt-[50px]"
        />
        {status != '' ? (
          <Badge
            className={`absolute bg-red-500 rounded-[2px] py-[3px] px-[8px] text-[14px] font-[400]  top-2 left-2 ]`}
          >
            {status}
          </Badge>
        ) : undefined}
        <div className={`mt-[20px] flex justify-between items-center ${featrues ? 'mt-[10px]' : ' '}`}>
          <div>
            <div
              className={`text-base font-[400] text-[16px] leading-6 text-[#2B572E] ${featrues ? 'text-[14px]' : ' '} ${isHovered ? 'text-[#00B207]' : ''
                }`}
            >
              {name}
            </div>
            <div className={`text-grays-gray900 text-[18px] font-[500] ${featrues ? 'text-[16px]' : ' '}`}>
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
            onClick={handleShopClick}
          >
            <img src={isHovered ? bag_white : bag} alt="bag icon" loading="lazy" className="w-[20px] h-[20px]" />
          </div>
        </div>
        {isHovered ? (
          <div className="absolute top-3 right-3 z-10 rounded-full  transition-transform">
            <div
              className="bg-white rounded-full p-2 shadow-md hover:scale-110 cursor-pointer"
              onClick={handleLikeClick}
            >
              {wishlist.find((wishitem) => wishitem.id === props.id) ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="Heart">
                    <path
                      id="Vector"
                      d="M9.9996 17.5451C-6.66672 8.33333 4.99993 -1.66667 9.9996 4.65671C14.9999 -1.66667 26.6666 8.33333 9.9996 17.5451Z"
                      fill="red"
                    />
                  </g>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="Heart">
                    <path
                      id="Vector"
                      d="M9.9996 17.5451C-6.66672 8.33333 4.99993 -1.66667 9.9996 4.65671C14.9999 -1.66667 26.6666 8.33333 9.9996 17.5451Z"
                      stroke="#1A1A1A"
                      strokeWidth="1.5"
                    />
                  </g>
                </svg>
              )}
            </div>
            <Dialog
              onClick={(e) => {
                e.stopPropagation()
                setIsHovered(false)
              }}
            >
              <DialogTrigger asChild>
                <div
                  className="bg-white rounded-full p-2 mt-3 shadow-md hover:scale-110 cursor-pointer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img src="/assets/icons/eye.svg" alt="eye image" loading="lazy" className="w-[20px] h-[20px]" />
                </div>
              </DialogTrigger>
              <DialogContent
                onClick={(e) => {
                  e.stopPropagation()
                  setIsHovered(false)
                }}
                className="sm:max-w-[1200px]"
              >
                <DialogHeader className={'w-full h-full'}>
                  <ModalDetails product={foundProduct} />
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        ) : null}
      </div>
    </>
  )
}

export default ProductCard

ProductCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  originalPrice: PropTypes.number,
  discountPrice: PropTypes.number,
  images: PropTypes.any,
  rating: PropTypes.number,
  status: PropTypes.string,
  statusColor: PropTypes.string,
  featrues: PropTypes.bool,
  AddToWishlist: PropTypes.func,
}
