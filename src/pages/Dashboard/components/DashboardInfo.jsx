import OrderHistory from "./OrderHistory"
import Profile from "./Profile"
import UserAddress from "./UserAddress"

function DashboardInfo() {
  return (
    <div>
         <div className="flex gap-[24px]">
            <Profile/>
            <UserAddress/>
        </div>
        <OrderHistory/>
    </div>
  )
}

export default DashboardInfo