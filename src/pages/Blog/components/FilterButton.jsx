import { Button } from '../../../components/ui/button'

import BlogFilterIcon from '../../../../public/assets/icons/blog-icons/filter-icon'

const BlogFilterButton = () => {
  return (
    <Button className="flex item-center gap-[12px]">
      <span className="text-white font-bold">Filter</span> <BlogFilterIcon className="w-[20px] h-[17px]" />
    </Button>
  )
}

export default BlogFilterButton
