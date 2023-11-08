import DashboardIcon from '../icons/DashboardIcon'
import OrderIcon from '../icons/OrderIcon'
import WishlistIcon from '../icons/WishlistIcon'
import SettingsIcon from '../icons/SettingsIcon'
import ShoppingCartIcon from './../icons/ShoppingCartIcon'
import LogOutIcon from './../icons/LogOutIcon'
import { useState } from 'react'
import { Link } from 'react-router-dom'
function Navigation() {
  const [isHovered, setIsHovered] = useState(false)

  const handleHover = () => {
    setIsHovered((prev) => !prev)
  }

  const handleMouseLeave = () => {
    setIsHovered((prev) => !prev)
  }

  return (
    <div className=" border-solid border-2 border-gray100 rounded-[10px] mt-10 h-[440px] w-[312px] ">
      <h3 className="mb-[16px]  ml-[20px] mt-[25px] text-[20px] font-semibold">Navigation</h3>

      <Link to="">
        <div
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
          className="transition-all cursor-pointer bg-white hover:bg-[#EDF2EE]  border-l-2 border-l-white hover:border-l-4 hover:border-l-lime-600 py-[16px] flex  items-center gap-[10px] "
        >
          <div className="ml-[20px]">
            <DashboardIcon isHovered={isHovered}></DashboardIcon>
          </div>
          <p className="text-[16px] ">Dashboard</p>
        </div>
      </Link>

      <Link to={'order-history'}>
        <div  onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave} className="transition-all cursor-pointer bg-white hover:bg-[#EDF2EE]  border-l-2 border-l-white hover:border-l-4 hover:border-l-lime-600 py-[16px] flex  items-center gap-[10px] ">
          <div className="ml-[20px]">
            <OrderIcon  isHovered={isHovered}></OrderIcon>
          </div>
          <p>Order History</p>
        </div>
      </Link>
      <Link to={'wishlist'}>
        <div  onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave} className="transition-all bg-white hover:bg-[#EDF2EE] cursor-pointer border-l-2 border-l-white hover:border-l-4 hover:border-l-lime-600  py-[16px]  flex  items-center gap-[10px] ">
          <div className="ml-[20px]">
            <WishlistIcon  isHovered={isHovered}></WishlistIcon>
          </div>
          <p>Wishlist</p>
        </div>
      </Link>
      <div onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}  className="transition-all bg-white cursor-pointer hover:bg-[#EDF2EE]  border-l-2 border-l-white hover:border-l-4 hover:border-l-lime-600  py-[16px]  flex  items-center gap-[10px] ">
        <div className="ml-[20px]">
          <ShoppingCartIcon isHovered={isHovered}></ShoppingCartIcon>
        </div>
        <p>Shopping Cart</p>
      </div>
      <div onMouseEnter={handleHover} onMouseLeave={handleMouseLeave} className="transition-all cursor-pointer bg-white hover:bg-[#EDF2EE]  border-l-2 border-l-white hover:border-l-4 hover:border-l-lime-600 py-[16px]  flex  items-center gap-[10px] ">
        <div className="ml-[20px] ">
          <SettingsIcon isHovered={isHovered}></SettingsIcon>
        </div>
        <p>Settings</p>
      </div>
      <div   onMouseEnter={handleHover} onMouseLeave={handleMouseLeave} className=" transition-all cursor-pointer bg-white hover:bg-[#EDF2EE]  border-l-2 border-l-white hover:border-l-4 hover:border-l-lime-600  py-[16px]  flex  items-center gap-[10px] ">
        <div className="ml-[20px]">
          <LogOutIcon isHovered={isHovered}></LogOutIcon>
        </div>
        <p>Log-out</p>
      </div>
    </div>
  )
}

export default Navigation
