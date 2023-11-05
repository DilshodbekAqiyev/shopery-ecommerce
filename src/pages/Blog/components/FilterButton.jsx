import { Button } from '../../../components/ui/button'

const BlogFilterButton = () => {
  return (
    <Button className="flex item-center gap-[12px]">
      <span className="text-white font-bold">Filter</span>{' '}
      <img src="/assets/icons/filter.svg" alt="filter icon" className="inline-block ml-3 w-6 h-6" />
    </Button>
  )
}

export default BlogFilterButton
