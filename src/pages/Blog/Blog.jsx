import PropTypes from 'prop-types'
import BlogCard from './components/BlogCard'
import BlogSearch from './components/Search'
import BlogFilterButton from './components/FilterButton'
import BlogTopCategories from './components/TopCategories'
import BlogPopularTag from './components/PopularTag'
import BlogOurGallery from './components/OurGallery'
import BlogRecentlyAdded from './components/RecentlyAdded'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select'
import Line from './components/Line'

const Blog = ({ data, filterData, setFilterData }) => {
  return (
    <div className="blog flex gap-[24px] max-w-[1320px] mx-auto mt-[34px]  mb-[80px]">
      <div className="left max-w-[424px]">
        <BlogFilterButton data={data} setFilterData={setFilterData} />
        <BlogSearch />
        <Line />
        <BlogTopCategories filterData={filterData} />
        <Line />
        <BlogPopularTag data={data} setFilterData={setFilterData} />
        <Line />
        <BlogOurGallery />
        <Line />
        <BlogRecentlyAdded />
      </div>

      <div className="right w-[872px] ">
        <div className="rightTop flex item-center justify-between h-[41px]">
          <div className="flex gap-4 items-center ">
            <h3>Sort by</h3>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
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

Blog.propTypes = {
  data: PropTypes.array,
  filterData: PropTypes.array,
  setFilterData: PropTypes.any,
}
