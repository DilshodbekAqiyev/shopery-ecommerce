import { Button } from '../../components/ui/button'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select'

function TopComponent() {
  return (
    <div className="flex justify-between items-center gap-x-60">
      <Button className="rounded-[43px] font-semibold text-white text-[14px] px-6 py-3">
        Filter <img src="/assets/icons/filter.svg" alt="filter icon" className="inline-block ml-3 w-6 h-6" />
      </Button>
      <div className="flex items-center gap-x-2">
        Sort by:{'  '}
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="latest">Latest</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

export default TopComponent
