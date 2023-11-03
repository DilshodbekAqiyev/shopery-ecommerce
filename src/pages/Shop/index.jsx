import { useEffect, useState } from 'react'
import { Button } from '../../components/ui/button'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../components/ui/accordion'
import { RadioGroup, RadioGroupItem } from '../../components/ui/radio-group'
import { Label } from '../../components/ui/label'
import { Slider } from '../../components/ui/slider'

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
    <div className="max-w-[1320px] mx-auto pt-8 bg-slate-100 transition-all ease-linear duration-500">
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
        <div className="w-[24%]">
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>All Categories</AccordionTrigger>
              <AccordionContent>
                <RadioGroup defaultValue="option-one">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-one" id="option-one" />
                    <Label htmlFor="option-one" className="text-grays-gray900 text-textSmall">
                      Fresh Fruit <span className="text-textSmall text-grays-gray500">(150)</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-two" id="option-two" />
                    <Label htmlFor="option-two" className="text-grays-gray900 text-textSmall">
                      Vegetables <span className="text-textSmall text-grays-gray500">(150)</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-three" id="option-three" />
                    <Label htmlFor="option-three" className="text-grays-gray900 text-textSmall">
                      Cooking <span className="text-textSmall text-grays-gray500">(150)</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-four" id="option-four" />
                    <Label htmlFor="option-four" className="text-grays-gray900 text-textSmall">
                      Snacks <span className="text-textSmall text-grays-gray500">(150)</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-five" id="option-five" />
                    <Label htmlFor="option-five" className="text-grays-gray900 text-textSmall">
                      Beverages <span className="text-textSmall text-grays-gray500">(150)</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-six" id="option-six" />
                    <Label htmlFor="option-six" className="text-grays-gray900 text-textSmall">
                      Beauty & Health <span className="text-textSmall text-grays-gray500">(150)</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-seven" id="option-seven" />
                    <Label htmlFor="option-seven" className="text-grays-gray900 text-textSmall">
                      Bread & Bakery <span className="text-textSmall text-grays-gray500">(150)</span>
                    </Label>
                  </div>
                </RadioGroup>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                <Slider
                  defaultValue={[0, 1000]}
                  max={1000}
                  min={0}
                  step={1}
                  // value={range}
                  // onValueChange={handleRangeChange}
                  // formatLabel={(value) => `${value} `}
                />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="w-[75%] bg-gray-400 transition-width duration-500">Products</div>
      </div>
    </div>
  )
}

export default Shop
