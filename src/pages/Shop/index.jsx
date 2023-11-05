import { useEffect, useState } from 'react'
import PopularTags from './PopularTags'
import AllCategoriesComponent from './AllCategories'
import { Accordion } from '../../components/ui/accordion'
import SliderComponent from './SliderComponent'
import Rating from './Rating'
import TopComponent from './TopComponent'
import ProductCard from '../../components/common/Cards/ProductCard'
import { instance } from '../../utils/apiRequest'

function Shop() {
  const [data, setData] = useState([])

  const getData = async () => {
    const data = await instance.get('products')
    setData(data.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="max-w-[1320px] mx-auto pt-8 transition-all ease-linear duration-500">
      <div className="pb-6 flex justify-between items-center">
        <TopComponent />
      </div>
      <div className="flex justify-between">
        <div className="w-[19%]">
          <Accordion type="multiple" className="w-full">
            <AllCategoriesComponent />
            <SliderComponent />
            <Rating />
            <PopularTags />
          </Accordion>
        </div>
        <div className="w-[80%]">
          <div className="flex justify-around flex-wrap items-center">
            {data?.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
