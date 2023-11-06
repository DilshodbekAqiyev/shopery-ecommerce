import { useState } from 'react'

import { useShopContext } from '../../../contexts/shop/ShopContext'

import { AccordionContent, AccordionItem, AccordionTrigger } from '../../../components/ui/accordion'
import { Slider } from '../../../components/ui/slider'

function SliderComponent() {
  const [sliderValues, setSliderValues] = useState({
    min: 0,
    max: 0,
  })
  const [range, setRange] = useState([sliderValues?.min, sliderValues?.max])
  const { state, dispatch } = useShopContext()

  const onRangeChange = (newRange) => {
    dispatch({ type: 'SET_PRICE_FILTER', payload: newRange })
    setRange(newRange)
  }

  return (
    <AccordionItem value="item-2">
      <AccordionTrigger className="hover:no-underline">Price</AccordionTrigger>
      <AccordionContent>
        <Slider
          className="my-4"
          defaultValue={[sliderValues.min, sliderValues.max]}
          max={sliderValues?.max}
          min={0}
          step={1}
          values={range}
          onValueChange={onRangeChange}
          formatLabel={(value) => `${value} `}
        />
      </AccordionContent>
    </AccordionItem>
  )
}

export default SliderComponent
