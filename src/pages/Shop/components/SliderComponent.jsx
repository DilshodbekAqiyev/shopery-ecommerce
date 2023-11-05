import { useState } from 'react'

import { useShopContext } from '../../../contexts/shop/ShopContext'

import { AccordionContent, AccordionItem, AccordionTrigger } from '../../../components/ui/accordion'
import { Slider } from '../../../components/ui/slider'

function SliderComponent() {
  const [values, setValues] = useState([0, 1000])
  const { state, dispatch } = useShopContext()

  const onRangeChange = (newRange) => {
    dispatch({ type: 'SET_PRICE_FILTER', payload: newRange })
    setValues(newRange)
  }

  return (
    <AccordionItem value="item-2">
      <AccordionTrigger className="hover:no-underline">Price</AccordionTrigger>
      <AccordionContent>
        <Slider
          defaultValue={state.priceFilter}
          range="true"
          max={1000}
          min={0}
          step={1}
          values={values}
          onValueChange={onRangeChange}
          className="my-4"
        />
      </AccordionContent>
    </AccordionItem>
  )
}

export default SliderComponent
