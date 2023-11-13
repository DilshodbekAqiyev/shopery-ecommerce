import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { PiHandbagBold } from 'react-icons/pi'
import { AiOutlineHeart } from 'react-icons/ai'
import { Button } from '../../../components/ui/button'
import SwiperContent from './SwiperContent'
import { Badge } from '../../../components/ui/badge'
import SocialMediaIcons from '../../../components/common/SocialMediaIcons'
import { AddToWishlist } from '../../../utils/api/AddToWishlist'
import { useProviderContext } from '../../../contexts/Provider'
import { getUser } from '../../../utils/utils'
import { toggleCart } from '../../../utils/api/Cart'

function ModalDetails({ product }) {
  const {
    name,
    status,
    available,
    rating,
    reviews,
    originalPrice,
    brand,
    discountPercentage,
    tag,
    category,
    discountPrice,
    littleDesCription,
  } = product
  const { wishlist, setWishlist, shoppingCart, setShoppingCart } = useProviderContext()

  const [logged, setLogged] = useState(false)

  useEffect(() => {
    (async () => {
      const res = await getUser()
      setLogged(res !== null)
    })()
  }, [])

  let tags = tag?.reduce((acc, curr) => {
    return (curr += ' ' + acc)
  })

  const handleShopClick = (e) => {
    e.stopPropagation()
    if (logged) {
      toggleCart({ ...product, quantity: 1 })
      const el = shoppingCart.find((cart) => cart.id === product.id)
      if (!el) {
        setShoppingCart(prev => [...prev, { ...product, quantity: 1 }])
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
      AddToWishlist(product)
      const el = wishlist.find((wishitem) => wishitem.id === product.id)
      if (!el) {
        setWishlist(prev => [...prev, product])
      } else {
        setWishlist(wishlist.filter((wishitem) => wishitem.id !== el.id))
      }
    } else {
      alert("Please Log In")
    }
  }

  return (
    <>
      <div className="flex items-start gap-6 mt-[34px] mb-1">
        <SwiperContent product={product} />
        <div className="w-full flex flex-col items-start gap-6">
          <div className="flex flex-col items-start w-full border-b-2">
            <div className="flex items-center gap-2 mb-3">
              <h1 className="text-heading05 font-[600]">{name}</h1>
              {status ? (
                <Badge
                  className={`bg-softPrimary text-hardPrimary rounded-sm py-[2px] px-2 font-[400] hover:bg-softPrimary`}
                >
                  {status}
                </Badge>
              ) : (
                <Badge
                  className={` bg-softPrimary text-hardPrimary rounded-sm py-[2px] px-2 font-[400] hover:bg-softPrimary`}
                >
                  In Stock
                </Badge>
              )}
            </div>
            <div className="text-gray-500 flex items-center gap-3">
              <h1 className="flex items-center">
                {Array(5)
                  .fill(undefined)
                  .map((_, index) => (
                    <img key={index} src={`/assets/icons/${index < rating ? 'star' : 'star-fill'}.svg`} alt="Star" />
                  ))}
                &nbsp;{reviews?.length}&nbsp;review{reviews?.length <= 1 ? '' : 's'}
              </h1>
              <span>•</span>
              <div className="flex items-center gap-1">
                <h4 className="text-black font-[500]">SKU:</h4>
                <span>{available}</span>
              </div>
            </div>
            <div className="flex w-full items-center gap-1 py-5">
              <h2 className="text-grays-gray300 text-[20px] line-through">{`$${originalPrice}`}</h2>
              <h2 className="text-hardPrimary font-[500] text-[24px] mr-3">{`$${discountPrice}`}</h2>
              <Badge className={'bg-red-200 text-red-600'}>{`${discountPercentage}% Off`}</Badge>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-[10px]">
                <h3>Brand:</h3>
                <img src={brand} alt="BrandIcon" loading="lazy" />
              </div>
              <div className="flex items-center gap-[10px]">
                <h2>Share Item:</h2>
                <SocialMediaIcons />
              </div>
            </div>
            <p className="text-gray-500 mt-4">{littleDesCription}</p>
          </div>
          <div className="flex items-center justify-between w-full gap-3 border-t-2 border-b-2 py-5">
            {/* <div className="flex items-center">
              <Button
                className="rounded-full p-0 w-10 h-10 mr-[-45px] z-10"
                variant="ghost"
                onClick={() => handleMinus()}
              >
                -
              </Button>
              <input
                type="number"
                value={product.quantity}
                className="rounded-full w-36 px-12 py-3 border-2 focus:outline-none"
              />
              <Button
                className="rounded-full p-0 w-10 h-10 z-10 ml-[-45px]"
                variant="ghost"
                onClick={() => handlePlus()}
              >
                +
              </Button>
            </div> */}
            <Button onClick={handleShopClick} variant="fill" className="flex items-center w-full gap-3">
              <p>Add to Cart</p> <PiHandbagBold size={17} />
            </Button>
            <div onClick={handleLikeClick}
              className="p-4 w-fit bg-[#E9F8EA] rounded-full cursor-pointer">
              {wishlist.find((wishitem) => wishitem.id === product.id) ? (
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
                <AiOutlineHeart size={20} className="text-hardPrimary" />
              )}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <h3 className="font-[600]">Category:</h3>
              <p className="text-gray-500">{category}</p>
            </div>
            <div className="flex items-center gap-1">
              <h3 className="font-[600]">Tag:</h3>
              <p className="text-gray-500">{tags}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

ModalDetails.propTypes = {
  product: PropTypes.any,
}

export default ModalDetails
