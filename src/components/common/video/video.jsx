import PropTypes from 'prop-types';
import ReactPlayer from 'react-player'
import {BsPlayCircle} from "react-icons/bs"

function Video({src , width , height , title}) {
  return (
    <div className={`w-[${width}] rounded-3xl overflow-hidden relative `}>
        <ReactPlayer url={src} loop={true} controls={true} volume={0} playing width={"100%"} height={height}/>
        <div className=' absolute top-0 left-0 bottom-0 right-0 focus:hidden active:hidden bg-video hover:hidden flex items-center justify-center flex-col'>
          <span className='text-white font-normal text-base mb-3'>VIDEO</span>
          <p className=' text-4xl text-white font-semibold max-w-[500px] text-center'>{title}</p>
          <BsPlayCircle color='white' className=' w-20 h-20 mt-8'/>
        </div>
    </div>
  )
}

Video.propTypes = {
    src : PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    title: PropTypes.string
}

export default Video