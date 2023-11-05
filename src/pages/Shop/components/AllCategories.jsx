import { useShopContext } from '../../../contexts/shop/ShopContext'

import { AccordionContent, AccordionItem, AccordionTrigger } from '../../../components/ui/accordion'
import { RadioGroup, RadioGroupItem } from '../../../components/ui/radio-group'
import { Label } from '../../../components/ui/label'

import { AllCategoriesData } from '../__mock__'

function AllCategories() {
  const { state, dispatch } = useShopContext()

  const handleCategoryChange = (selectedCategory) => {
    dispatch({ type: 'SET_CATEGORY_FILTER', payload: selectedCategory })
  }

  return (
    <AccordionItem value="item-1">
      <AccordionTrigger className="hover:no-underline">All Categories</AccordionTrigger>
      <AccordionContent>
        <RadioGroup defaultValue="option-1" className="flex flex-col gap-3">
          {AllCategoriesData.map(({ id, title, size }) => (
            <div className="flex items-center space-x-2" key={id}>
              <RadioGroupItem
                value={`option-${id}`}
                id={`option-${id}`}
                checked={state.categoryFilter === title}
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
