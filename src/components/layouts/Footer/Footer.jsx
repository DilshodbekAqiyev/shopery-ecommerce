import { Link } from 'react-router-dom'
import LogoIcon from '../Navbar/images/LogoIcon'
import { FaCcApplePay, FaCcVisa, FaCcDiscover, FaCcMastercard } from 'react-icons/fa'
import { RiSecurePaymentFill } from 'react-icons/ri'

export default function Footer() {
  return (
    <div className="w-full bg-gray-900">
      <div className="max-w-[1320px] m-auto ">
        <div className="flex items-center justify-between py-[60px] flex-wrap">
          <div className="flex flex-col gap-4 max-w-[336px]">
            <LogoIcon color="white" />
            <p className="text-gray-500 text-[14px]">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.
            </p>
            <div className="flex gap-4">
              <a href="tel:2195550114" className="text-white border-b-2 pb-[6px] border-primary">
                (219) 555-0114
              </a>
              <p className="text-gray-500 text-[14px]">or</p>
              <a href="mail:Proxy@gmail.com" className="text-white border-b-2 pb-[6px] border-primary">
                Proxy@gmail.com
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-[16px] text-white">My Account</h1>
            <div className="flex flex-col gap-3 text-gray-400 ">
              <Link to="" className="hover:text-white text-[14px]">
                My Account
              </Link>
              <Link to="" className="hover:text-white text-[14px]">
                Order History
              </Link>
              <Link to="" className="hover:text-white text-[14px]">
                Shoping Cart
              </Link>
              <Link to="" className="hover:text-white text-[14px]">
                Wishlist
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-[16px] text-white">Helps</h1>
            <div className="flex flex-col gap-3 text-gray-400 ">
              <Link to="" className="hover:text-white text-[14px]">
                Contact
              </Link>
              <Link to="" className="hover:text-white text-[14px]">
                Faqs
              </Link>
              <Link to="" className="hover:text-white text-[14px]">
                Terms & Condition
              </Link>
              <Link to="" className="hover:text-white text-[14px]">
                Privacy Policy
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-[16px] text-white">Proxy</h1>
            <div className="flex flex-col gap-3 text-gray-400 ">
              <Link to="" className="hover:text-white text-[14px]">
                About
              </Link>
              <Link to="" className="hover:text-white text-[14px]">
                Shop
              </Link>
              <Link to="" className="hover:text-white text-[14px]">
                Product
              </Link>
              <Link to="" className="hover:text-white text-[14px]">
                Track Order
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-[16px] text-white">Categories</h1>
            <div className="flex flex-col gap-3 text-gray-400 ">
              <Link to="" className="hover:text-white text-[14px]">
                Fruit & Vegetables
              </Link>
              <Link to="" className="hover:text-white text-[14px]">
                Meat & Fish
              </Link>
              <Link to="" className="hover:text-white text-[14px]">
                Bread & Bakery
              </Link>
              <Link to="" className="hover:text-white text-[14px]">
                Beauty & Health
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-gray-200"></div>
        <div className="py-6 flex items-center justify-between">
          <div className="">
            <a href="#1" className="text-gray-500 hover:text-white">
              Ecobazar eCommerce © 2021. All Rights Reserved
            </a>
          </div>
          <div className="text-white flex items-center gap-2">
            <div className="border rounded-lg border-r-gray-500 py-1 inline-block px-3 cursor-pointer">
              <FaCcApplePay size={26} />
            </div>{' '}
            <div className="border rounded-lg border-r-gray-500 py-1 inline-block px-3 cursor-pointer">
              <FaCcVisa size={26} />
            </div>{' '}
            <div className="border rounded-lg border-r-gray-500 py-1 inline-block px-3 cursor-pointer">
              <FaCcDiscover size={26} />
            </div>{' '}
            <div className="border rounded-lg border-r-gray-500 py-1 inline-block px-3 cursor-pointer">
              <FaCcMastercard size={26} />
            </div>{' '}
            <div className="border border-gray-500 rounded-lg flex items-center py-1 px-4 justify-center h-[36px]">
              <div className="flex flex-col cursor-pointer">
                <p className="flex items-center gap-1 text-[10px]">
                  <RiSecurePaymentFill size={12} />
                  Secure
                </p>
                <p className="text-[12px]">Payment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
