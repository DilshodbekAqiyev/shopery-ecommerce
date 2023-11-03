import { useReducer, useRef } from 'react'
import { BsPlayCircleFill, BsPauseCircleFill } from 'react-icons/bs'
import { detailsReducer } from '../../../contexts/productDetails/DetailsReducer'
import { ACTION_TYPES } from '../../../contexts/productDetails/ActioinTypes'
import videoBg from '/assets/video/eccomerceVd.mp4'

function VideoPlayer() {
  const videoPlayer = useRef()
  const [state, dispatch] = useReducer(detailsReducer, {
    isPlay: false,
  })

  const setIsPlay = () => {
    dispatch({ type: ACTION_TYPES.ISPLAY })
  }

  const handlePlay = () => {
    videoPlayer.current.play()
    setIsPlay()
  }

  const handlePause = () => {
    videoPlayer.current.pause()
    setIsPlay()
  }

  return (
    <div className="relative w-full h-full">
      <BsPlayCircleFill
        className={`absolute bg-white rounded-full text-primary left-[45%] bottom-[44%] z-50 ${
          state.isPlay ? 'hidden' : 'flex'
        }`}
        onClick={handlePlay}
        size={50}
      />
      <video
        src={videoBg}
        ref={videoPlayer}
        width={'100%'}
        onClick={() => (state.isPlay ? handlePause() : handlePlay())}
        height={400}
        className="rounded-md"
      ></video>
      <BsPauseCircleFill
        className={`absolute bg-white rounded-full text-primary left-[45%] bottom-[44%] z-50 ${
          !state.isPlay ? 'hidden' : 'flex'
        }`}
        onClick={handlePause}
        size={50}
      />
    </div>
  )
}

export default VideoPlayer
