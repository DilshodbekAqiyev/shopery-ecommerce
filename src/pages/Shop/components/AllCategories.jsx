import PropTypes from 'prop-types'

import { AccordionContent, AccordionItem, AccordionTrigger } from '../../../components/ui/accordion'
import { RadioGroup } from '../../../components/ui/radio-group'
import { Label } from '../../../components/ui/label'

import { AllCategoriesData } from '../__mock__'

function AllCategories({ filterProducts }) {
  const handleCategoryChange = (selectedCategory) => {
    filterProducts(selectedCategory)
  }

  return (
    <AccordionItem value="item-1">
      <AccordionTrigger className="hover:no-underline">All Categories</AccordionTrigger>
      <AccordionContent>
        <RadioGroup defaultValue="option-1" className="flex flex-col gap-3">
          {AllCategoriesData.map(({ id, title, size }) => (
            <div className="flex items-center space-x-2" key={id}>
              <input
                type="radio"
                className="w-5 h-5"
                value={`option-${id}`}
                id={`option-${id}`}
                name="category"
                onChange={() => handleCategoryChange(title)}
              />
              <Label htmlFor={`option-${id}`} className="text-grays-gray900 text-textSmall cursor-pointer">
                {title}
                <span className="text-textSmall text-grays-gray500">({size})</span>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </AccordionContent>
    </AccordionItem>
  )
}

export default AllCategories

AllCategories.propTypes = {
  filterProducts: PropTypes.func,
}
