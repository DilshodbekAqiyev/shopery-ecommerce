import BlogCard from './BlogCard'
import BlogSearch from './Search'
import BlogFilterButton from './FilterButton'
import BlogTopCategories from './TopCategories'
import BlogPopularTag from './PopularTag'
import BlogOurGallery from './OurGallery'
import BlogRecentlyAdded from './RecentlyAdded'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select'

// const cardData = [];

const Blog = () => {
  return (
    <div className="blog flex gap-[24px] mt-[34px] container mb-[80px]">
      <div className="left w-[424px]">
        <BlogFilterButton />
        <BlogSearch />
        <div className="line w-[100%] h-[1px] bg-gray-200 my-[20px]"></div>
        <BlogTopCategories />
        <div className="line w-[100%] h-[1px] bg-gray-200 my-[20px]"></div>
        <BlogPopularTag />

        <div className="line w-[100%] h-[1px] bg-gray-200 my-[20px]"></div>
        <BlogOurGallery />
        <div className="line w-[100%] h-[1px] bg-gray-200 my-[20px]"></div>
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
              <span className="font-bold pr-1">{52}</span> Result Found
            </h3>
          </div>
        </div>
        <div className="BlogCards mt-8  gap-6 grid grid-cols-2">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </div>
  )
}

export default Blog
