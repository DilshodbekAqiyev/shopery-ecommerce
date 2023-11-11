import { useContext, useEffect, useState } from 'react'
import BlogContext from '../context/BlogContext'

const BlogTopCategories = () => {
  const DATA = useContext(BlogContext)

  const { data, setFilterData } = DATA

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
                setCurrentCategory(currentCategory == category[0] ? '' : category[0])
              }}
              className={`flex justify-between item-center pb-[10px ] py-[3px] rounded cursor-pointer font-[450] hover:text-primary ${
                category[0] == currentCategory ? 'text-primary bg-secondary ' : ''
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
