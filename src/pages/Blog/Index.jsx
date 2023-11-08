import { useEffect, useState } from 'react'
import Blog from './Blog'
import axios from 'axios'
import BlogContext from './context/BlogContext'

const Index = () => {
  const [data, setData] = useState([])
  const [filterData, setFilterData] = useState([])

  const GetData = async () => {
    const res = await axios.get('http://localhost:3000/articles')
    setData(res.data)
    console.log(res.data)
  }

  useEffect(() => {
    GetData()
  }, [])

  useEffect(() => {
    setFilterData(data)
  }, [data])

  const BlogData = {
    data,
    filterData,
    setFilterData,
  }

  return (
    <BlogContext.Provider value={BlogData}>
      <div>
        <Blog />
      </div>
    </BlogContext.Provider>
  )
}

export default Index
