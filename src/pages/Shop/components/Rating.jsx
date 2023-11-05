import { AccordionContent, AccordionItem, AccordionTrigger } from '../../../components/ui/accordion'

import { AllRating } from '../__mock__'

function Rating() {
  return (
    <AccordionItem value="item-3">
      <AccordionTrigger className="hover:no-underline">Rating</AccordionTrigger>
      <AccordionContent className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          {AllRating.map(({ id, name, rating, labelName }) => (
            <div key={id} className="flex items-center">
              <input type="checkbox" id={labelName} className="accent-primary text-white w-4 h-4" />
              <label
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
              </label>
            </div>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}

export default Rating
