import { Link } from 'react-router-dom'
import LogoIcon from '../images/LogoIcon'
import { Button } from '../../../ui/button'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsHandbag } from 'react-icons/bs'
import { CiSearch } from 'react-icons/ci'

import { useTranslation } from 'react-i18next'
import { translationKeys } from '../../../../utils/translation/translationKeys'
import { useProviderContext } from '../../../../contexts/Provider'
import { useEffect, useState } from 'react'

const NavbarMiddle = () => {
  const { wishlist, shoppingCart } = useProviderContext()
  const [totalPrice, setTotalPrice] = useState(null)
  const { t } = useTranslation()

  useEffect(() => {
    setTotalPrice(shoppingCart.reduce((acc, curVal) => {
      return acc += curVal.discountPrice * curVal.quantity
    }, 0))
  }, [shoppingCart])

  return (
    <div className="py-6">
      <div className="flex items-center justify-between max-w-[1320px] m-auto">
        <div className="">
          <Link to="/" className="cursor-pointer hover:opacity-90 transition-all inline-block">
            {<LogoIcon />}
          </Link>
        </div>
        <div className="flex items-center justify-between  ">
          <div className="flex items-center justify-between px-4 border-r-primary py-1 gap-1 border border-gray-200 rounded-l-[6px] w-[366px]">
            <CiSearch size={32} />
            <input
              type="text"
              className="bg-transparent w-full p-2 outline-none border-none text-gray-500 text-[15px]"
              placeholder={t(translationKeys['Search'])}
            />
          </div>
          <div className="">
            <Button className="rounded-l-[0px]">{t(translationKeys['Search'])}</Button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link to="wishlist" className="cursor-pointer relative">
            <AiOutlineHeart size={30} />
            <p className="flex items-center justify-center border-[1px] border-white absolute right-[-3px] top-[-5px] w-[18px] h-[18px] rounded-full bg-hardPrimary text-white text-[10px] ">
              {wishlist.length || 0}
            </p>
          </Link>
          <div className="h-6 w-[1px] bg-gray-200 "></div>
          <Link to="/shoppingCart">
            <div className="flex items-center gap-3">
              <div className="cursor-pointer relative">
                <BsHandbag size={30} />
                <p className="flex items-center justify-center border-[1px] border-white absolute right-[-3px] top-[-5px] w-[18px] h-[18px] rounded-full bg-hardPrimary text-white text-[10px] ">
                  {shoppingCart.length || 0}
                </p>
              </div>
              <div className="flex flex-col ">
                <p className="text-[11px] text-gray-700">{t(translationKeys['Shopping cart'])}:</p>
                <p className="text-[14px] text-gray-900 font-semibold">${totalPrice?.toFixed(2)}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NavbarMiddle
