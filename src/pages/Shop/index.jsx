import { useEffect, useState } from 'react'
import PopularTags from './PopularTags'
import AllCategoriesComponent from './AllCategories'
import { Button } from '../../components/ui/button'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select'
import { Accordion } from '../../components/ui/accordion'
import SliderComponent from './SliderComponent'
import Rating from './Rating'

function Shop() {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState([])

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
    <div className="max-w-[1320px] mx-auto pt-8 transition-all ease-linear duration-500">
      <div className="pb-6 flex justify-between items-center">
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
        <div className="text-grays-gray600 font-normal">
          <span className="text-grays-gray900 inline-block font-bold text-base">52</span> Results Found
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-[19%]">
          <Accordion type="multiple" className="w-full">
            <AllCategoriesComponent />
            <SliderComponent />
            <Rating />
            <PopularTags />
          </Accordion>
        </div>
        <div className="w-[80%] bg-gray-400 transition-width duration-500">Products</div>
      </div>
    </div>
  )
}

export default Shop
