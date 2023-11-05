import PropTypes from 'prop-types'
import { Button } from '../../../components/ui/button'
import { useEffect, useState } from 'react'

const BlogPopularTag = ({ data, setFilterData }) => {
  const [clicked, setClicked] = useState([])

  const change = () => {
    let newFilterData = []
    if (clicked == '') {
      setFilterData([...data])
    } else {
      clicked.forEach((tags) => {
        data.forEach((i) => {
          if (i.tags.includes(tags)) {
            newFilterData.push(i)
          }
        })
      })

      setFilterData([...newFilterData])
    }
  }

  useEffect(() => {
    change()
  }, [clicked])

  const onClickButton = (val) => {
    if (clicked.indexOf(val) == -1) {
      setClicked([...clicked, val])
    } else {
      const newBtn = []
      clicked.forEach((tag) => {
        if (tag !== val) {
          newBtn.push(tag)
        }
      })
      setClicked(newBtn)
    }
  }

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

  console.log(clicked, 'dd')
  return (
    <div>
      <h3 className="mb-[16px] mt-[20px] font-bold">Popular tag</h3>
      <div className="flex flex-wrap gap-[8px] ">
        {Tags.map((tag, idx) => {
          return (
            <Button
              key={idx}
              value={tag}
              onClick={() => onClickButton(tag)}
              className={
                clicked.includes(tag)
                  ? `rounded-[30px] px-[16px] py-2  `
                  : ` bg-gray-50  rounded-[30px] px-[16px] py-2 text-gray-900 hover:text-white`
              }
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
