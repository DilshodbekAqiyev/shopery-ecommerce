import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'
import Home from '../../pages/Home/Home'

function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <Home />
    </>
  )
}

export default RootLayout
