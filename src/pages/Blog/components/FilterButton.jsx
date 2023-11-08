import { useContext } from 'react'
import { Button } from '../../../components/ui/button'
import BlogContext from '../context/BlogContext'

const BlogFilterButton = () => {
  const DATA = useContext(BlogContext)
  const { data, setFilterData } = DATA
  return (
    <Button
      className="flex item-center gap-[12px]"
      onClick={() => {
        console.log('update..')
        setFilterData(data)
      }}
    >
      <span className="text-white font-bold">Filter</span>
      <img src="/assets/icons/filter.svg" alt="filter icon" className="inline-block ml-3 w-6 h-6" loading="lazy" />
    </Button>
  )
}

export default BlogFilterButton
