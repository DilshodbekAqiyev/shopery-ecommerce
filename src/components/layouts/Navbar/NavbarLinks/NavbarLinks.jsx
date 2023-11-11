import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../../../ui/sheet'
import { Fragment } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import LogoIcon from '../images/LogoIcon'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
// import { BsHandbag } from 'react-icons/bs'
import { FiPhoneCall } from 'react-icons/fi'
// import { CiSearch, CiLocationOn } from 'react-icons/ci'
// import { LuApple } from 'react-icons/lu'
// import { TbSalad, TbIceCream, TbMeat } from 'react-icons/tb'
// import { PiFishSimpleDuotone, PiCookingPot } from 'react-icons/pi'
// import { SiBuymeacoffee } from 'react-icons/si'
// import { GiCupcake, GiCakeSlice } from 'react-icons/gi'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { useEffect, useState } from 'react'
import './navbarLinks.css'

// import { useTranslation } from 'react-i18next'
// import { translationKeys } from '../../../../utils/translation/translationKeys'

const NavbarLinks = () => {
  // const { t } = useTranslation()
  const [navbarData, setNavbarData] = useState([])

  const GetData = async () => {
    const res = await axios.get('http://localhost:3000/navbar')
    setNavbarData(res.data)
  }

  useEffect(() => {
    GetData()
  }, [])
  return (
    <div className="bg-gray-50">
      <div className="max-w-[1320px] m-auto flex items-center justify-between">
        <ul className="navbarLinks">
          {navbarData?.map((nav) => {
            return (
              <Fragment key={nav.id}>
                <li className="navbarDropdown">
                  {nav.id == 1 ? (
                    <>
                      <a href="#" className="mainMenu">
                        <div className="mainMenu">
                          <AiOutlineMenu />
                          <p>{nav.name}</p>
                          <MdKeyboardArrowDown size={26} className="arrow" />
                        </div>
                      </a>
                      <div className="dropdown">
                        {nav.dropdown.map((dropMenu, _) => {
                          return (
                            <Fragment key={_}>
                              <Link to={`/${dropMenu.link}`}>
                                <p style={{ fontSize: 20 }}>{<AiOutlineHeart />}</p>
                                <p>{dropMenu.name}</p>
                              </Link>
                            </Fragment>
                          )
                        })}
                      </div>
                    </>
                  ) : nav.type == 'dropdown' ? (
                    <>
                      <Link to={`/${nav.link}`}>
                        <p>{nav.name}</p>
                        <MdKeyboardArrowDown size={26} className="arrow" />
                      </Link>
                      <div className="dropdown">
                        {nav.dropdown.map((dropMenu, _) => {
                          return (
                            <Fragment key={_}>
                              <Link to={`/${dropMenu.link}`}>{dropMenu.name}</Link>
                            </Fragment>
                          )
                        })}
                      </div>
                    </>
                  ) : (
                    <Link to={`/${nav.link}`}>{nav.name}</Link>
                  )}
                </li>
              </Fragment>
            )
          })}
        </ul>

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

        <div className="navigationTel">
          <a href="tel:2195550114">
            <FiPhoneCall />
            <p>(219) 555-0114</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default NavbarLinks
