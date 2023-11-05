import { useEffect } from 'react'

import { useShopContext } from '../../contexts/shop/ShopContext'

import { instance } from '../../utils/apiRequest'

import { Accordion } from '../../components/ui/accordion'

import ProductCard from '../../components/common/Cards/ProductCard'

import PopularTags from './components/PopularTags'
import AllCategoriesComponent from './components/AllCategories'
import SliderComponent from './components/SliderComponent'
import Rating from './components/Rating'
import TopComponent from './components/TopComponent'

import { filterProducts } from './utils/shopUtils'

function Shop() {
  const { state, dispatch } = useShopContext()

  const filteredData = state.filteredData

  const getData = async () => {
    const data = await instance.get('products')
    dispatch({ type: 'SET_DATA', payload: data.data })
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    filterProducts(state, dispatch)
  }, [state, dispatch])

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
            {filteredData?.length ? (
              filteredData.map((item) => <ProductCard key={item.id} {...item} />)
            ) : (
              <h1>No products match the selected filters.</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
