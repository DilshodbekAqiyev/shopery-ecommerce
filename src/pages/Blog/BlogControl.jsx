import BlogSearch from './components/Search'
import BlogFilterButton from './components/FilterButton'
import BlogTopCategories from './components/TopCategories'
import BlogPopularTag from './components/PopularTag'
import BlogOurGallery from './components/OurGallery'
import BlogRecentlyAdded from './components/RecentlyAdded'

import Line from './components/Line'

import { useContext } from 'react'
import BlogContext from './context/BlogContext'

const BlogControl = () => {
  const DATA = useContext(BlogContext)
  const { data, setFilterData, filterData } = DATA

  console.log(data, 'data')
  console.log(setFilterData, 'setFilterData')
  console.log(filterData, 'filterData')
  console.log(new Date('Mon Nov 06 2023 15:05:24 GMT+0500 (GMT+05:00)').toDateString())

  return (
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
  )
}

export default BlogControl
