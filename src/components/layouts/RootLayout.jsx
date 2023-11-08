import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'
import BreadCrump from '../common/BreadCrump/BreadCrump'

function RootLayout() {
  return (
    <>
      <Navbar />
      <BreadCrump />
      <Outlet />
      <Footer />
    </>
  )
}

export default RootLayout
