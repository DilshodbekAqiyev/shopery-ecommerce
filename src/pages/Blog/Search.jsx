import { FiSearch } from 'react-icons/fi'

const BlogSearch = () => {
  return (
    <div className="search flex gap-[8px] item-center mt-[32px] mb-[28px] py-[14px] px-[16px] border rounded-[6px]  ">
      <FiSearch size={24} />
      <input type="text" placeholder="Search..." className=" w-[100%] outline-none" />
    </div>
  )
}

export default BlogSearch
