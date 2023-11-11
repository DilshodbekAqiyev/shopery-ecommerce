import { Button } from '../../../components/ui/button'
import { useContext, useEffect, useState } from 'react'
import BlogContext from '../context/BlogContext'

const BlogPopularTag = () => {
  const DATA = useContext(BlogContext)

  const { data, setFilterData } = DATA

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

  // console.log(clicked)
  useEffect(() => {
    // const newFilterData = []
    // filterData.forEach((d) => {
    //   newFilterData.push(newFilterData?.includes(d) ? '' : d)
    // })
    // console.log(newFilterData, '1111')
    // setFilterData(newFilterData)
    change()
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                  ? `rounded-[30px] px-[16px] py-2 font-[450] cursor-pointer `
                  : ` bg-gray-50  rounded-[30px] px-[16px] py-2 text-gray-900 hover:text-white font-[450] cursor-pointer`
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
