import BlogCard from './BlogCard'
import BlogContext from '../context/BlogContext'
import { useContext } from 'react'
import SelectBlog from './SelectBlog'

const BlogCards = () => {
  const DATA = useContext(BlogContext)
  const { filterData } = DATA

  return (
    <div className="right w-[100%] ">
      <div className="rightTop flex item-center justify-between h-[41px]">
        <div className="flex gap-4 items-center ">
          <h3>Sort by</h3>
          <SelectBlog />
        </div>
        <div className="flex items-center">
          <h3>
            <span className="font-bold pr-1">{filterData.length}</span> Result Found
          </h3>
        </div>
      </div>
      <div className="BlogCards mt-[42px]  gap-6 grid grid-cols-2  ">
        {filterData.map((prop, idx) => (
          <BlogCard key={idx} prop={prop} />
        ))}
      </div>
    </div>
  )
}

export default BlogCards
