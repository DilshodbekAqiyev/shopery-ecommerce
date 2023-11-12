import { useContext, useEffect, useState } from 'react'
import BlogContext from '../context/BlogContext'
import { useNavigate } from 'react-router-dom'

const BlogOurGallery = () => {
  const [state, setState] = useState([])

  const DATA = useContext(BlogContext)
  const { data } = DATA

  useEffect(() => {
    if (data.length > 7) {
      const newData = data.slice(0, 8)

      setState(newData)
    } else {
      setState(data)
    }
  }, [data])

  const navigate = useNavigate()

  return (
    <div>
      <h2 className="text-gray-900 font-bold">Our Gallery</h2>
      <div className="flex flex-wrap my-[20px] gap-[8px]">
        {state.map(({ previewImage, id }) => (
          <a onClick={() => navigate('blog/' + id)} key={id} className="cursor-pointer">
            <img src={previewImage} alt="img" className="w-[100px] h-[100px] rounded-[6px] " loading="lazy" />
          </a>
        ))}
      </div>
    </div>
  )
}

export default BlogOurGallery
