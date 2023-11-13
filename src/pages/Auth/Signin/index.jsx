import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { Input } from "../../../components/ui/input";
import { Checkbox } from "../../../components/ui/checkbox";
import { Button } from "../../../components/ui/button";

import Container from "../../../components/common/Container";
import { useState } from "react";
import { instance } from "../../../utils/apiRequest";

export default function Signup() {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const Login = async () => {
    const response = await instance.get('users')

    const isUser = response.data.find(user => {
      if (user.password === data.password && user.email === user.email) {
        return user
      }
    })

    if (isUser) {
      localStorage.setItem('token', isUser.token)
      location.href = '/dashboard'
    } else {
      alert('User not found')
    }
  }

  return (
    <Container>
      <div className="w-full h-[100vh] flex items-center justify-center">
        <div
          className="w-[520px] h-[380px] flex flex-col items-center gap-[20px] shadow-[0px_0px_56px_0px_rgba(0,38,3,0.08)] rounded-md p-[24px]">
          <h1 className="text-[32px] font-semibold">Sign In</h1>
          <div className="w-[100%] flex flex-col gap-[12px]">
            <div className="w-[100%] flex h-[49px] gap-2 items-center px-[14px] border rounded-md">
              <Input
                className="border-none focus-visible:ring-0 p-0 placeholder:text-gray-400"
                type="text"
                onChange={(e) => setData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="Email" />
            </div>
            <div className="w-[100%] flex h-[49px] gap-2 items-center px-[14px] border rounded-md">
              <Input
                className="border-none h-[100%] focus-visible:ring-0 focus:outline-none p-0 placeholder:text-gray-400"
                type={!passwordVisible ? 'password' : 'text'}
                onChange={(e) => setData(prev => ({ ...prev, password: e.target.value }))}
                placeholder="Password" />
              <div
                className="cursor-pointer"
                onClick={() => setPasswordVisible(prev => !prev)}>
                {!passwordVisible ? (
                  <AiOutlineEye size={24} />
                ) : (
                  <AiOutlineEyeInvisible size={24} />
                )}
              </div>
            </div>
            <label className="flex items-center gap-1 cursor-pointer w-[31%] select-none">
              <Checkbox />
              <span className="text-gray-500">Remember Me</span>
            </label>
          </div>
          <Button onClick={Login} className="w-full rounded-[30px]">Login</Button>
          <p className="text-gray-500">Don`t have account? <Link to="/sign-up" className="text-black font-bold">Register</Link></p>
        </div>
      </div>
    </Container>
  )
}
