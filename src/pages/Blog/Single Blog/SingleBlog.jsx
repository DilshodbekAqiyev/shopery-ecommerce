import { useContext } from 'react'
import { BsChatSquare } from 'react-icons/bs'
import { GoTag } from 'react-icons/go'
import { HiOutlineUser } from 'react-icons/hi2'
import { NavLink, useParams } from 'react-router-dom'
import BlogContext from '../context/BlogContext'
import SocialMediaIcons from '../../../components/common/SocialMediaIcons'
import { BsArrowRightShort } from 'react-icons/bs'

import main_image from './images/mainImage.svg'
import user_image from './images/user_image.svg'
import product_image_1 from './images/product_image_1.svg'
import product_image_2 from './images/product_image_2.svg'
import { Button } from '../../../components/ui/button'

import './single-blog.css'

const SingleBlog = () => {
  const { CardID } = useParams()

  console.log(CardID)
  const { data } = useContext(BlogContext)
  // const { data } = DATA

  const singleCardData = data.filter((card) => card.id == CardID)

  // singleCardData  shu datani ichida to`liq ma`lumotlar bor shu object orqali foydalanamiz !!!

  console.log(singleCardData)
  return (
    <div className="singleBlog w-[872px]">
      <div className="flex flex-col gap-8">
        <div className="w-full rounded-[8px]">
          <img src={main_image} alt="main product image" loading="lazy" className="w-full" />
        </div>
        <div className="w-full">
          <div className="">
            <ul className="flex gap-[16px]">
              <li>
                <a href="#2" className="flex items-center gap-1">
                  <GoTag className="w-[16px] h-[16px] font-bold text-primary" />

                  <span className="text-gray-700">Food</span>
                </a>
              </li>
              <li>
                <a href="#2" className="flex items-center gap-1 text-gray-400">
                  <HiOutlineUser className="w-[16px] h-[16px] text-primary font-bold" />

                  <p>
                    By <span className="text-gray-700">Admin</span>
                  </p>
                </a>
              </li>
              <li>
                <a className="flex items-center gap-1 cursor-pointer text-gray-400">
                  <BsChatSquare className="w-[16px] h-[16px] font-bold text-primary" />

                  <span>65 Comments</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <h4 className="text-[32px] mt-2 mb-5 font-[500] text-gray-900">
              Maecenas tempor urna sed quam mollis, a placerat dui fringill Suspendisse.
            </h4>
          </div>
          <div className="flex items-center justify-between border-b mb-8">
            <NavLink to="/dashboard" className="flex items-center gap-3 min-w-[240px] py-8">
              <div className="rounded-full">
                <img src={user_image} alt="User iamge" loading="lazy" />
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="text-gray-900 font-medium">Cameron Williamson</p>
                <p className="flex items-center gap-[6px] text-gray-400">
                  <span>4 April, 2021</span>
                  <span className="w-[3px] h-[2px] bg-gray-400 rounded-full"></span>
                  <a href="#comments" className="hover:text-primary">
                    6 min read
                  </a>
                </p>
              </div>
            </NavLink>
            <div className="">
              <SocialMediaIcons />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-gray-500 text-[18px] mb-6">
        <h2 className="w-full text-gray-900 text-[20px] font-medium mb-4">
          Maecenas lacinia felis nec placerat sollicitudin. Quisque placerat dolor at scelerisque imperdiet. Phasellus
          tristique felis dolor.
        </h2>
        <p className="mb-6">
          Maecenas elementum in risus sed condimentum. Duis convallis ante ac tempus maximus. Fusce malesuada sed velit
          ut dictum. Morbi faucibus vitae orci at euismod. Integer auctor augue in erat vehicula, quis fermentum ex
          finibus.
        </p>
        <p className="mb-6">
          Mauris pretium elit a dui pulvinar, in ornare sapien euismod. Nullam interdum nisl ante, id feugiat quam
          euismod commodo. Sed ultrices lectus ut iaculis rhoncus. Aenean non dignissim justo, at fermentum turpis. Sed
          molestie, ligula ut molestie ultrices, tellus ligula viverra neque, malesuada consectetur diam sapien volutpat
          risus. Quisque eget tortor lobortis, facilisis metus eu, elementum est. Nunc sit amet erat quis ex convallis
          suscipit. ur ridiculus mus.
        </p>
        <div className="w-full grid grid-cols-2 gap-6 mb-6 max-md:grid-cols-1">
          <div className="w-full">
            <img src={product_image_1} alt="product_image_1" loading="lazy" />
          </div>
          <div className="w-full">
            <img src={product_image_2} alt="product_image_2" loading="lazy" />
          </div>
        </div>
        <p>
          Sed dictum non nulla eu imperdiet. Duis elit libero, vulputate quis vehicula ut, vestibulum ut mauris. Nullam
          non felis varius dui rutrum rutrum in a nisi. Suspendisse elementum rutrum lorem sed luctus. Proin iaculis
          euismod metus non sollicitudin. Duis vel luctus lacus. Nullam faucibus iaculis convallis. In ullamcorper nibh
          ipsum, eget lacinia eros pulvinar a. Integer accumsan arcu nec faucibus ultricies.
        </p>
      </div>
      <div
        className="w-full rounded-[8px] text-white py-[64px] pl-[56px] mb-[40px] max-md:py-[32px] max-md:pl-[20px]"
        id="single_bg_card"
      >
        <div className="flex items-center gap-[50px]">
          <div className="">
            <p className="text-gray-400 text-[14px] font-medium">Summer Sales</p>
            <h2 className="text-white text-[36px] font-semibold">Fresh Fruit</h2>
            <Button className="flex items-center gap-3 mt-[10px] rounded-[43px]">
              <p className="text-[16px]">Shop Now</p>
              <p>
                <BsArrowRightShort size={30} />
              </p>
            </Button>
          </div>
          <div className="rounded-full bg-gray-900 flex items-center justify-center">
            <div className="flex flex-col items-center text-gray-300 text-[11px] font-normal px-[24px] py-[17px]">
              <p>UP TO</p>
              <h2 className="text-[24px] text-[#FF8A00] font-semibold">56%</h2>
              <p>Off</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleBlog
