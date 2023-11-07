import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const BlogCard = ({ prop }) => {
  const { title, previewImage, id, comments } = prop
  return (
    <div className="blogCard w-[424px]">
      <div className="blogCardTop w-[424px] h-[324px] rounded-t-[8px] relative">
        <img src={previewImage} alt="img" className="rounded-t-[8px] max-w-[424px] h-[324px] " />
        <div className="absolute bottom-[24px] left-[24px] z-5 bg-white text-gray-900 flex flex-col items-center justify-center pt-[6px] px-[15px] pb-[10px] rounded">
          <h4 className="text-[20px] ">18</h4>
          <p className="text-[12px] text-grays-gray500">NOV</p>
        </div>
      </div>
      <div className="blogCartBottom p-6 border-[1px] rounded-b-[8px]">
        <ul className="flex gap-[16px]">
          <li>
            <a href="#2" className="flex items-center gap-1">
              <img src={'/assets/icons/tag.svg'} alt="img" />

              <span>Food</span>
            </a>
          </li>
          <li>
            <a href="#2" className="flex items-center gap-1">
              <img src={'/assets/icons/user.svg'} alt="img" />
              <span>By Admin</span>
            </a>
          </li>
          <li>
            <Link to="Single Blog" className="flex items-center gap-1">
              <img src={'/assets/icons/chatComment.svg'} alt="img" />
              <span>{comments.length} Comments</span>
            </Link>
          </li>
        </ul>
        <h4 className="text-[18px] mt-2 mb-5 font-[500]">{title}</h4>
        <Link to={`/blog/${id}`} className="flex gap-[12px] text-primary text-[16px] font-[600]">
          <span>Read More </span>

          <img src="assets/icons/ArrowRight.svg" alt="img" />
        </Link>
      </div>
    </div>
  )
}

export default BlogCard

BlogCard.propTypes = {
  prop: PropTypes.any,
}
