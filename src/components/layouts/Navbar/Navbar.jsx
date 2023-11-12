import NavbarLinks from './NavbarLinks/NavbarLinks'
import NavbarTop from './NavbarTop/NavbarTop'
import NavbarMiddle from './NavbarMiddle/NavbarMiddle'

const Navbar = () => {
  return (
    <div className="flex flex-col max-w-full">
      <NavbarTop />
      <NavbarMiddle />
      <NavbarLinks />
    </div>
  )
}

export default Navbar
