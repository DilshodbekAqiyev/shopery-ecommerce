import PropTypes from 'prop-types'

import { BsChatSquare } from 'react-icons/bs'

import { GoTag } from 'react-icons/go'
import { HiOutlineUser } from 'react-icons/hi2'

import { useNavigate } from 'react-router-dom'

const BlogCard = ({ prop }) => {
  const navigate = useNavigate()
  const { title, previewImage, id, comments, createdDate } = prop
  return (
    <div className="blogCard w-[100%]">
      <div className="blogCardTop w-[100%]] h-[324px] rounded-t-[8px] relative">
        <img src={previewImage} alt="img" className="rounded-t-[8px] w-[100%] min-h-[328px] " loading="lazy" />
        <div className="absolute bottom-[24px] left-[24px] z-5 bg-white text-gray-900 flex flex-col items-center justify-center pt-[6px] px-[15px] pb-[10px] rounded">
          <h4 className="text-[20px] ">{createdDate.slice(8, 10)}</h4>
          <p className="text-[14px] text-grays-gray500">{createdDate.slice(4, 7)}</p>
        </div>
      </div>
      <div className="blogCartBottom p-6 border-[1px] rounded-b-[8px]">
        <ul className="flex gap-[16px]">
          <li>
            <a href="#2" className="flex items-center gap-1  hover:text-primary ">
              <GoTag className="w-[16px] h-[16px] font-bold" />

              <span>Food</span>
            </a>
          </li>
          <li>
            <a href="#2" className="flex items-center gap-1 hover:text-primary">
              <HiOutlineUser className="w-[16px] h-[16px]  font-bold" />

              <span>By Admin</span>
            </a>
          </li>
          <li>
            <a onClick={() => navigate('blog/' + id)} className="flex items-center gap-1 hover:text-primary">
              <BsChatSquare className="w-[16px] h-[16px]  font-bold" />

              <span>{comments.length} Comments</span>
            </a>
          </li>
        </ul>
        <h4 className="text-[18px] mt-2 mb-5 font-[500]">{title}</h4>
        <a
          onClick={() => navigate('blog/' + id)}
          className="flex gap-[12px] text-primary text-[16px] font-[600] cursor-pointer"
        >
          <span>Read More </span>

          <img src="assets/icons/ArrowRight.svg" alt="img" loading="lazy" />
        </a>
      </div>
    </div>
  )
}

export default BlogCard

BlogCard.propTypes = {
  prop: PropTypes.any,
}
