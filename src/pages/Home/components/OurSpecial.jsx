// import { LazyLoadImage } from 'react-lazy-load-image-component'
// import 'react-lazy-load-image-component/src/effects/blur.css'

import { Button } from '../../../components/ui/button'
import { ArrowRight } from 'lucide-react'
const special = [
  { title: '100% Fresh Cow Milk', id: 1 },
  { title: 'Water &Soft Drink', id: 2 },
  { title: 'Quick Breakfast', id: 3 },
]
function OurSpecial() {
  return (
    <div className=" flex container justify-between py-24">
      {special.map((el) => {
        return (
          <div
            className=" px-6 py-10"
            key={el.id}
            style={{
              backgroundImage: `url(/assets/images/special/special-top-${el.id}.png)`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              height: '255px',
              width: '424px',
            }}
          >
            <h1 className=" text-[32px] font-semibold">{el.title}</h1>
            <Button className=" my-5">
              shop now <ArrowRight />
            </Button>
          </div>
        )
      })}
    </div>
  )
}

export default OurSpecial
