import { useEffect, useState } from 'react'
import { Button } from '../../components/ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select'

function Shop() {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState([])
  const [isOpenFilter, setIsOpenFilter] = useState(false)

  const getData = async () => {
    fetch('http://localhost:3000/products')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="max-w-[1320px] mx-auto pt-8 bg-slate-100 transition-all ease-linear duration-500">
      <div className="pb-6 flex justify-between items-center">
        <div className="flex justify-between items-center gap-x-60">
          <Button
            className="rounded-[43px] font-semibold text-white text-[14px] px-6 py-3"
            onClick={() => setIsOpenFilter((prev) => !prev)}
          >
            Filter <img src="/assets/icons/filter.svg" alt="filter icon" className="inline-block ml-3 w-6 h-6" />
          </Button>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="text-grays-gray600 font-normal">
          <span className="text-grays-gray900 inline-block font-bold text-base">52</span> Results Found
        </div>
      </div>
      <div className="flex justify-between">
        <div className={`${isOpenFilter ? 'w-[24%]' : 'w-0'} bg-red-100 transition-width duration-500`}>Filter</div>
        <div className={`${isOpenFilter ? 'w-[74%]' : 'w-full'} bg-gray-400 transition-width duration-500`}>
          Products
        </div>
      </div>
    </div>
  )
}

export default Shop
