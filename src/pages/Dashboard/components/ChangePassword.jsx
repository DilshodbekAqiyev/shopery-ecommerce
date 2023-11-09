import { Label } from '@radix-ui/react-label'
import { Button } from '../../../components/ui/button'

function ChangePassword() {
  return (
    <div>
      <div className="border w-[984px] mt-[40px] rounded-lg">
        <h3 className=" mx-[24px]  my-[16px] text-[20px] font-[500]  leading-[30px] text-grays-gray900 ">
          Change Password
        </h3>
        <div className="w-100% h-[1.5px] bg-[#E5E5E5]"></div>
        <div className=" mx-[24px] my-[24px]">
          <div className="mb-[16px]">
            <Label
              htmlFor={`password`}
              className="block text-grays-gray900  text-[14px ] leading-[21px] font-[400] cursor-pointer"
            >
              Current Password
            </Label>
            <input
              className="border-solid focus:grays-gray600  outline-none drop-shadow-sm transition-all duration-200 ease-in-out   focus:bg-white focus:ring-1 focus:ring-[#234f1e] text-grays-gray600 border mt-[6px]  w-[936px] rounded-lg py-[14px] px-[16px] text-[16px] font-[400]  leading-[21px]"
              type="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className='flex items-center gap-[16px] '>
            <div className="mb-[16px]">
              <Label
                htmlFor={`password`}
                className="block text-grays-gray900  text-[14px ] leading-[21px] font-[400] cursor-pointer"
              >
                New Password Password
              </Label>
              <input
                className="border-solid focus:grays-gray600  outline-none drop-shadow-sm transition-all duration-200 ease-in-out   focus:bg-white focus:ring-1 focus:ring-[#234f1e] text-grays-gray600 border mt-[6px]  w-[460px] rounded-lg py-[14px] px-[16px] text-[16px] font-[400]  leading-[21px]"
                type="text"
                id="password"
                placeholder="Password"
              />
            </div>
            <div className="mb-[16px]">
              <Label
                htmlFor={`password`}
                className="block text-grays-gray900  text-[14px ] leading-[21px] font-[400] cursor-pointer"
              >
                Confirm Password
              </Label>
              <input
                className="border-solid focus:grays-gray600  outline-none drop-shadow-sm transition-all duration-200 ease-in-out   focus:bg-white focus:ring-1 focus:ring-[#234f1e] text-grays-gray600 border mt-[6px]  w-[460px] rounded-lg py-[14px] px-[16px] text-[16px] font-[400]  leading-[21px]"
                type="email"
                id="email"
                placeholder="Password"
              />
            </div>
          </div>
          <Button className=" mt-[16px] text-[14px] rounded-[43px] font-[600] leading-[16px] hover:bg-[#234f1e]">
              Change Password
            </Button>
        </div>
      </div>
    </div>
  )
}

export default ChangePassword
