import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

const BlogTopCategories = ({ data, setFilterData }) => {
  const [currentCategory, setCurrentCategory] = useState('')

  useEffect(() => {
    if (currentCategory == '') {
      setFilterData([...data])
    } else {
      const newData = data.filter((d) => d.category == currentCategory)
      setFilterData([...newData])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCategory])

  const arrForData = []
  const objForData = {}

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
  const dataKey = Object.entries(objForData)

  // ---------------------------------------------------
  return (
    <div>
      <h3 className="mb-[20px] font-bold">Top Categories</h3>
      <ul className="flex flex-col gap-4">
        {dataKey.map((category, idx) => {
          return (
            <li
              key={idx}
              onClick={() => {
                setCurrentCategory(category[0])
              }}
              className={`flex justify-between item-center pb-[10px ] py-[3px] rounded cursor-pointer hover:text-primary ${
                category[0] == currentCategory ? 'text-primary bg-secondary font-[500]' : ''
              }`}
            >
              <p>{category[0]}</p>
              <p>({category[1]})</p>
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
  setFilterData: PropTypes.any,
}
