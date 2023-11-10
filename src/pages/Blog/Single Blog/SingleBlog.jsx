import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import BlogContext from '../context/BlogContext'

const SingleBlog = () => {
  const { CardID } = useParams()

  console.log(CardID)
  const { data } = useContext(BlogContext)
  // const { data } = DATA

  const singleCardData = data.filter((card) => card.id == CardID)

  // singleCardData  shu datani ichida to`liq ma`lumotlar bor shu object orqali foydalanamiz !!!

  console.log(singleCardData)
  return (
    <div className="singleBlog w-[872px]">
      <div>
        <img src="/assets/images/blog/img3.svg" alt="img" />
      </div>
    </div>
  )
}

export default SingleBlog
