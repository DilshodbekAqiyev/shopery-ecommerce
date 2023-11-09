import PropTypes from 'prop-types'

import { AccordionContent, AccordionItem, AccordionTrigger } from '../../../components/ui/accordion'
import { Checkbox } from '../../../components/ui/checkbox'
import { Label } from '../../../components/ui/label'
import { useShopContext } from '../../../contexts/shop/ShopContext'

function Rating({ filterProducts }) {
  const { state } = useShopContext()

  const handleRatingChange = (selectedRating) => {
    filterProducts(selectedRating)
  }

  return (
    <AccordionItem value="item-3">
      <AccordionTrigger className="hover:no-underline">Rating</AccordionTrigger>
      <AccordionContent className="flex flex-col gap-3">
        {Array(5)
          .fill(undefined)
          .map((_, index) => {
            const rating = index + 1
            return (
              <div key={rating} className="flex items-center">
                <Checkbox
                  id={`rating-${rating}`}
                  onCheckedChange={() => handleRatingChange(rating)}
                  checked={state.ratingFilter === rating}
                />
                <Label
                  htmlFor={`rating-${rating}`}
                  className="flex items-center pl-2 cursor-pointer leading-5 text-grays-gray900 text-textSmall"
                >
                  {Array(5)
                    .fill(undefined)
                    .map((_, starIndex) => (
                      <img
                        key={starIndex}
                        src={`/assets/icons/${starIndex < rating ? 'star' : 'star-fill'}.svg`}
                        alt="Star"
                      />
                    ))}
                  &nbsp;
                  {rating}+
                </Label>
              </div>
            )
          })}
      </AccordionContent>
    </AccordionItem>
  )
}

export default Rating

Rating.propTypes = {
  filterProducts: PropTypes.func,
}
