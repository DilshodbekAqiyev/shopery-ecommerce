
import { Button } from '../../../components/ui/button'
import { Label } from '../../../components/ui/label'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from '../../../components/ui/select'
function BillingAddress() {
  return (
    <div>
        <div className="border w-[984px] mt-[40px] rounded-lg">
        <h3 className=" mx-[24px]  my-[16px] text-[20px] font-[500]  leading-[30px] text-grays-gray900 ">
          Billing Address
        </h3>
        <div className="w-100% h-[1.5px] bg-[#E5E5E5]"></div>
        <div className=" mx-[24px] my-[24px]">
          <div className="flex justify-between items-center gap-[16px]">
            <div className="mb-[16px]">
              <Label
                htmlFor={`firstName`}
                className="block text-grays-gray900  text-[14px ] leading-[21px] font-[400] cursor-pointer"
              >
                First name
              </Label>
              <input
                className="border-solid focus:grays-gray600  outline-none drop-shadow-sm transition-all duration-200 ease-in-out   focus:bg-white focus:ring-1 focus:ring-[#234f1e] text-grays-gray600 border mt-[6px]  w-[302px] rounded-lg py-[14px] px-[16px] text-[16px] font-[400]  leading-[21px]"
                type="text"
                id="firstName"
                defaultValue="Dianne"
              />
            </div>
            <div className="mb-[16px]">
              <Label
                htmlFor={`firstName`}
                className="block text-grays-gray900  text-[14px ] leading-[21px] font-[400] cursor-pointer"
              >
                Last Name
              </Label>
              <input
                className="border-solid focus:grays-gray600  outline-none drop-shadow-sm transition-all duration-200 ease-in-out   focus:bg-white focus:ring-1 focus:ring-[#234f1e] text-grays-gray600 border mt-[6px]  w-[302px] rounded-lg py-[14px] px-[16px] text-[16px] font-[400]  leading-[21px]"
                type="text"
                id="firstName"
                defaultValue="Russell"
              />
            </div>
            <div className="mb-[16px]">
              <Label
                htmlFor={`company`}
                className="block text-grays-gray900  text-[14px ] leading-[21px] font-[400] cursor-pointer"
              >
                Company Name <span className="text-[14px]  font-[400]  leading-[21px] text-[#666]">(optional)</span>
              </Label>
              <input
                className="border-solid focus:grays-gray600  outline-none drop-shadow-sm transition-all duration-200 ease-in-out   focus:bg-white focus:ring-1 focus:ring-[#234f1e] text-grays-gray600 border mt-[6px]  w-[302px] rounded-lg py-[14px] px-[16px] text-[16px] font-[400]  leading-[21px]"
                type="text"
                id="company"
                defaultValue="Zakirsoft"
              />
            </div>
          </div>
          <div className="mb-[16px] ">
            <Label
              htmlFor={`address`}
              className="block text-grays-gray900  text-[14px ] leading-[21px] font-[400] cursor-pointer"
            >
              Street Address
            </Label>
            <input
              className="block w-[936px] border-solid focus:grays-gray600  outline-none drop-shadow-sm transition-all duration-200 ease-in-out   focus:bg-white focus:ring-1 focus:ring-[#234f1e]  text-grays-gray900 border mt-[6px]   rounded-lg py-[14px] px-[16px] text-[16px] font-[400]  leading-[21px]"
              type="text"
              id="address"
              defaultValue="4140 Par|"
            />

            <div className="mt-[30px]  flex  gap-[20px] items-center pt-[50px]">
              <div className='w-[302px]'>
                <h3 className='mb-[5px]' >Country / Region</h3>
                <Select >
                <SelectTrigger className=" w-[302px]">
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel >United States</SelectLabel>
                    <SelectItem value="apple">	Afghanistan</SelectItem>
                    <SelectItem value="banana">	Albania</SelectItem>
                    <SelectItem value="blueberry">	Benin</SelectItem>
                    <SelectItem value="grapes">China</SelectItem>
                    <SelectItem value="pineapple">North Korea</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              </div>
              <div>
                <h3 className='mb-[5px]'>States</h3>
                <Select>
                  <SelectTrigger className="w-[302px]">
                    <SelectValue placeholder="Washington DC" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Alaska</SelectLabel>
                      <SelectItem value="apple">Alabama</SelectItem>
                      <SelectItem value="banana">Arizona</SelectItem>
                      <SelectItem value="blueberry">Arkansas </SelectItem>
                      <SelectItem value="grapes">California </SelectItem>
                      <SelectItem value="pineapple">Delaware</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className='w-[302px] '>
                <h3 className='mb-[6px]'>Zip Code</h3>
                <div className='rounded-[6px] border py-[8px] text-[16px] text-grays-gray600'>
                  <span className='flex  pl-[16px]'>20033</span>
                </div>
              </div>
            </div>
            <div className='flex gap-[16px]'>

              <div>
                <Label className="mt-4 block mb-[4px] text-[14px] font-[400]  leading-[21px]" htmlFor="emailBill">Email</Label>
                <input className='border-[1.5px] text-[14px ] leading-[21px] w-[460px] px-[14px] py-[11px] rounded-[6px] border-solid focus:grays-gray600  outline-none drop-shadow-sm transition-all duration-200 ease-in-out   focus:bg-white focus:ring-1 focus:ring-[#234f1e] v' id='emailBill' type="email"   placeholder='dianne.russell@gmail.com'/>
              </div>
            <div>
              <Label className="mt-4 block mb-[4px] text-[14px] font-[400]  leading-[21px]" htmlFor="phone">Phone</Label>
              <input className='border-[1.5px] text-[14px ] leading-[21px] w-[460px] px-[14px] py-[11px] rounded-[6px] border-solid focus:grays-gray600  outline-none drop-shadow-sm transition-all duration-200 ease-in-out   focus:bg-white focus:ring-1 focus:ring-[#234f1e] v' id='phone' type="phone"   placeholder='(603) 555-0123'/>
            </div>
            </div>
            <Button className=" mt-[16px] text-[14px] rounded-[43px] font-[600] leading-[16px] hover:bg-[#234f1e]">
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BillingAddress