import BlogCard from './components/BlogCard'
import BlogSearch from './components/Search'
import BlogFilterButton from './components/FilterButton'
import BlogTopCategories from './components/TopCategories'
import BlogPopularTag from './components/PopularTag'
import BlogOurGallery from './components/OurGallery'
import BlogRecentlyAdded from './components/RecentlyAdded'

import Line from './components/Line'
import SelectBlog from './components/SelectBlog'
import { useContext } from 'react'
import BlogContext from './context/BlogContext'

const Blog = () => {
  const DATA = useContext(BlogContext)
  const { data, setFilterData, filterData } = DATA

  console.log(data, 'data')
  console.log(setFilterData, 'setFilterData')
  console.log(new Date('Mon Nov 06 2023 15:05:24 GMT+0500 (GMT+05:00)').toDateString())

  return (
    <div className="blog flex gap-[24px] max-w-[1320px] mx-auto mt-[34px]  mb-[80px]">
      <div className="left max-w-[424px]">
        <BlogFilterButton />
        <BlogSearch />
        <Line />
        <BlogTopCategories />
        <Line />
        <BlogPopularTag />
        <Line />
        <BlogOurGallery />
        <Line />
        <BlogRecentlyAdded />
      </div>

      <div className="right w-[872px] ">
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
        <div className="BlogCards mt-8  gap-6 grid grid-cols-2">
          {filterData.map((prop, idx) => (
            <BlogCard key={idx} prop={prop} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog
