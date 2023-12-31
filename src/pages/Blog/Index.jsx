import { useEffect, useState } from 'react'

import BlogContext from './context/BlogContext'
import { Outlet } from 'react-router-dom'

import BlogControl from './components/BlogControl'
import { instance } from '../../utils/apiRequest'

const Index = () => {
  const [data, setData] = useState([])
  const [filterData, setFilterData] = useState([])

  const GetData = async () => {
    const res = await instance.get('articles/')
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
