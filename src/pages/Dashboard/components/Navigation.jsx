import DashboardIcon from '../icons/DashboardIcon'
import OrderIcon from '../icons/OrderIcon'
import SettingsIcon from '../icons/SettingsIcon'
import ShoppingCartIcon from './../icons/ShoppingCartIcon'
import LogOutIcon from './../icons/LogOutIcon'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getUser } from '../../../utils/utils'
function Navigation() {
  const [user, setUser] = useState({})

  useEffect(() => {
    (async () => {
      const res = await getUser()
      setUser(res)
    })()
  }, [])

  const logoutUser = () => {
    localStorage.removeItem('token')
    location.href = '/'
  }

  return (
    <div className=" border-solid border-2 border-gray100 rounded-[10px] mt-10 h-[380px] w-[312px] ">
      <h3 className="mb-[16px]  ml-[20px] mt-[25px] text-[20px] font-semibold">Navigation</h3>
      <NavLink to="">
        <div

          className="transition-all cursor-pointer bg-white hover:bg-[#EDF2EE]  border-l-2 border-l-white hover:border-l-4 hover:border-l-lime-600 py-[16px] flex  items-center gap-[10px] "
        >
          <div className="ml-[20px]">
            <DashboardIcon ></DashboardIcon>
          </div>
          <p className="text-[16px] ">Dashboard</p>
        </div>
      </NavLink>

      <NavLink to={'order-history'}>
        <div

          className="transition-all cursor-pointer bg-white hover:bg-[#EDF2EE]  border-l-2 border-l-white hover:border-l-4 hover:border-l-lime-600 py-[16px] flex  items-center gap-[10px] "
        >
          <div className="ml-[20px]">
            <OrderIcon ></OrderIcon>
          </div>
          <p>Order History</p>
        </div>
      </NavLink>
      <NavLink to={'settings'}>
        <div className="transition-all cursor-pointer bg-white hover:bg-[#EDF2EE]  border-l-2 border-l-white hover:border-l-4 hover:border-l-lime-600 py-[16px]  flex  items-center gap-[10px] ">
          <div className="ml-[20px] ">
            <SettingsIcon ></SettingsIcon>
          </div>
          <p>Settings</p>
        </div>
      </NavLink>
      {user?.role === "Seller" ? (
        <NavLink to={'addProduct'}>
          <div
            className="transition-all bg-white hover:bg-[#EDF2EE] cursor-pointer border-l-2 border-l-white hover:border-l-4 hover:border-l-lime-600  py-[16px]  flex  items-center gap-[10px] "
          >
            <div className="ml-[20px]">
              <ShoppingCartIcon />
            </div>
            <p>Add Product</p>
          </div>
        </NavLink>
      ) : null}

      <div onClick={logoutUser}>
        <div

          className="transition-all cursor-pointer bg-white hover:bg-[#EDF2EE]  border-l-2 border-l-white hover:border-l-4 hover:border-l-lime-600 py-[16px] flex  items-center gap-[10px] "
        >
          <div className="ml-[20px]">
            <LogOutIcon></LogOutIcon>
          </div>
          <p>Log Out</p>
        </div>
      </div>
    </div>
  )
}

export default Navigation
