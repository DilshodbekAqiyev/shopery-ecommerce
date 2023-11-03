import { useRef, useState } from 'react'
import videoBg from '/assets/video/eccomerceVd.mp4'
import { BsPlayCircleFill, BsPauseCircleFill } from 'react-icons/bs'

function VideoPlayer() {
  const videoPlayer = useRef()
  const [isPlay, setIsPlay] = useState(false)

  const handlePlay = () => {
    videoPlayer.current.play()
    setIsPlay((prev) => !prev)
  }

  const handlePause = () => {
    videoPlayer.current.pause()
    setIsPlay((prev) => !prev)
  }

  return (
    <div className="relative w-full h-full">
      <BsPlayCircleFill
        className={`absolute bg-white rounded-full text-primary left-[45%] bottom-[44%] z-50 ${
          isPlay ? 'hidden' : 'flex'
        }`}
        onClick={handlePlay}
        size={50}
      />
      <video
        src={videoBg}
        ref={videoPlayer}
        width={'100%'}
        onClick={() => (isPlay ? handlePause() : handlePlay())}
        height={400}
        className="rounded-md"
      ></video>
      <BsPauseCircleFill
        className={`absolute bg-white rounded-full text-primary left-[45%] bottom-[44%] z-50 ${
          !isPlay ? 'hidden' : 'flex'
        }`}
        onClick={handlePause}
        size={50}
      />
    </div>
  )
}

export default VideoPlayer
