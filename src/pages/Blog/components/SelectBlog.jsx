import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select'
const SelectBlog = () => {
  return (
    <div>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Latest" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="latest">Latest</SelectItem>
          <SelectItem value="popular">Popular</SelectItem>
          <SelectItem value="order"> Most Order</SelectItem>
          <SelectItem value="sold"> Most Sold</SelectItem>
          <SelectItem value="view"> Most View</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default SelectBlog
