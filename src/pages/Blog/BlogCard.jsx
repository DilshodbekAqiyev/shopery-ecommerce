const BlogCard = () => {
  return (
    <div className="blogCard">
      <div className="blogCardTop">
        <img src="" alt="" />
        <div>
          <h4>18</h4>
          <p>NOV</p>
        </div>
      </div>
      <div className="blogCartBottom">
        <ul>
          <li>
            <a href="#2">
              <img src="" alt="img" />
              <span>Food</span>
            </a>
          </li>
          <li>
            <a href="#2">
              <img src="" alt="img" />
              <span>
                {65}
                Comments
              </span>
            </a>
          </li>
          <li>
            <a href="#2">
              <img src="" alt="img" />
              <span>Food</span>
            </a>
          </li>
        </ul>
        <h4>Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.</h4>
        <a href="#2">
          {' '}
          <span>Read More</span> <img src="" alt="img" />
        </a>
      </div>
    </div>
  )
}

export default BlogCard
