import PropTypes from 'prop-types'
import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'

const BlogSearch = ({ filterData, setFilterData }) => {
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

BlogSearch.propTypes = {
  filterData: PropTypes.array,
  setFilterData: PropTypes.any,
}
