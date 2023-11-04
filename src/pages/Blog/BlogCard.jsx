import img from '../../../public/assets/images/fruits.jpg'
import tag from '../../../public/assets/icons/tag.svg'
import user from '../../../public/assets/icons/user.svg'
import comment from '../../../public/assets/icons/chatComment.svg'
import Arrow from '../../../public/assets/icons/ArrowRight.svg'
const BlogCard = () => {
  return (
    <div className="blogCard w-[424px]">
      <div className="blogCardTop w-[424px] h-[324px] rounded-t-[8px] relative">
        <img src={img} alt="img" className="rounded-t-[8px] w-[424px] h-[324px] " />
        <div className="absolute bottom-[24px] left-[24px] z-5 bg-white text-gray-900 flex flex-col items-center justify-center pt-[6px] px-[15px] pb-[10px] rounded">
          <h4 className="text-[20px] ">18</h4>
          <p className="text-[12px] text-grays-gray500">NOV</p>
        </div>
      </div>
      <div className="blogCartBottom p-6 border-[1px] rounded-b-[8px]">
        <ul className="flex gap-[16px]">
          <li>
            <a href="#2" className="flex items-center gap-1">
              <img src={tag} alt="img" />
              <span>Food</span>
            </a>
          </li>
          <li>
            <a href="#2" className="flex items-center gap-1">
              <img src={user} alt="img" />
              <span>By Admin</span>
            </a>
          </li>
          <li>
            <a href="#2 " className="flex items-center gap-1">
              <img src={comment} alt="img" />
              <span>{65} Comments</span>
            </a>
          </li>
        </ul>
        <h4 className="text-[18px] mt-2 mb-5 font-[500]">
          Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.
        </h4>
        <a href="#2" className="flex gap-[12px] text-primary text-[16px] font-[600]">
          <span>Read More </span>
          <img src={Arrow} alt="img" />
        </a>
      </div>
    </div>
  )
}

export default BlogCard
