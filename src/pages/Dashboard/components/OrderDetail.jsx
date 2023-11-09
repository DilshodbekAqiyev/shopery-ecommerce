function OrderDetail() {
  return (
    <div className="  border mt-[30px] rounded-[8px] ">
        <div className="flex m-[24px]  justify-between items-center gap-[300px]">
          <div className="flex items-center  gap-4  ">
              <h3 className="font-semibold  text-[20px] ">Order Details</h3>
              <li className="text-[14px] font-[400] text-grays-gray700 leading-[21px]">April 24, 2021</li>
              <li  className="text-[14px] font-[400] text-grays-gray700 leading-[21px]">3 Products</li>
          </div>
          <button className="border-none font-semibold text-primary text-[16px] ">Back to List</button>
        </div>
        <div className="bg-[#E6E6E6] w-[100%] h-[1.5px]"></div>
        <div className="flex ">
          <div className="w-[312px]  rounded-l-lg border mt-[24px] ml-[24px] rounded-[8px 0px 0px 8px]">
            <h3 className="m-[20px] font-semibold uppercase text-grays-gray400">Billing Address</h3>
            <div className="bg-[#E6E6E6] w-[100%] h-[1.5px]"></div>
            <div className="m-[20px]">
              <p className=" text-[16px]  mb-[8px] font[400]  text-grays-gray900 leading-[24px]">Dainne Russell</p>
              <p  className="text-[14px]  leading-[21px ] text-grays-gray600 mb-[36px] font-[400]">4140 Parker Rd. Allentown, New Mexico 31134</p>
              <label className=" text-[12px] uppercase  font-[500] leading-[12px]   text-grays-gray400">Email</label>
              <p className=" text-[14px] font-[400]  leading-[21px] mb-[12px] ">dainne.ressell@gmail.com</p>
              <label className="text-[12px] uppercase  font-[500] leading-[12px]   text-grays-gray400">Phone</label>
              <p  className="text-[14px] font-[400]  leading-[21px] mb-[12px]">(671) 555-0110</p>
            </div>
          </div>
          <div className="w-[312px] border mt-[24px] mr-[24px] rounded-r-lg 
          ">
            <h3 className="m-[20px]  font-semibold uppercase text-grays-gray400">Shipping Address </h3>
            <div className="bg-[#E6E6E6]  w-[100%] h-[1.5px]"></div>
            <div className="m-[20px]">
              <p className=" text-[16px]  mb-[8px] font[400]  text-grays-gray900 leading-[24px]">Dainne Russell</p>
              <p  className="text-[14px]  leading-[21px ] text-grays-gray600 mb-[36px] font-[400]">4140 Parker Rd. Allentown, New Mexico 31134</p>
              <label className=" text-[12px] uppercase  font-[500] leading-[12px]   text-grays-gray400">Email</label>
              <p className=" text-[14px] font-[400]  leading-[21px] mb-[12px] ">dainne.ressell@gmail.com</p>
              <label className="text-[12px] uppercase  font-[500] leading-[12px]   text-grays-gray400">Phone</label>
              <p  className="text-[14px] font-[400]  leading-[21px] mb-[12px]">(671) 555-0110</p>
            </div>
          </div>

          <div className="w-[312px]  rounded-[8px] border  mt-[24px] mr-[24px] 
          ">
            <div className="m-[20px]  flex items-center justify-center gap-4 ">

              <div className="">
                <p className=" font-semibold uppercase text-grays-gray400 text-[14px]">Order ID: </p>
                <span className="text-grays-gray900  text-[14px] font-[400] leading-[21px]">#4152</span>
              </div>
              <div className="w-[1.5px] h-[40px] bg-[#E6E6E6]"></div>
              <div>
                <p className=" font-semibold uppercase text-grays-gray400 text-[14px]">Payment Method:</p>
                <span className="text-grays-gray900  text-[14px] font-[400] leading-[21px]">Paypal</span>
              </div>
            </div>
            <div className="bg-[#E6E6E6]  w-[100%] h-[1.5px]"></div>
            <div className=" m-[20px]">
                <div className="flex items-center pt-[10px] justify-between ">
                  <p className="text-[14px]    font-[400] text-grays-gray600">Subtotal:</p>
                  <p className="text-[14px]  font-semibold leading-[21px]  text-grays-gray900">$365.00</p>
                   
                </div>
                <div className="w-[100%] h-[1.5px] bg-[#E6E6E6] mt-[12px] "> </div>
                <div className="flex items-center pt-[10px] justify-between ">
                  <p className="text-[14px]    font-[400] text-grays-gray600">Discount</p>
                  <p className="text-[14px]  font-semibold leading-[21px]  text-grays-gray900">20%</p>
                   
                </div>
                <div className="w-[100%] h-[1.5px] bg-[#E6E6E6] mt-[12px] "> </div>
                <div className="flex items-center pt-[10px] justify-between ">
                  <p className="text-[14px]    font-[400] text-grays-gray600">Shipping</p>
                  <p className="text-[14px]  font-semibold leading-[21px]  text-grays-gray900">Free</p>
                   
                </div>
                <div className="w-[100%] h-[1.5px] bg-[#E6E6E6] mt-[12px] "> </div>
                <div className="flex items-center pt-[10px] justify-between mt-[5px]  ">
                  <p className="text-[18px]     font-[400] text-grays-gray900">Total</p>
                  <p className="text-[14px]  font-semibold leading-[21px]  text-hardPrimary">$84.00</p>

                </div>
            </div>
          </div>
        </div>
        <div>
          {/* <h3>wjhrjhwjerjweg</h3> */}

          
        </div>
    </div>
  )
}

export default OrderDetail