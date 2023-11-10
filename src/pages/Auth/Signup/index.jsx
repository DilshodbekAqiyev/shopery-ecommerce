import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

import { Input } from "../../../components/ui/input";
import { Checkbox } from "../../../components/ui/checkbox";
import { Button } from "../../../components/ui/button";

import Container from "../../../components/common/Container";

export default function Signup() {
  const createUser = () => {
    console.log('Hi')
  }

  return (
    <Container>
      <div className="w-full h-[100vh] flex items-center justify-center">
        <div
          className="w-[520px] h-[432px] flex flex-col items-center gap-[20px] shadow-[0px_0px_56px_0px_rgba(0,38,3,0.08)] rounded-md p-[24px]">
          <h1 className="text-[32px] font-semibold">Create Account</h1>
          <div className="w-[100%] flex flex-col gap-[12px]">
            <div className="w-[100%] flex h-[49px] gap-2 items-center px-[14px] border rounded-md">
              <Input
                className="border-none focus-visible:ring-0 p-0 placeholder:text-gray-400"
                type="text"
                placeholder="Email" />
            </div>
            <div className="w-[100%] flex h-[49px] gap-2 items-center px-[14px] border rounded-md">
              <Input
                className="border-none h-[100%] focus-visible:ring-0 focus:outline-none p-0 placeholder:text-gray-400"
                type="password"
                placeholder="Password" />
              <AiOutlineEye size={24} />
            </div>
            <div className="w-[100%] flex h-[49px] gap-2 items-center px-[14px] border rounded-md">
              <Input
                className="border-none h-[100%] focus-visible:ring-0 focus:outline-none p-0 placeholder:text-gray-400"
                type="password"
                placeholder="Confirm Password" />
              <AiOutlineEye size={24} />
            </div>
            <label className="flex items-center gap-1 cursor-pointer w-[55%] select-none">
              <Checkbox />
              <span className="text-gray-500">Accept all terms & Conditions</span>
            </label>
          </div>
          <Button onClick={createUser} className="w-full rounded-[30px]">Create Account</Button>
          <p className="text-gray-500">Already have account? <Link to="/sign-in" className="text-black font-bold">Login</Link></p>
        </div>
      </div>
    </Container>
  )
}
