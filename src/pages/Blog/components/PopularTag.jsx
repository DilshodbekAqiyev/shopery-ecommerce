import PropTypes from 'prop-types'
import { Button } from '../../../components/ui/button'

const BlogPopularTag = ({ data, setFilterData }) => {
  const arr = []
  const obj = {}
  data.forEach((data) => {
    data.tags.forEach((tag) => {
      arr.push(tag)
    })
  })

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] = obj[arr[i]] + 1
    } else {
      obj[arr[i]] = 1
    }
  }
  const Tags = Object.keys(obj)
  console.log(arr)
  console.log(Tags)

  return (
    <div>
      <h3 className="mb-[16px] mt-[20px] font-bold">Popular tag</h3>
      <div className="flex flex-wrap gap-[8px] ">
        <Button className=" bg-gray-50  rounded-[30px] px-[16px] py-2 text-gray-900 "> Healthy</Button>
        <Button className="rounded-[30px] px-[16px] py-2   "> Meat</Button>

        {Tags.map((tag, idx) => {
          return (
            <Button
              key={idx}
              value={tag}
              className=" bg-gray-50  rounded-[30px] px-[16px] py-2 text-gray-900 hover:text-white "
            >
              {tag}
            </Button>
          )
        })}
      </div>
    </div>
  )
}

export default BlogPopularTag
BlogPopularTag.propTypes = {
  data: PropTypes.array,
  setFilterData: PropTypes.any,
}
