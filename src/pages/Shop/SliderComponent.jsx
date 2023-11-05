import { AccordionContent, AccordionItem, AccordionTrigger } from '../../components/ui/accordion'
import { Slider } from '../../components/ui/slider'

function SliderComponent() {
  return (
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
  )
}

export default SliderComponent
