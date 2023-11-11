import { Link, useLocation } from 'react-router-dom'
import { LiaHomeSolid } from 'react-icons/lia'
import './BreadCrump.css'

function BreadCrump() {
  const location = useLocation()
  let currentLink = ''

  const breadCrump = location.pathname
    .split('/')
    .filter((crump) => crump !== '')
    .map((crump) => {
      currentLink = +`/${crump}`
      return (
        <div key={crump} id="crump">
          <Link to={currentLink}>{crump}</Link>
        </div>
      )
    })

  return (
    <div id="breadCrump">
      <div
        className={`flex items-center gap-3 text-grays-gray400 pl-[100px] ${
          location.pathname === '/' ? 'hidden' : ''
        } w-full py-12 z-50`}
        id="div"
      >
        <Link to={'/'}>
          <LiaHomeSolid size={22} />
        </Link>
        <span>{'>'}</span>
        {breadCrump}
      </div>
    </div>
  )
}

export default BreadCrump
