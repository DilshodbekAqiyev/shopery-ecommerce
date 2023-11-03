import { useEffect, useState } from 'react'
import PopularTags from './PopularTags'
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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../components/ui/accordion'
import { RadioGroup, RadioGroupItem } from '../../components/ui/radio-group'
import { Label } from '../../components/ui/label'
import { Slider } from '../../components/ui/slider'
import { AllCategories, AllRating } from './__mock__'
import { Checkbox } from '../../components/ui/checkbox'

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
            <AccordionItem value="item-1">
              <AccordionTrigger className="hover:no-underline">All Categories</AccordionTrigger>
              <AccordionContent>
                <RadioGroup defaultValue="option-1" className="flex flex-col gap-3">
                  {AllCategories.map(({ id, title, size }) => (
                    <div className="flex items-center space-x-2" key={id}>
                      <RadioGroupItem value={`option-${id}`} id={`option-${id}`} />
                      <Label htmlFor={`option-${id}`} className="text-grays-gray900 text-textSmall cursor-pointer">
                        {title}
                        <span className="text-textSmall text-grays-gray500">({size})</span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="hover:no-underline">Price</AccordionTrigger>
              <AccordionContent>
                <Slider
                  defaultValue={[0, 1000]}
                  max={1000}
                  min={0}
                  step={1}
                  // value={range}
                  // onValueChange={handleRangeChange}
                  // formatLabel={(value) => `${value} `}
                  className="my-3"
                />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="hover:no-underline">Rating</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-3">
                <SelectGroup>
                  {AllRating.map(({ id, name, rating, labelName }) => (
                    <div key={id} className="flex items-center">
                      <Checkbox id={labelName} />
                      <SelectLabel
                        htmlFor={labelName}
                        className="flex items-center pl-2 cursor-pointer leading-5 text-grays-gray900 text-textSmall"
                      >
                        {Array(5)
                          .fill(undefined)
                          .map((_, index) => (
                            <img
                              key={index}
                              src={`/assets/icons/${index < rating ? 'star' : 'star-fill'}.svg`}
                              alt="Star"
                            />
                          ))}
                        &nbsp;
                        {name}
                      </SelectLabel>
                    </div>
                  ))}
                </SelectGroup>
              </AccordionContent>
            </AccordionItem>
            <PopularTags />
          </Accordion>
        </div>
        <div className="w-[80%] bg-gray-400 transition-width duration-500">Products</div>
      </div>
    </div>
  )
}

export default Shop
