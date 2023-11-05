import { useEffect, useState } from 'react'
import Blog from './Blog'
import axios from 'axios'

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

  return (
    <div>
      <Blog data={data} filterData={filterData} setFilterData={setFilterData} />
    </div>
  )
}

export default Index
