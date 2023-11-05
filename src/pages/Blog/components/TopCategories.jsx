import PropTypes from 'prop-types'

const BlogTopCategories = ({ filterData }) => {
  const arr = []
  const obj = {}
  console.log(filterData)
  filterData.forEach((data) => {
    arr.push(data.category)
  })

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] = obj[arr[i]] + 1
    } else {
      obj[arr[i]] = 1
    }
  }

  const categorys = Object.entries(obj)

  return (
    <div>
      <h3 className="mb-[20px] font-bold">Top Categories</h3>
      <ul className="flex flex-col gap-4">
        {categorys.map((category, idx) => {
          return (
            <li key={idx} className="flex justify-between item-center pb-[16px ]">
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
}
