import { Outlet } from 'react-router-dom'

import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

import BreadCrump from '../common/BreadCrump/BreadCrump'
import SendEmail from '../common/sendEmail'

function RootLayout() {
  return (
    <>
      <Navbar />
      <BreadCrump />
      <Outlet />
      <div className="border-y bg-greenGrays-greenGray0.5">
        <SendEmail />
      </div>
      <Footer />
    </>
  )
}

export default RootLayout
