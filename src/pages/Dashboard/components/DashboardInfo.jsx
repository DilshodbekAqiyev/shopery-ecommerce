
import History from "./History"
import Profile from "./Profile"
import UserAddress from "./UserAddress"

function DashboardInfo() {
  return (
    <div>
         <div className="flex gap-[24px]">
            <Profile/>
            <UserAddress/>
        </div>
        <History/>
    </div>
  )
}

export default DashboardInfo