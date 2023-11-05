import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select'

import { useTranslation } from 'react-i18next'
import { translationKeys } from '../../../utils/translation/translationKeys'

import LocationIcon from '../../../../public/assets/icons/navbar-icons/LocationIcon'
import { Link } from 'react-router-dom'
import LogoIcon from '../../../../public/assets/images/navbar/LogoIcon'
import SearchIcon from '../../../../public/assets/images/navbar/SearchIcon'
import { Input } from '../../ui/input'
import { Button } from '../../ui/button'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsHandbag } from 'react-icons/bs'

const Navbar = () => {
  const { t, i18n } = useTranslation()
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
    localStorage.setItem('lang', lang)
  }

  return (
    <div className="flex flex-col max-w-full">
      <div className="flex items-center justify-between container  bg-gray-800 py-3 text-gray-600 text-xs font-normal">
        <div>
          <a href="#1" className="cursor-pointer hover:text-gray-200 flex items-center gap-2 transition-all">
            <LocationIcon />
            <p>{t(translationKeys['Store Location: Lincoln- 344, Illinois, Chicago, USA'])}</p>
          </a>
        </div>
        <div className="flex items-center gap-5">
          <Select onValueChange={(e) => changeLanguage(e)}>
            <SelectTrigger className="w-max p-0 text-gray-600 font-normal bg-gray-800 text-xs hover:text-gray-200 outline-none border-none gap-[6px] flex items-center justify-center">
              <SelectValue placeholder="Eng" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en" className="cursor-pointer text-gray-600 font-normal text-xs">
                Eng
              </SelectItem>
              <SelectItem value="ru" className="cursor-pointer text-gray-600 font-normal text-xs">
                Рус
              </SelectItem>
              <SelectItem value="uz" className="cursor-pointer text-gray-600 font-normal text-xs">
                Uzb
              </SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-max p-0 bg-gray-800 text-gray-600 font-normal text-xs hover:text-gray-200 outline-none border-none gap-[6px] flex items-center justify-center">
              <SelectValue placeholder="USD" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="usd" className="cursor-pointer text-gray-600 font-normal text-xs">
                USD
              </SelectItem>
              <SelectItem value="rubl" className="cursor-pointer text-gray-600 font-normal text-xs">
                РУБЛЬ
              </SelectItem>
              <SelectItem value="som" className="cursor-pointer text-gray-600 font-normal text-xs">
                SO'M
              </SelectItem>
            </SelectContent>
          </Select>
          <div className="w-[1px] h-[15px] bg-gray-100"></div>
          <div className="flex items-center gap-1 w-full">
            <Link to="/sign-in" className="hover:text-gray-200">
              {t(translationKeys['Sign In'])}
            </Link>
            <p>/</p>
            <Link to="/sign-up" className="hover:text-gray-200">
              {t(translationKeys['Sign Up'])}
            </Link>
          </div>
        </div>
      </div>
      <div className="flex container items-center justify-between py-6">
        <div className="">
          <Link to="/">{<LogoIcon />}</Link>
        </div>
        <div className="">
          <SearchIcon />
          <Input type="text" placeholder={t(translationKeys['Search'])} className="outline-none border-none" />
          <Button className="border-r-4">{t(translationKeys['Search'])}</Button>
        </div>
        <div className="">
          <div className="">
            <AiOutlineHeart />
          </div>
          <div className=""></div>
          <div className="">
            <div className="">
              <BsHandbag />
            </div>
            <div className="">
              <p>{t(translationKeys['Shopping cart'])}:</p>
              <p>$57.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
