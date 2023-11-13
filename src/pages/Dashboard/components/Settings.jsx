import AccountSettings from "./AccountSettings"
import BillingAddress from "./BillingAddress"
import ChangePassword from "./ChangePassword"

function Settings() {
  return (
    <div>
      <AccountSettings></AccountSettings>
      <BillingAddress></BillingAddress>
      <ChangePassword></ChangePassword>
    </div>
  )
}

export default Settings