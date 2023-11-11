import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../../../ui/sheet'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import LogoIcon from '../images/LogoIcon'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiPhoneCall } from 'react-icons/fi'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { navbarData } from '../__mock__/navbarData'
import './navbarLinks.css'

// import { useTranslation } from 'react-i18next'
// import { translationKeys } from '../../../../utils/translation/translationKeys'

const NavbarLinks = () => {
  // const { t } = useTranslation()

  return (
    <div className="bg-gray-50">
      <div className="max-w-[1320px] m-auto">
        <div className="w-full flex items-center justify-between">
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
                                  <p style={{ fontSize: 20 }}>{dropMenu.image}</p>
                                  <p>{dropMenu.name}</p>
                                </Link>
                              </Fragment>
                            )
                          })}
                        </div>
                      </>
                    ) : nav.type == 'dropdown' ? (
                      <>
                        <Link to={`/${nav.link}`} id="menus">
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
                      <Link to={`/${nav.link}`} id="menus2">
                        {nav.name}
                      </Link>
                    )}
                  </li>
                </Fragment>
              )
            })}
          </ul>

          <Sheet className="hidden" id="sheet">
            <SheetTrigger className="bg-white rounded hidden" id="sheet">
              <AiOutlineMenu size={20} />
            </SheetTrigger>
            <SheetContent className={'w-3/4'}>
              <SheetHeader>
                <SheetTitle className="flex items-center justify-center py-8">
                  <Link to="/">
                    <LogoIcon />
                  </Link>
                </SheetTitle>
                <SheetDescription className="flex flex-col mx-auto items-center gap-6 text-[20px] font-semibold">
                  {navbarData?.map((nav) => {
                    return nav.id > 1 ? (
                      <>
                        <Link to={`/${nav.link}`} className="hover:text-primary transition-all">
                          {nav.name}
                        </Link>
                      </>
                    ) : (
                      <></>
                    )
                  })}
                </SheetDescription>
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
    </div>
  )
}

export default NavbarLinks
