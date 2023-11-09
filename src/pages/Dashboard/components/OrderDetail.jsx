import Stepper from "./Stepper/Stepper"
import { Link } from 'react-router-dom';
function OrderDetail() {

  return (
    <div className="  border mt-[30px] rounded-[8px] ">
        <div className="flex m-[24px]  justify-between items-center gap-[300px]">
          <div className="flex items-center  gap-4  ">
              <h3 className="font-semibold  text-[20px] ">Order Details</h3>
              <li className="text-[14px] font-[400] text-grays-gray700 leading-[21px]">April 24, 2021</li>
              <li  className="text-[14px] font-[400] text-grays-gray700 leading-[21px]">3 Products</li>
          </div>
          <Link to={'/dashboard/order-history'}>
            <button className="border-none font-semibold text-primary text-[16px] ">Back to List</button>
          </Link>
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
        <div className= "  m-[20px] flex justify-center items-center ">
           <Stepper></Stepper>
        </div>
        
        <div className=" bg-grays-gray0.5 ">
          <div className="flex  justify-between items-center mb-[12px] py-[12px] px-[20px] w-[840px]  ">
            <p className="text-[14px]  mr-[200px] font-semibold  uppercase  leading-[12px] text-grays-gray700">Product</p>
            <p className="text-[14px]  font-semibold  uppercase  leading-[12px] text-grays-gray700">Price </p>
            <p className="text-[14px]  font-semibold  uppercase  leading-[12px] text-grays-gray700">Quantity</p>
            <p className="text-[14px]  font-semibold  uppercase  leading-[12px] text-grays-gray700">Subtotal</p>
        </div>
        </div>
        <div className="">
            <div className="flex justify-between w-[830px] items-center mb-[12px] px-[20px]   ">
              <div className="flex  items-center ">
                <img className="w-[70px]" src="/assets/images/order__detail__product__img1.svg" alt="" />
                <p className="text-[14px] font-[400] leading-[21px] text-grays-gray900 ml-[12px]">Red Capsicum</p>
              </div>
              <p className="text-[14px] font-[400] leading-[21px] text-grays-gray900 ml-[50px]">$14.00</p>
              <p className="text-[14px]  font-[400]  uppercase  leading-[12px] text-grays-gray700">x5 </p>
              <p className="text-[14px]  font-[400]  uppercase  leading-[12px] text-grays-gray700">$70.00</p>

            </div>
           <div className=" w-[90%] ml-[20px] bg-[#E6E6E6] h-[2px] mb-[8px]"></div>
           <div className="flex justify-between w-[830px] items-center mb-[12px] px-[20px]   ">
              <div className="flex  items-center ">
                <img className="w-[70px]" src="/assets/images/order__detail__product__img2.svg" alt="" />
                <p className="text-[14px] font-[400] leading-[21px] text-grays-gray900 ml-[12px]">Green Capsicum</p>
              </div>
              <p className="text-[14px] font-[400] leading-[21px] text-grays-gray900 ml-[34px]">$14.00</p>
              <p className="text-[14px]  font-[400]  uppercase  leading-[12px] text-grays-gray700">x2 </p>
              <p className="text-[14px]  font-[400]  uppercase  leading-[12px] text-grays-gray700">$28.00</p>

            </div>
           <div className=" w-[90%] ml-[20px] bg-[#E6E6E6] h-[2px] mb-[8px]"></div>
           <div className="flex justify-between w-[830px] items-center mb-[12px] px-[20px]   ">
              <div className="flex  items-center ">
                <img className="w-[70px]" src="/assets/images/order__detail__product__img1.svg" alt="" />
                <p className="text-[14px] font-[400] leading-[21px] text-grays-gray900 ml-[12px]">Green Chili</p>
              </div>
              <p className="text-[14px] font-[400] leading-[21px] text-grays-gray900 ml-[85px]">$26.70</p>
              <p className="text-[14px]  font-[400]  uppercase  leading-[12px] text-grays-gray700">x10 </p>
              <p className="text-[14px]  font-[400]  uppercase  leading-[12px] text-grays-gray700">$267.00</p>

            </div>
           <div className=" w-[90%] ml-[20px] bg-[#E6E6E6] h-[2px] mb-[8px]"></div>

        
        </div>
       
        <div>
          {/* <h3>wjhrjhwjerjweg</h3> */}

          
        </div>
    </div>
  )
}

export default OrderDetail