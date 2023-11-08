import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs"

function LatestCard({title , description , date : { month , day}, images : {src} }) {
  return (
    <div className='w-[424px] max-[470px]:w-80 max-[470px]:h-auto p-6 drop-shadow-xl bg-white '>
        <div className=' relative h-[276px] rounded-[4px] border'>
            <img src={src} alt="img" className='w-full object-cover h-full' />
            <div className=' absolute bottom-4 left-4 rounded-[4px] bg-white flex flex-col items-center justify-center py-2 px-6 drop-shadow-lg'>
                <p className='text-[20px] font-semibold'>{day}</p>
                <p className=' text-greenGrays-greenGray500'>{month}</p>
            </div>
        </div>
        <p className='mt-[24px] mb-[8px] text-[18px] font-semibold' >{title}</p>
        <p className=' text-[14px] text-greenGrays-greenGray500'>{description.length > 100 ? `${description.slice(0 , 100)}...` : description}</p>
        <Link to="/" className='flex items-center justify-start gap-4 mt-[20px] font-semibold text-primary'>
            <p>Read More</p>
            <BsArrowRight className='w-[30px] h-[25px]'/>
        </Link>
    </div>
  )
}

LatestCard.propTypes = {
    title : PropTypes.string,
    description: PropTypes.string,
    month: PropTypes.string,
    day: PropTypes.string,
    src: PropTypes.string,
    images: PropTypes.object ,
    date: PropTypes.object ,
}

export default LatestCard