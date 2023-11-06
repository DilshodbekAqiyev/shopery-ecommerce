import PropTypes from 'prop-types'

const BlogTopCategories = ({ filterData, data }) => {
  const arrForFilter = []
  const objForFilter = {}

  const arrForData = []
  const objForData = {}

  // filter-----------------------------------------------

  filterData.forEach((d) => {
    arrForFilter.push(d.category)
  })

  for (let i = 0; i < arrForFilter.length; i++) {
    if (objForFilter[arrForFilter[i]]) {
      objForFilter[arrForFilter[i]] = objForFilter[arrForFilter[i]] + 1
    } else {
      objForFilter[arrForFilter[i]] = 1
    }
  }

  // data ------------------------------------------------
  data.forEach((data) => {
    arrForData.push(data.category)
  })

  for (let i = 0; i < arrForData.length; i++) {
    if (objForData[arrForData[i]]) {
      objForData[arrForData[i]] = objForData[arrForData[i]] + 1
    } else {
      objForData[arrForData[i]] = 1
    }
  }
  const dataKey = Object.keys(objForData)

  // ---------------------------------------------------
  return (
    <div>
      <h3 className="mb-[20px] font-bold">Top Categories</h3>
      <ul className="flex flex-col gap-4">
        {dataKey.map((category, idx) => {
          return (
            <li key={idx} className="flex justify-between item-center pb-[16px ]">
              <p>{category}</p>
              <p>({objForFilter[category] ? objForFilter[category] : 0})</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default BlogTopCategories

BlogTopCategories.propTypes = {
  filterData: PropTypes.array,
  data: PropTypes.array,
}
