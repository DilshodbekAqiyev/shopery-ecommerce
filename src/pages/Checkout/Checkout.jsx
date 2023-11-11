import { Input } from '../../components/ui/input'
import { Checkbox } from '../../components/ui/checkbox'
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select'
import { RadioGroup } from '../../components/ui/radio-group'
import { Button } from '../../components/ui/button'
import { data } from './components/CountryData'
import { useReducer, useState } from 'react'
import { CHECKOUT_TYPES } from '../../contexts/checkoutUser/checkoutType'
import { CheckoutReducer } from '../../contexts/checkoutUser/CheckoutInfo'
import { useEffect } from 'react'
import { instance } from '../../utils/apiRequest'
import axios from 'axios'
function Checkout() {
  const [city1, setCity1] = useState([])
  const [token, setToken] = useState('')
  const [cor, setCor] = useState({})
  const [newData, setNewData] = useState({})

  function setCountry(country) {
    const states = data.filter((el) => el.state === country)
    setCity1(states)
  }

  const initialState = { ...cor }
  const [state, dispatch] = useReducer(CheckoutReducer, initialState)
  useEffect(() => {
    setToken(localStorage.getItem('token'))
    // eslint-disable-next-line no-extra-semi
    ;(async () => {
      const response = await instance.get(`users`)
      const correctedData = response?.data?.filter((el) => el.token === token)
      setCor(correctedData[0]?.billingAddress)
      setNewData(correctedData)
    })()
  }, [])
  const editUser = async () => {
    newData[0].billingAddress = { ...initialState, ...state }
    // console.log({ ...newData })
    axios
      .patch(`https://jsonplaceholder.typicode.com/posts/${token}`, newData)
      .then((response) => {
        console.log(response)
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const { city, companyName, country, email, firstName, lastName, phone, streetAddress, zipCode } = cor
  return (
    <div className="container flex justify-between mt-5">
      <div className=" w-4/6 pr-6">
        <h1 className=" text-[24px] font-medium">Billing Information</h1>
        <div className=" flex mt-5 justify-between">
          <div className=" w-1/4">
            <label>
              <p className=" mb-2">Firstname</p>
              <Input
                defaultValue={firstName}
                onChange={(e) => dispatch({ type: CHECKOUT_TYPES.FIRST_NAME, payload: e.target.value })}
                placeholder="your firstname"
              />
            </label>
          </div>
          <div className=" w-1/4">
            <label>
              <p className=" mb-2">Last name</p>
              <Input
                defaultValue={lastName}
                onChange={(e) => dispatch({ type: CHECKOUT_TYPES.LAST_NAME, payload: e.target.value })}
                placeholder="your lastname"
              />
            </label>
          </div>
          <div className=" w-1/4">
            <label>
              <p className=" mb-2">Company Name</p>
              <Input
                defaultValue={companyName}
                onChange={(e) => dispatch({ type: CHECKOUT_TYPES.COMPANY_NAME, payload: e.target.value })}
                placeholder="Company name"
              />
            </label>
          </div>
        </div>
        <div className=" mt-5">
          <label>
            <p className=" mb-2">Street Address</p>
            <Input
              defaultValue={streetAddress}
              onChange={(e) => dispatch({ type: CHECKOUT_TYPES.STREET_ADRESS, payload: e.target.value })}
              placeholder="Email"
            />
          </label>
        </div>
        <div className=" flex mt-5 justify-between">
          <div className=" w-1/4">
            <label>
              <p className=" mb-2">Country / Region</p>
              <select
                onChange={(val) => {
                  setCountry(val.target.value)
                  dispatch({ type: CHECKOUT_TYPES.REGION, payload: val.target.value })
                }}
              >
                <option selected disabled>
                  {country}
                </option>
                {data?.map((el, idx) => {
                  return (
                    <option key={idx} value={el.state}>
                      {el.state}{' '}
                    </option>
                  )
                })}
              </select>
            </label>
          </div>
          <div className=" w-1/6">
            <label>
              <p className=" mb-2">States</p>
              <select onChange={(e) => dispatch({ type: CHECKOUT_TYPES.STATES, payload: e.target.value })}>
                <option selected disabled>
                  {city}
                </option>
                {city1[0]?.cities?.map((el, idx) => {
                  return (
                    <option key={idx} value={el} className="cursor-pointer text-gray-600 font-normal text-xs">
                      {el}
                    </option>
                  )
                })}
              </select>
            </label>
          </div>
          <div className=" w-1/4">
            <label>
              <p className=" mb-2">Zip code</p>
              <Input
                defaultValue={zipCode}
                onChange={(e) => dispatch({ type: CHECKOUT_TYPES.ZIP_CODE, payload: e.target.value })}
                placeholder="zip code"
              />
            </label>
          </div>
        </div>
        <div className=" flex mt-5 justify-between">
          <div className=" w-2/5">
            <label>
              <p className=" mb-2">Email</p>
              <Input
                defaultValue={email}
                onChange={(e) => dispatch({ type: CHECKOUT_TYPES.EMAIL, payload: e.target.value })}
                placeholder="Email Address"
              />
            </label>
          </div>
          <div className=" w-2/5">
            <label>
              <p className=" mb-2">Phone</p>
              <Input
                defaultValue={phone}
                type="number"
                onChange={(e) => dispatch({ type: CHECKOUT_TYPES.PHONE, payload: e.target.value })}
                placeholder="Phone number"
              />
            </label>
          </div>
        </div>
        <div className=" mt-5">
          <label className="flex">
            {' '}
            <Checkbox onCheckedChange={(e) => console.log(e.onChange)} type="checkbox" checked={true} />
            <span className=" ml-2 text-[14px]"> Ship to a different address</span>
          </label>
        </div>
        <div className=" h-[1px] bg-slate-300 my-8"></div>

        <div>
          <h1 className=" text-[24px] font-medium">Additional Info</h1>
          <div className=" mt-5">
            <label>
              <p className=" mb-2">Order Notes (Optional)</p>
              <Input
                onChange={(e) => dispatch({ type: CHECKOUT_TYPES.ADDITIONAL_INFO, payload: e.target.value })}
                className=" py-9 mb-20"
                placeholder="Notes about your order, e.g. special notes for delivery"
              />
            </label>
          </div>
        </div>
      </div>
      <div className=" w-1/3 rounded-xl p-6 border-gray-300 border">
        <h1 className=" text-[20px] mb-6 font-medium">Payment Method</h1>
        <div>
          <RadioGroup defaultValue="option-1" className="flex flex-col gap-3">
            <label>
              {' '}
              <input name="pay" type="radio" />
              <span className=" text-[14px] ml-2 font-light">Cash on Delivery</span>
            </label>
            <label>
              <input name="pay" type="radio" />
              <span className=" text-[14px] ml-2 font-light">Paypal</span>
            </label>
            <label>
              {' '}
              <input name="pay" type="radio" />
              <span className=" text-[14px] ml-2 font-light">Amazon Pay</span>
            </label>
          </RadioGroup>
        </div>
        <div className=" my-6 flex justify-center">
          <Button onClick={() => editUser()} className=" w-full rounded-3xl">
            Place Order
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Checkout
