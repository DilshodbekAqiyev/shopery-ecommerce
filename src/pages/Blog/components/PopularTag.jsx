import PropTypes from 'prop-types'
import { Button } from '../../../components/ui/button'

const BlogPopularTag = ({ data, setFilterData }) => {
  const arr = []
  const obj = {}
  data.forEach((data) => {
    arr.push(data.tags.join())
  })

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] = obj[arr[i]] + 1
    } else {
      obj[arr[i]] = 1
    }
  }
  console.log(arr)
  console.log(obj)

  return (
    <div>
      <h3 className="mb-[16px] mt-[20px] font-bold">Popular tag</h3>
      <div className="flex flex-wrap gap-[8px] ">
        <Button className=" bg-gray-50  rounded-[30px] px-[16px] py-2 text-gray-900 "> Healthy</Button>
        <Button className="rounded-[30px] px-[16px] py-2   "> Meat</Button>
        <Button className=" bg-gray-50  rounded-[30px] px-[16px] py-2 text-gray-900"> Healthy</Button>
        <Button className=" bg-gray-50  rounded-[30px] px-[16px] py-2 text-gray-900"> Meat</Button>
        <Button className=" bg-gray-50  rounded-[30px] px-[16px] py-2 text-gray-900"> Healthy</Button>
        <Button className=" bg-gray-50  rounded-[30px] px-[16px] py-2 text-gray-900"> Meat</Button>
        <Button className=" bg-gray-50  rounded-[30px] px-[16px] py-2 text-gray-900"> Healthy</Button>
        <Button className=" bg-gray-50  rounded-[30px] px-[16px] py-2 text-gray-900"> Meat</Button>
        <Button className=" bg-gray-50  rounded-[30px] px-[16px] py-2 text-gray-900"> Healthy</Button>
        <Button className=" bg-gray-50  rounded-[30px] px-[16px] py-2 text-gray-900"> Meat</Button>
        <Button className=" bg-gray-50  rounded-[30px] px-[16px] py-2 text-gray-900"> Healthy</Button>
      </div>
    </div>
  )
}

export default BlogPopularTag
BlogPopularTag.propTypes = {
  data: PropTypes.array,
  setFilterData: PropTypes.any,
}
