import { useEffect, useState } from 'react'

import axios from 'axios'
import BlogContext from './context/BlogContext'
import { Outlet } from 'react-router-dom'
import BlogControl from './components/BlogControl'

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
      <div className="blog flex gap-[32px] max-w-[1320px] mx-auto mt-[34px]  mb-[80px]">
        <BlogControl />
        <Outlet />
      </div>
    </BlogContext.Provider>
  )
}

export default Index
