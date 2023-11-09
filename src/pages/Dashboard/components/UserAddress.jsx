
function UserAddress() {
  return (
    <div className=' pl-[32px] pt-[32px] items-center flex-col  border-solid border-2 border-gray100 rounded-[10px] mt-10  w-[424px] h-[310px]'>
        <p className="text-grays-gray500  uppercase text-[14px] font-medium mb-[18px]">Billing Address</p>
        <h4 className=" text-[18px]  leading-[27px] font-semibold mb-[8px]">Dainne Russell</h4>
        <p className="text-grays-gray600 w-[264px]  text-[14px] mb-[8px]">4140 Parker Rd. Allentown, New Mexico 31134</p>
        <p className=" text-[16px]  font-medium  mb-[12px] leading-[27px]">dainne.ressell@gmail.com</p>
        <h4 className="text-[16px]  font-medium  mb-[20px] leading-[27px]">(671) 555-0110</h4>
        <button  className="border-none  outline-none  text-[16px] font-semibold mb-[32px]   text-[#00B207]">Edit Address</button>
    </div>
  )
}

export default UserAddress