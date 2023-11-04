import { AccordionContent, AccordionItem, AccordionTrigger } from '../../components/ui/accordion'
import { SelectGroup, SelectLabel } from '../../components/ui/select'
import { AllRating } from './__mock__'
import { Checkbox } from '../../components/ui/checkbox'

function Rating() {
  return (
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
                    <img key={index} src={`/assets/icons/${index < rating ? 'star' : 'star-fill'}.svg`} alt="Star" />
                  ))}
                &nbsp;
                {name}
              </SelectLabel>
            </div>
          ))}
        </SelectGroup>
      </AccordionContent>
    </AccordionItem>
  )
}

export default Rating
