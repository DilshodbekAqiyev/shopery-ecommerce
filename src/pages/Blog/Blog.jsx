
import BlogCard from './BlogCard'
import BlogSearch from './Search'
import BlogFilterButton from './FilterButton'
import BlogTopCategories from './TopCategories'
import BlogPopularTag from './PopularTag'
import BlogOurGallery from './OurGallery'
import BlogRecentlyAdded from './RecentlyAdded'





// const cardData = [];

const Blog = () => {

  return (
    <div className="blog flex gap-[24px] mt-[34px]">
      <div className="left w-[424px]">
        <BlogFilterButton />
        <BlogSearch />
        <BlogTopCategories />
        <BlogPopularTag />
        <BlogOurGallery />
        <BlogRecentlyAdded />
      </div>

      <div className="right w-[872px]">
        <div className="rightTop flex item-center justify-between ">
          <div className="flex gap-[8px] item-center">
            <h3>Sort by</h3>
            <select id="sortBy" className="py-[10px] px-[16px]">
              <option value="Latest">Latest</option>
              <option value="L">Latest</option>
            </select>
          </div>
          <div className="">
            <h3>
              <span className="font-bold pr-1">52</span> Result Found
            </h3>
          </div>
        </div>
        <div className="BlogCards">
          <BlogCard />
        </div>
      </div>
    </div>
  )
}

export default Blog
