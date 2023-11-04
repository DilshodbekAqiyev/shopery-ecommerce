import img from '../../../public/assets/images/fruits.jpg'
import calendar from '../../../public/assets/icons/calendar.svg'
const BlogRecentlyAdded = () => {
  return (
    <div>
      <h2>Recently Added</h2>
      <div className="flex items-center gap-[16px] mt-[16px]">
        <img src={img} alt="img" className="w-[100px] h-[72px]" />
        <div>
          <h4>Curabitur porttitor orci eget nequ accumsan.</h4>
          <div className="flex items-center gap-[6px]">
            <img src={calendar} alt="calendar" />
            <p>Apr 25, 2021</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogRecentlyAdded
