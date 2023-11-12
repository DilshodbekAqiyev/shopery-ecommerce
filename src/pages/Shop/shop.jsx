import { useEffect, useState } from 'react'
import { useShopContext } from '../../contexts/shop/ShopContext'
import { instance } from '../../utils/apiRequest'
import { Accordion } from '../../components/ui/accordion'
import ProductCard from '../../components/common/Cards/ProductCard'
import PopularTags from './components/PopularTags'
import AllCategoriesComponent from './components/AllCategories'
import SliderComponent from './components/SliderComponent'
import Rating from './components/Rating'
import TopComponent from './components/TopComponent'
import { getUser } from '../../utils/utils'

function Shop() {
  const { state, dispatch } = useShopContext()
  const [newData, setNewData] = useState([])
  const [wishlist, setWishlist] = useState({})

  useEffect(() => {
    const getData = async () => {
      const response = await instance.get('products')
      const newData = response.data
      setNewData(newData)
    }

    getData()
  }, [dispatch])

  useEffect(() => {
    dispatch({ type: 'SET_FILTERED_DATA', payload: newData })
  }, [dispatch, newData])

  const filterProductsByCategory = (selectedCategory) => {
    const filteredData = state.data.filter((product) => product.category === selectedCategory)
    dispatch({ type: 'SET_CATEGORY_FILTER', payload: selectedCategory })
    dispatch({ type: 'SET_FILTERED_DATA', payload: filteredData })
  }

  const filterProductsByRating = (selectedRating) => {
    let filteredData

    selectedRating
      ? (filteredData = state.data.filter((product) => product.rating >= selectedRating))
      : (filteredData = state.data)

    dispatch({ type: 'SET_RATING_FILTER', payload: selectedRating })
    dispatch({ type: 'SET_FILTERED_DATA', payload: filteredData })
  }

  useEffect(() => {
    const filterData = () => {
      let filteredData = newData
      if (state.categoryFilter !== 'All Categories') {
        filteredData = filteredData.filter((product) => product.category === state.categoryFilter)
      }
      if (state.ratingFilter) {
        filteredData = filteredData.filter((product) => product.rating >= state.ratingFilter)
      }
      dispatch({ type: 'SET_FILTERED_DATA', payload: filteredData })
    }
    filterData()
  }, [state.categoryFilter, state.ratingFilter, newData, dispatch])

  useEffect(() => {
    getUser().then((user) =>
      setWishlist(
        user.wishlist.findIndex((wishItem) => {
          wishItem.id === state.data.id
          // console.log('wishItem:=>' + wishItem)
        }) === -1
      )
    )
  }, [])

  return (
    <div className="max-w-[1320px] mx-auto pt-8 transition-all ease-linear duration-500">
      <div className="pb-6 flex justify-between items-center">
        <TopComponent />
      </div>
      <div className="flex justify-between">
        <div className="w-[19%]">
          <Accordion type="multiple" className="w-full">
            <AllCategoriesComponent filterProducts={filterProductsByCategory} />
            <SliderComponent />
            <Rating filterProducts={filterProductsByRating} />
            <PopularTags />
          </Accordion>
        </div>
        <div className="w-[80%]">
          <div className="flex justify-around flex-wrap items-center gap-5">
            {state.categoryFilter === 'All Categories' ? (
              state?.data?.length ? (
                state.data.map((item) => <ProductCard isLiked={wishlist} key={item.id} {...item} />)
              ) : (
                <h1>No products match the selected filters.</h1>
              )
            ) : state.filteredProducts?.length ? (
              state.filteredProducts.map((item) => <ProductCard isLiked={wishlist} key={item.id} {...item} />)
            ) : (
              <h1>No results were found for these queries</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
