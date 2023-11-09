import { AiOutlineEye } from "react-icons/ai";
import { Input } from "../../../components/ui/input";

import Container from "../../../components/common/Container";

export default function Signup() {
  return (
    <Container>
      <div className="w-full h-[100vh] flex items-center justify-center">
        <div
          className="w-[520px] h-[432px] flex flex-col items-center gap-[20px] shadow-[0px_0px_56px_0px_rgba(0,38,3,0.08)] rounded-md p-[24px]">
          <h1 className="text-[32px] font-semibold">Create Account</h1>
          <div className="w-[100%] flex flex-col gap-[12px]">
            <div className="w-[100%] flex h-[49px] gap-2 items-center px-[14px] border border-slate-400 rounded-md">
              <Input
                className="border-none focus-visible:ring-0 p-0"
                type="text"
                placeholder="Email" />
            </div>
            <div className="w-[100%] flex h-[49px] gap-2 items-center px-[14px] border border-slate-400 rounded-md">
              <Input
                className="border-none h-[100%] focus-visible:ring-0 focus:outline-none p-0"
                type="password"
                placeholder="Password" />
              <AiOutlineEye size={24} />
            </div>
            <div className="w-[100%] flex h-[49px] gap-2 items-center px-[14px] border border-slate-400 rounded-md">
              <Input
                className="border-none h-[100%] focus-visible:ring-0 focus:outline-none p-0"
                type="password"
                placeholder="Confirm Password" />
              <AiOutlineEye size={24} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
