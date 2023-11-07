import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../../ui/navigation-menu'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../../ui/sheet'

import { useTranslation } from 'react-i18next'
import { translationKeys } from '../../../utils/translation/translationKeys'

import { Link } from 'react-router-dom'
import LogoIcon from './images/LogoIcon'
import { Button } from '../../ui/button'
import { AiOutlineHeart, AiOutlineMenu, AiOutlinePlus } from 'react-icons/ai'
import { BsHandbag } from 'react-icons/bs'
import { FiPhoneCall } from 'react-icons/fi'
import { CiSearch, CiLocationOn } from 'react-icons/ci'
import { LuApple } from 'react-icons/lu'
import { TbSalad, TbIceCream, TbMeat } from 'react-icons/tb'
import { PiFishSimpleDuotone, PiCookingPot } from 'react-icons/pi'
import { SiBuymeacoffee } from 'react-icons/si'
import { GiCupcake, GiCakeSlice } from 'react-icons/gi'

const Navbar = () => {
  const { t, i18n } = useTranslation()
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
    localStorage.setItem('lang', lang)
  }

  return (
    <div className="flex flex-col max-w-full">
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
                <SelectItem value="en" selectValue className="cursor-pointer text-gray-300 font-normal text-xs">
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
                  SO'M
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
      <div className="py-6">
        <div className="flex items-center justify-between max-w-[1320px] m-auto">
          <div className="">
            <Link to="/" className="cursor-pointer hover:opacity-90 transition-all active:scale-95 inline-block">
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
            <div className="cursor-pointer relative">
              <AiOutlineHeart size={30} />
              <p className="flex items-center justify-center border-[1px] border-white absolute right-[-3px] top-[-5px] w-[18px] h-[18px] rounded-full bg-hardPrimary text-white text-[10px] ">
                0
              </p>
            </div>
            <div className="h-6 w-[1px] bg-gray-200 "></div>
            <div className="flex items-center gap-3">
              <div className="cursor-pointer relative">
                <BsHandbag size={30} />
                <p className="flex items-center justify-center border-[1px] border-white absolute right-[-3px] top-[-5px] w-[18px] h-[18px] rounded-full bg-hardPrimary text-white text-[10px] ">
                  0
                </p>
              </div>
              <div className="flex flex-col ">
                <p className="text-[11px] text-gray-700">{t(translationKeys['Shopping cart'])}:</p>
                <p className="text-[14px] text-gray-900 font-semibold">$57.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50">
        <div className="max-w-[1320px] m-auto flex items-center justify-between">
          <NavigationMenu className="">
            <NavigationMenuList className="gap-5">
              <NavigationMenuItem className="">
                <NavigationMenuTrigger className="rounded-none disabled:opacity-100 text-white bg-primary inline-flex h-full gap-2 w-max px-6 py-4 items-center justify-center hover:bg-primary hover:text-white focus:bg-primary focus:text-white data-[state=open]:bg-gray-900">
                  <AiOutlineMenu size={20} />
                  All Categories
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <Link to="/shop">
                    <NavigationMenuLink className="flex items-center gap-3 px-5 py-3 w-[240px] cursor-pointer hover:bg-primary hover:text-white">
                      <LuApple size={20} />
                      <p>Fresh Fruit</p>
                    </NavigationMenuLink>
                  </Link>
                  <Link to="/shop">
                    <NavigationMenuLink className="flex items-center gap-3 px-5 py-3 w-[240px] cursor-pointer hover:bg-primary hover:text-white">
                      <TbSalad size={20} />
                      <p>Vegetables</p>
                    </NavigationMenuLink>
                  </Link>
                  <Link to="/shop">
                    <NavigationMenuLink className="flex items-center gap-3 px-5 py-3 w-[240px] cursor-pointer hover:bg-primary hover:text-white">
                      <PiFishSimpleDuotone size={20} />
                      <p>River Fish</p>
                    </NavigationMenuLink>
                  </Link>
                  <Link to="/shop">
                    <NavigationMenuLink className="flex items-center gap-3 px-5 py-3 w-[240px] cursor-pointer hover:bg-primary hover:text-white">
                      <TbMeat size={20} />
                      <p>Chicken & Meat</p>
                    </NavigationMenuLink>
                  </Link>
                  <Link to="/shop">
                    <NavigationMenuLink className="flex items-center gap-3 px-5 py-3 w-[240px] cursor-pointer hover:bg-primary hover:text-white">
                      <SiBuymeacoffee size={20} />
                      <p>Drink & Water</p>
                    </NavigationMenuLink>
                  </Link>
                  <Link to="/shop">
                    <NavigationMenuLink className="flex items-center gap-3 px-5 py-3 w-[240px] cursor-pointer hover:bg-primary hover:text-white">
                      <TbIceCream size={20} />
                      <p>Yogurt & Ice Cream</p>
                    </NavigationMenuLink>
                  </Link>
                  <Link to="/shop">
                    <NavigationMenuLink className="flex items-center gap-3 px-5 py-3 w-[240px] cursor-pointer hover:bg-primary hover:text-white">
                      <GiCakeSlice />
                      <p>Cake & Bread</p>
                    </NavigationMenuLink>
                  </Link>
                  <Link to="/shop">
                    <NavigationMenuLink className="flex items-center gap-3 px-5 py-3 w-[240px] cursor-pointer hover:bg-primary hover:text-white">
                      <GiCupcake size={20} />
                      <p>Butter & Cream</p>
                    </NavigationMenuLink>
                  </Link>
                  <Link to="/shop">
                    <NavigationMenuLink className="flex items-center gap-3 px-5 py-3 w-[240px] cursor-pointer hover:bg-primary hover:text-white">
                      <PiCookingPot size={20} />
                      <p>Cooking</p>
                    </NavigationMenuLink>
                  </Link>
                  <Link to="/shop">
                    <NavigationMenuLink className="flex items-center gap-3 px-5 py-3 w-[240px] cursor-pointer hover:bg-primary hover:text-white">
                      <AiOutlinePlus />
                      <p>View all Category</p>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem className="max-md:hidden relative">
                <NavigationMenuTrigger className="bg-transparent hover:text-primary p-0 flex items-center gap-2 group h-full rounded-none hover:bg-transparent data-[state=open]:bg-transparent">
                  <Link to="/">Home</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex flex-col">
                  <NavigationMenuLink className="px-5 py-3 w-[240px] cursor-pointer hover:bg-primary hover:text-white">
                    Link 1
                  </NavigationMenuLink>
                  <NavigationMenuLink className="px-5 py-3 w-[240px] cursor-pointer hover:bg-primary hover:text-white">
                    Link 2
                  </NavigationMenuLink>
                  <NavigationMenuLink className="px-5 py-3 w-[240px] cursor-pointer hover:bg-primary hover:text-white">
                    Link 3
                  </NavigationMenuLink>
                  <NavigationMenuLink className="px-5 py-3 w-[240px] cursor-pointer hover:bg-primary hover:text-white">
                    Link 4
                  </NavigationMenuLink>
                  <NavigationMenuLink className="px-5 py-3 w-[240px] cursor-pointer hover:bg-primary hover:text-white">
                    Link 5
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem className="max-md:hidden relative">
                <NavigationMenuTrigger className="bg-transparent hover:text-primary p-0 flex items-center gap-2 group h-full rounded-none hover:bg-transparent data-[state=open]:bg-transparent">
                  <Link to="/shop">Shop</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex flex-col">
                  <NavigationMenuLink className="px-5 py-3 w-[240px] cursor-pointer hover:bg-primary hover:text-white">
                    Link 1
                  </NavigationMenuLink>
                  <NavigationMenuLink className="px-5 py-3 w-[240px] cursor-pointer hover:bg-primary hover:text-white">
                    Link 2
                  </NavigationMenuLink>
                  <NavigationMenuLink className="px-5 py-3 w-[240px] cursor-pointer hover:bg-primary hover:text-white">
                    Link 3
                  </NavigationMenuLink>
                  <NavigationMenuLink className="px-5 py-3 w-[240px] cursor-pointer hover:bg-primary hover:text-white">
                    Link 4
                  </NavigationMenuLink>
                  <NavigationMenuLink className="px-5 py-3 w-[240px] cursor-pointer hover:bg-primary hover:text-white">
                    Link 5
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem className="max-md:hidden relative">
                <NavigationMenuTrigger className="bg-transparent hover:text-primary p-0 flex items-center gap-2 group h-full rounded-none hover:bg-transparent data-[state=open]:bg-transparent">
                  <Link to="/products">Pages</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex flex-col">
                  <NavigationMenuLink className="px-5 py-3 w-[240px] cursor-pointer hover:bg-primary hover:text-white">
                    Link 1
                  </NavigationMenuLink>
                  <NavigationMenuLink className="px-5 py-3 w-[240px] cursor-pointer hover:bg-primary hover:text-white">
                    Link 2
                  </NavigationMenuLink>
                  <NavigationMenuLink className="px-5 py-3 w-[240px] cursor-pointer hover:bg-primary hover:text-white">
                    Link 3
                  </NavigationMenuLink>
                  <NavigationMenuLink className="px-5 py-3 w-[240px] cursor-pointer hover:bg-primary hover:text-white">
                    Link 4
                  </NavigationMenuLink>
                  <NavigationMenuLink className="px-5 py-3 w-[240px] cursor-pointer hover:bg-primary hover:text-white">
                    Link 5
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem className="max-md:hidden relative">
                <NavigationMenuTrigger className="bg-transparent hover:text-primary p-0 flex items-center gap-2 group h-full rounded-none hover:bg-transparent data-[state=open]:bg-transparent">
                  <Link to="/blog">Blog</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex flex-col">
                  <NavigationMenuLink className="px-5 py-3 w-[240px] cursor-pointer hover:bg-primary hover:text-white">
                    Link 1
                  </NavigationMenuLink>
                  <NavigationMenuLink className="px-5 py-3 w-[240px] cursor-pointer hover:bg-primary hover:text-white">
                    Link 2
                  </NavigationMenuLink>
                  <NavigationMenuLink className="px-5 py-3 w-[240px] cursor-pointer hover:bg-primary hover:text-white">
                    Link 3
                  </NavigationMenuLink>
                  <NavigationMenuLink className="px-5 py-3 w-[240px] cursor-pointer hover:bg-primary hover:text-white">
                    Link 4
                  </NavigationMenuLink>
                  <NavigationMenuLink className="px-5 py-3 w-[240px] cursor-pointer hover:bg-primary hover:text-white">
                    Link 5
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem className="max-md:hidden h-full bg-transparent cursor-pointer hover:text-primary p-0">
                <Link to="/about">About Us</Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="max-md:hidden h-full bg-transparent cursor-pointer hover:text-primary p-0">
                <Link to="/contact">Contact Us</Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Sheet>
            <SheetTrigger className="bg-white md:hidden p-3 rounded">
              <AiOutlineMenu size={20} />
            </SheetTrigger>
            <SheetContent className={'w-3/4'}>
              <SheetHeader>
                <SheetTitle className="flex items-center justify-center">
                  <LogoIcon />
                </SheetTitle>
                <SheetDescription className="flex flex-col mx-auto items-center"></SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>

          <div className="max-md-[900px]:hidden">
            <a href="tel:2195550114" className="flex items-center gap-2">
              <FiPhoneCall size={20} />
              <p>(219) 555-0114</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
