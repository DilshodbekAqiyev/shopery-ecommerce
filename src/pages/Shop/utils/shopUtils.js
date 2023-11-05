export const filterProducts = (state, dispatch) => {
  const { data, categoryFilter, priceFilter, ratingFilter, tagFilter } = state
  console.log(data)
  const filteredData = data?.filter((product) => {
    return (
      (categoryFilter === 'All Categories' || product.category === categoryFilter) &&
      product.discountPrice >= priceFilter[0] &&
      product.discountPrice <= priceFilter[1] &&
      (!ratingFilter || product.rating >= ratingFilter) &&
      (!tagFilter || product.tag.includes(tagFilter))
    )
  })

  dispatch({ type: 'SET_FILTERED_PRODUCTS', payload: filteredData })
}
