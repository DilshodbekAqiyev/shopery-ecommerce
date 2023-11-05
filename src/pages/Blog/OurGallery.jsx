const imgGallareys = [
  {
    id: 1,
    src: '/assets/images/fruits.jpg',
  },
  {
    id: 2,
    src: '/assets/images/fruits.jpg',
  },
  {
    id: 3,
    src: '/assets/images/fruits.jpg',
  },
  {
    id: 4,
    src: '/assets/images/fruits.jpg',
  },
  {
    id: 5,
    src: '/assets/images/fruits.jpg',
  },
  {
    id: 6,
    src: '/assets/images/fruits.jpg',
  },
  {
    id: 7,
    src: '/assets/images/fruits.jpg',
  },
  {
    id: 8,
    src: '/assets/images/fruits.jpg',
  },
]
const BlogOurGallery = () => {
  return (
    <div>
      <h2 className="text-gray-900 font-bold">Our Gallery</h2>
      <div className="flex flex-wrap my-[20px] gap-[8px]">
        {imgGallareys.map(({ src, id }) => (
          <img key={id} src={src} alt="img" className="w-[100px] h-[100px] rounded-[6px] " />
        ))}
      </div>
    </div>
  )
}

export default BlogOurGallery
