import { useState } from 'react'
import { AccordionContent, AccordionItem, AccordionTrigger } from '../../../components/ui/accordion'
import { Badge } from '../../../components/ui/badge'
import { PopularTagsData } from '../__mock__'

function PopularTags() {
  const [badgeVariant, setBadgeVariant] = useState('secondary')

  const handleBadgeClick = () => {
    setBadgeVariant(badgeVariant === 'default' ? 'secondary' : 'default')
  }

  return (
    <AccordionItem value="item-4">
      <AccordionTrigger className="hover:no-underline">Popular Tag</AccordionTrigger>
      <AccordionContent className="flex">
        <div className="flex items-center gap-1 flex-wrap">
          {PopularTagsData.map(({ id, name }) => (
            <Badge key={id} variant={badgeVariant} onClick={handleBadgeClick}>
              {name}
            </Badge>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}

export default PopularTags
