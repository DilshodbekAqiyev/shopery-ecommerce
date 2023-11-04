import img from '../../../public/assets/images/fruits.jpg'

const BlogOurGallery = () => {
  return (
    <div>
      <h2 className="text-gray-900 font-bold">Our Gallery</h2>
      <div className="flex flex-wrap my-[20px] gap-[8px]">
        <img src={img} alt="img" className="w-[100px] h-[100px] rounded-[6px] " />
        <img src={img} alt="img" className="w-[100px] h-[100px]  rounded-[6px]" />
        <img src={img} alt="img" className="w-[100px] h-[100px]  rounded-[6px]" />
        <img src={img} alt="img" className="w-[100px] h-[100px]  rounded-[6px]" />
        <img src={img} alt="img" className="w-[100px] h-[100px]  rounded-[6px]" />
        <img src={img} alt="img" className="w-[100px] h-[100px]  rounded-[6px]" />
        <img src={img} alt="img" className="w-[100px] h-[100px]  rounded-[6px]" />
        <img src={img} alt="img" className="w-[100px] h-[100px]  rounded-[6px]" />
      </div>
    </div>
  )
}

export default BlogOurGallery
