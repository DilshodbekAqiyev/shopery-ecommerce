import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { Input } from "../../../components/ui/input";
import { Checkbox } from "../../../components/ui/checkbox";
import { Button } from "../../../components/ui/button";

import Container from "../../../components/common/Container";
import { useLoginFormValidator } from "../useLoginFormValidator";
import { instance } from "../../../utils/apiRequest";
import { initialUserData } from '../../../utils/constants'
import bcrypt from 'bcryptjs'

export default function Signup() {
  const [passwordVisible, setPasswordVisible] = useState({ p1: false, p2: false })
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    seller: false
  });
  const { errors, validateForm, onBlurField } = useLoginFormValidator(form);
  const navigate = useNavigate()

  const onUpdateField = e => {
    const field = e.target.name;

    const nextFormState = {
      ...form,
      [field]: e.target.value,
    };

    setForm(nextFormState);

    if (errors[field].dirty) {
      validateForm({
        form: nextFormState,
        errors,
        field,
      });
    }
  };

  const createUser = () => {
    const { isValid } = validateForm({ form, errors, forceTouchErrors: true });
    if (!isValid) return;

    const newUser = {
      ...initialUserData,
      email: form.email,
      password: bcrypt.hash(form.password, 10), // test
      role: form.seller ? "Seller" : "Customer"
    }

    instance.post('users/', newUser)
    localStorage.setItem('token', newUser.token)

    navigate('/dashboard')
  };

  return (
    <Container>
      <div className="w-full h-[100vh] flex items-center justify-center">
        <div
          className="w-[520px] mh-[470px] flex flex-col items-center gap-[20px] shadow-[0px_0px_56px_0px_rgba(0,38,3,0.08)] rounded-md p-[24px]">
          <h1 className="text-[32px] font-semibold">Create Account</h1>
          <div className="w-[100%] flex flex-col gap-[12px]">
            <div>
              <div className="w-[100%] flex h-[49px] gap-2 items-center px-[14px] border rounded-md">
                <Input
                  className="border-none focus-visible:ring-0 p-0 placeholder:text-gray-400"
                  type="text"
                  name="email"
                  value={form.email}
                  onChange={onUpdateField}
                  onBlur={onBlurField}
                  placeholder="Email" />
              </div>
              {errors.email.dirty && errors.email.error ? (
                <p className="text-red-600 text-[14px] ml-1 mt-1">{errors.email.message}</p>
              ) : null}
            </div>
            <div>
              <div className="w-[100%] flex h-[49px] gap-2 items-center px-[14px] border rounded-md">
                <Input
                  className="border-none h-[100%] focus-visible:ring-0 focus:outline-none p-0 placeholder:text-gray-400"
                  name="password"
                  value={form.password}
                  onChange={onUpdateField}
                  onBlur={onBlurField}
                  type={!passwordVisible.p1 ? "password" : "text"}
                  placeholder="Password" />
                <div
                  className="cursor-pointer"
                  onClick={() => setPasswordVisible(prev => ({ ...prev, p1: !passwordVisible.p1 }))}>
                  {!passwordVisible.p1 ? (
                    <AiOutlineEye size={24} />
                  ) : (
                    <AiOutlineEyeInvisible size={24} />
                  )}
                </div>
              </div>
              {errors.password.dirty && errors.password.error ? (
                <p className="text-red-600 text-[14px] ml-1 mt-1">
                  {errors.password.message}
                </p>
              ) : null}
            </div>
            <div>
              <div className="w-[100%] flex h-[49px] gap-2 items-center px-[14px] border rounded-md">
                <Input
                  className="border-none h-[100%] focus-visible:ring-0 focus:outline-none p-0 placeholder:text-gray-400"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={onUpdateField}
                  onBlur={onBlurField}
                  type={!passwordVisible.p2 ? "password" : "text"}
                  placeholder="Confirm Password" />
                <div
                  className="cursor-pointer"
                  onClick={() => setPasswordVisible(prev => ({ ...prev, p2: !passwordVisible.p2 }))}>
                  {!passwordVisible.p2 ? (
                    <AiOutlineEye size={24} />
                  ) : (
                    <AiOutlineEyeInvisible size={24} />
                  )}
                </div>
              </div>
              {errors.confirmPassword.dirty && errors.confirmPassword.error ? (
                <p className="text-red-600 text-[14px] ml-1 mt-1">
                  {errors.confirmPassword.message}
                </p>
              ) : null}
            </div>
            <label className="flex items-center gap-1 cursor-pointer w-[22%] select-none">
              <Checkbox onCheckedChange={(e) => setForm(prev => ({ ...prev, seller: e }))} />
              <span className="text-gray-500">I am Seller</span>
            </label>
          </div>
          <Button onClick={createUser} className="w-full rounded-[30px]">Create Account</Button>
          <p className="text-gray-500">Already have account? <Link to="/sign-in" className="text-black font-bold">Login</Link></p>
        </div>
      </div>
    </Container>
  )
}
