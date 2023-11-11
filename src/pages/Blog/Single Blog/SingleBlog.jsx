import { useContext } from 'react'
import { BsChatSquare } from 'react-icons/bs'
import { GoTag } from 'react-icons/go'
import { HiOutlineUser } from 'react-icons/hi2'
import { NavLink, useParams } from 'react-router-dom'
import BlogContext from '../context/BlogContext'
import SocialMediaIcons from '../../../components/common/SocialMediaIcons'
import { BsArrowRightShort } from 'react-icons/bs'

import user_image from './images/user_image.svg'

import { Button } from '../../../components/ui/button'

import './single-blog.css'
import { Label } from '../../../components/ui/label'
import { Input } from '../../../components/ui/input'
// import { none } from '@cloudinary/url-gen/qualifiers/fontHinting'
import { Checkbox } from '../../../components/ui/checkbox'

const SingleBlog = () => {
  const { CardID } = useParams()
  const { data } = useContext(BlogContext)
  const singleCardData = data?.filter((card) => card.id == CardID)

  const { previewImage, extraImages } = singleCardData[0]
  // const { data } = DATA

  // singleCardData  shu datani ichida to`liq ma`lumotlar bor shu object orqali foydalanamiz !!!

  console.log(data, 'data')

  return (
    <div className="singleBlog w-[872px]">
      <div className="flex flex-col gap-8">
        <div className="w-full rounded-[12px] overflow-hidden">
          <img src={previewImage} alt="main product image" loading="lazy" className="w-full " />
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
          <div className="flex items-center justify-between border-b mb-8 max-md:flex-col">
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
            <img src={extraImages[0]} className="rounded-[8px]" alt="product_image_1" loading="lazy" />
          </div>
          <div className="w-full">
            <img src={extraImages[1]} className="rounded-[8px]" alt="product_image_2" loading="lazy" />
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
            <Button className="flex items-center gap-3 mt-[10px] rounded-[43px] font-semibold">
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
      <div className="flex flex-col gap-4 w-full mb-[40px]">
        <div className="w-full">
          <h2 className="text-gray-900 text-[24px] font-semibold w-full">Leave a Comment</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full max-md:grid-cols-1">
          <div className="flex flex-col gap-2 w-full">
            <Label htmlFor="fullName" className="text-gray-900 text-[14px] font-medium">
              Full Name
            </Label>
            <Input
              id="fullName"
              className="border-gray-200 text-gray-900 text-[16px] font-normal py-[14px] px-[16px] outline-none focus:border-primary"
              placeholder="Full name"
              defaultValue="Zakir Hossen"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <Label htmlFor="Email" className="text-gray-900 text-[14px] font-medium">
              Email
            </Label>
            <Input type="email" id="Email" placeholder="Email" defaultValue="zakirsoft.20@g|" />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <Label className="text-gray-900 text-[14px] font-medium w-full" htmlFor="textarea">
            Message
          </Label>
          <textarea
            name="comment"
            placeholder="Write your comment here…"
            id="textarea"
            className="h-[98px] px-4 focus:border-primary py-[14px] text-gray-900 text-[16px] font-normal border rounded-[6px] border-gray-200 w-full outline-none resize-none"
          ></textarea>
        </div>
        <div className="flex items-center space-x-2 w-full">
          <Checkbox id="saveComment" className="border border-[#ccc] hover:border-primary" />
          <label
            htmlFor="saveComment"
            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 w-full text-gray-600 text-[14px] font-normal"
          >
            Save my name and email in this browser for the next time I comment.
          </label>
        </div>
        <div className="w-full mt-2">
          <Button className="rounded-[43px] px-[46px] py-[16px] font-semibold text-[16px]">Post Comments</Button>
        </div>
      </div>
      <div className="w-full">
        <div className="">
          <h2 className="text-[24px] text-gray-900 font-semibold">Comments</h2>
        </div>
        <div className="w-full flex flex-col mb-[40px]">
          {singleCardData[0]?.comments?.map((comment) => {
            return (
              <>
                <div className="py-6 w-full flex gap-3 border-b border-gray-400">
                  <div className="">
                    <img src={comment.userImg || user_image} alt="User image" loading="lazy" />
                  </div>
                  <div className="w-full flex flex-col gap-[5px] text-[14px]">
                    <p className="flex items-center gap-[6px] text-gray-900">
                      <a href="#comments" className="hover:text-primary text-gray-900 font-medium">
                        {comment.fullName}
                      </a>
                      <span className="w-[2px] h-[2px] bg-gray-900 rounded-full"></span>
                      <span className="text-gray-400 ">{comment.date}</span>
                    </p>
                    <div className="w-full">
                      <p className="font-normal text-gray-400 text-[14px]">{comment.comment}</p>
                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
        <div className="">
          <Button variant="secondary" className="rounded-[43px] py-[16px] px-[32px] te">
            Load More
          </Button>
        </div>
      </div>
    </div>
  )
}

export default SingleBlog
