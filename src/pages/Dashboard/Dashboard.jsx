import { Outlet } from "react-router-dom"
import Navigation from "./components/Navigation"
function Dashboard() {
    return (
        <div className="container mb-[50px]">
          <div className="flex   gap-[24px]">
            <Navigation/>
            <Outlet />
            </div>
          </div>
       
    )
}

export default Dashboard