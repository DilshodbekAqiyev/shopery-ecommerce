import { Input } from '../../components/ui/input'
import { Checkbox } from '../../components/ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select'
import { RadioGroup } from '../../components/ui/radio-group'
import { Button } from '../../components/ui/button'
function Checkout() {
  return (
    <div className="container flex justify-between mt-5">
      <div className=" w-4/6 pr-6">
        <h1 className=" text-[24px] font-medium">Billing Information</h1>
        <div className=" flex mt-5 justify-between">
          <div className=" w-1/4">
            <label>
              <p className=" mb-2">Firstname</p>
              <Input placeholder="your firstname" />
            </label>
          </div>
          <div className=" w-1/4">
            <label>
              <p className=" mb-2">Last name</p>
              <Input placeholder="your lastname" />
            </label>
          </div>
          <div className=" w-1/4">
            <label>
              <p className=" mb-2">Company Name</p>
              <Input placeholder="Company name" />
            </label>
          </div>
        </div>
        <div className=" mt-5">
          <label>
            <p className=" mb-2">Street Address</p>
            <Input placeholder="Email" />
          </label>
        </div>
        <div className=" flex mt-5 justify-between">
          <div className=" w-1/4">
            <label>
              <p className=" mb-2">Country / Region</p>
              <Select>
                <SelectTrigger className="w-max p-0  text-gray-600 font-normal text-xs hover:text-primary outline-none border-none gap-[6px] flex items-center justify-center">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usd" className="cursor-pointer text-gray-600 font-normal text-xs">
                    USD
                  </SelectItem>
                </SelectContent>
              </Select>
            </label>
          </div>
          <div className=" w-1/6">
            <label>
              <p className=" mb-2">States</p>
              <Select>
                <SelectTrigger className="w-max p-0  text-gray-600 font-normal text-xs hover:text-primary outline-none border-none gap-[6px] flex items-center justify-center">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usd" className="cursor-pointer text-gray-600 font-normal text-xs">
                    USD
                  </SelectItem>
                </SelectContent>
              </Select>
            </label>
          </div>
          <div className=" w-1/4">
            <label>
              <p className=" mb-2">Zip code</p>
              <Input placeholder="zip code" />
            </label>
          </div>
        </div>
        <div className=" flex mt-5 justify-between">
          <div className=" w-2/5">
            <label>
              <p className=" mb-2">Email</p>
              <Input placeholder="Email Address" />
            </label>
          </div>
          <div className=" w-2/5">
            <label>
              <p className=" mb-2">Phone</p>
              <Input type="number" placeholder="Phone number" />
            </label>
          </div>
        </div>
        <div className=" mt-5">
          <label className="flex">
            {' '}
            <Checkbox />
            <span className=" ml-2 text-[14px]"> Ship to a different address</span>
          </label>
        </div>
        <div className=" h-[1px] bg-slate-300 my-8"></div>
        <div>
          <h1 className=" text-[24px] font-medium">Additional Info</h1>
          <div className=" mt-5">
            <label>
              <p className=" mb-2">Order Notes (Optional)</p>
              <Input className=" py-9 mb-20" placeholder="Notes about your order, e.g. special notes for delivery" />
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
          <Button className=" w-full rounded-3xl">Place Order</Button>
        </div>
      </div>
    </div>
  )
}

export default Checkout
