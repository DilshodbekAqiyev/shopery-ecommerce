import { useContext, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import BlogContext from '../context/BlogContext'

const BlogSearch = () => {
  const DATA = useContext(BlogContext)

  const { setFilterData, filterData } = DATA

  const [inputVal, setInputVal] = useState('')

  const onChangeInput = () => {
    if (inputVal !== '') {
      const newData = filterData.filter((data) => {
        return data.title.toLowerCase().includes(inputVal.toLowerCase())
      })
      setFilterData([...newData])
    }
  }
  return (
    <div className="search flex gap-[8px] item-center mt-[32px] mb-[28px] py-[14px] px-[16px] border rounded-[6px]  ">
      <FiSearch size={24} onClick={() => onChangeInput()} />
      <input
        type="text"
        placeholder="Search..."
        className=" w-[100%] outline-none"
        onChange={(e) => setInputVal(e.target.value)}
      />
    </div>
  )
}

export default BlogSearch
