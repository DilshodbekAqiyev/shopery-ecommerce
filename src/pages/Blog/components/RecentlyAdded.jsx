import { useContext, useEffect, useState } from 'react'
import BlogContext from '../context/BlogContext'

const BlogRecentlyAdded = () => {
  const [state, setState] = useState([])
  const DATA = useContext(BlogContext)
  const { data } = DATA
  console.log(state, 'sort')

  useEffect(() => {
    const newData = data.sort((a, b) => {
      return Number(new Date(b.createdDate).getTime()) - Number(new Date(a.createdDate).getTime())
    })
    if (newData.length > 2) {
      setState(newData.slice(0, 3))
    } else {
      setState(newData)
    }
  }, [data])

  return (
    <div>
      <h2 className="font-bold">Recently Added</h2>
      <div className=" mt-[16px]">
        {state.map(({ id, title, previewImage, createdDate }) => {
          return (
            <div key={id} className="flex items-center gap-[16px] mt-[16px] font-[500]">
              <img src={previewImage} alt="img" className="w-[100px] h-[72px] rounded-[6px]" />
              <div>
                <h4 className="text-[14px]">{title}</h4>
                <div className="flex items-center gap-[6px]">
                  <img src={'/assets/icons/calendar.svg'} alt="calendar" />
                  <p>
                    {createdDate.slice(4, 7)} {createdDate.slice(8, 10)} ,{createdDate.slice(11, 15)}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default BlogRecentlyAdded
