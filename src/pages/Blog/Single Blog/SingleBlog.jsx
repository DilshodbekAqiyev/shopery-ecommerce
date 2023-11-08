import { useParams } from 'react-router-dom'

const SingleBlog = () => {
  const { CardID } = useParams()
  console.log(CardID)
  return (
    <div className="singleBlog w-[872px]">
      <div>
        <img src="/assets/images/blog/img3.svg" alt="img" />
      </div>
    </div>
  )
}

export default SingleBlog
