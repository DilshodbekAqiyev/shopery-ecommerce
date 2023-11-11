import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../ui/select'

import { CiLocationOn } from 'react-icons/ci'
import { Link } from 'react-router-dom'

import { useTranslation } from 'react-i18next'
import { translationKeys } from '../../../../utils/translation/translationKeys'

const NavbarTop = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
    localStorage.setItem('lang', lang)
  }
  return (
    <div className="bg-gray-800 py-3 text-gray-300 text-xs font-normal">
      <div className="flex items-center justify-between max-w-[1320px] m-auto">
        <div>
          <a href="#1" className="cursor-pointer hover:text-primary flex items-center gap-2 transition-all">
            <CiLocationOn size={24} />
            <p>{t(translationKeys['Store Location: Lincoln- 344, Illinois, Chicago, USA'])}</p>
          </a>
        </div>
        <div className="flex items-center gap-5">
          <Select onValueChange={(e) => changeLanguage(e)}>
            <SelectTrigger className="focus:ring-offset-0 h-full rounded-none placeholder:text-muted-foreground focus:outline-none focus:ring-0 disabled:opacity-100 w-max p-0 text-gray-300 font-normal bg-gray-800 text-xs hover:text-primary outline-none border-input border-none gap-[6px] flex items-center justify-center">
              <SelectValue placeholder="Eng" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en" className="cursor-pointer text-gray-300 font-normal text-xs">
                Eng
              </SelectItem>
              <SelectItem value="ru" className="cursor-pointer text-gray-300 font-normal text-xs">
                Рус
              </SelectItem>
              <SelectItem value="uz" className="cursor-pointer text-gray-300 font-normal text-xs">
                Uzb
              </SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="focus:ring-offset-0 h-full rounded-none placeholder:text-muted-foreground focus:outline-none focus:ring-0 disabled:opacity-100 w-max p-0 text-gray-300 font-normal bg-gray-800 text-xs hover:text-primary outline-none border-input border-none gap-[6px] flex items-center justify-center">
              <SelectValue placeholder="USD" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="usd" className="cursor-pointer text-gray-300 font-normal text-xs">
                USD
              </SelectItem>
              <SelectItem value="rubl" className="cursor-pointer text-gray-300 font-normal text-xs">
                РУБЛЬ
              </SelectItem>
              <SelectItem value="som" className="cursor-pointer text-gray-300 font-normal text-xs">
                SUM
              </SelectItem>
            </SelectContent>
          </Select>
          <div className="w-[1px] h-[15px] bg-gray-100"></div>
          <div className="flex items-center gap-1 w-full">
            <Link to="/sign-in" className="hover:text-primary">
              {t(translationKeys['Sign In'])}
            </Link>
            <p>/</p>
            <Link to="/sign-up" className="hover:text-primary">
              {t(translationKeys['Sign Up'])}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavbarTop
