import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from 'react-icons/bi'
import { FaPinterestP } from 'react-icons/fa'

function SocialMediaIcons() {
  return (
    <div className="flex items-center gap-1">
      <div className="hover:bg-primary text-grays-gray700 p-2 cursor-pointer rounded-full transition-all ease-in-out duration-500 hover:text-white">
        <BiLogoFacebook fontSize={24} />
      </div>
      <div className="hover:bg-primary text-grays-gray700 p-2 cursor-pointer rounded-full transition-all ease-in-out duration-500 hover:text-white">
        <BiLogoTwitter fontSize={24} />
      </div>
      <div className="hover:bg-primary text-grays-gray700 p-2 cursor-pointer rounded-full transition-all ease-in-out duration-500 hover:text-white">
        <FaPinterestP fontSize={24} />
      </div>
      <div className="hover:bg-primary text-grays-gray700 p-2 cursor-pointer rounded-full transition-all ease-in-out duration-500 hover:text-white">
        <BiLogoInstagram fontSize={24} />
      </div>
    </div>
  )
}

export default SocialMediaIcons
