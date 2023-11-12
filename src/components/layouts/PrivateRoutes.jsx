import { Outlet, Navigate } from 'react-router-dom'
import { token } from '../../utils/constants'

const PrivateRoutes = () => {
  return token ? <Outlet /> : <Navigate to="/sign-in" />
}

export default PrivateRoutes
