import { useState, useEffect } from "react";
import { Button } from "../../../components/ui/button";
import { Label } from "../../../components/ui/label";
import { getUser } from "../../../utils/utils";
import { instance } from "../../../utils/apiRequest";

function BillingAddress() {
  const [data, setData] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await getUser();
      setData(response );
    })();
  }, []);

 

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    try {
      const id = data.id;
      await instance.patch(`users/${id}`, data);

      // const updatedResponse = await getUser();
      // setData({
      //   ...updatedResponse,
      //   billingAddress:{
      //     firstName: updatedResponse.firstName,
      //     lastName: updatedResponse.lastName,
      //     phone: updatedResponse.phoneNumber,
      //     email: updatedResponse.email,
      //     companyName: updatedResponse.companyName,
      //     streetAddress: updatedResponse.streetAddress,
      //     country: updatedResponse.country,
      //     city: updatedResponse.city,
      //     zipCode: updatedResponse.zipCode,
      //   }
      // });
    } catch (error) {
      console.error("error ", error);
    }
  };
  console.log(data);
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
                onChange={(e) => setData({ ...data, billingAddress: {firstName: e.target.value}})}
                value={data?.billingAddress.firstName}
              />
            </div>
            <div className="mb-[16px]">
              <Label
                htmlFor={`lastName`}
                className="block text-grays-gray900  text-[14px ] leading-[21px] font-[400] cursor-pointer"
              >
                Last Name
              </Label>
              <input
                className="border-solid focus:grays-gray600  outline-none drop-shadow-sm transition-all duration-200 ease-in-out   focus:bg-white focus:ring-1 focus:ring-[#234f1e] text-grays-gray600 border mt-[6px]  w-[302px] rounded-lg py-[14px] px-[16px] text-[16px] font-[400]  leading-[21px]"
                type="text"
                id="lasName"
                onChange={(e) => setData({ ...data, billingAddress: {lastName: e.target.value}})}
                value={data?.billingAddress.lastName}
              />
            </div>
            <div className="mb-[16px]">
              <Label
                htmlFor={`company`}
                className="block text-grays-gray900  text-[14px ] leading-[21px] font-[400] cursor-pointer"
              >
                Company Name{" "}
                <span className="text-[14px]  font-[400]  leading-[21px] text-[#666]">
                  (optional)
                </span>
              </Label>
              <input
                className="border-solid focus:grays-gray600  outline-none drop-shadow-sm transition-all duration-200 ease-in-out   focus:bg-white focus:ring-1 focus:ring-[#234f1e] text-grays-gray600 border mt-[6px]  w-[302px] rounded-lg py-[14px] px-[16px] text-[16px] font-[400]  leading-[21px]"
                type="text"
                id="company"
                onChange={(e) => setData({ ...data, billingAddress: {companyName: e.target.value}})}
                value={data?.billingAddress.companyName}
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
              onChange={(e) => setData({ ...data, billingAddress: {streetAddress: e.target.value}})}
              value={data?.billingAddress.streetAddress}
            />


            <div className="mt-[30px]  flex  gap-[20px] items-center pt-[50px]">
              <div className="w-[302px]">
                <h3 className="mb-[5px]">Country / Region</h3>

                <input
                  className="block w-[302px] border-solid focus:grays-gray600  outline-none drop-shadow-sm transition-all duration-200 ease-in-out   focus:bg-white focus:ring-1 focus:ring-[#234f1e]  text-grays-gray600  border mt-[6px]   rounded-lg py-[14px] px-[16px] text-[16px] font-[400]  leading-[21px]"
                  type="text"
                  id="country"
                  onChange={(e) => setData({ ...data, billingAddress: {country: e.target.value}})}
                  value={data?.billingAddress.country}

                />
              </div>
              <div>
                <h3 className="mb-[5px]">States</h3>
                <input
                  className="block w-[302px] border-solid focus:grays-gray600  outline-none drop-shadow-sm transition-all duration-200 ease-in-out   focus:bg-white focus:ring-1 focus:ring-[#234f1e]  text-grays-gray600 border mt-[6px]   rounded-lg py-[14px] px-[16px] text-[16px] font-[400]  leading-[21px]"
                  type="text"
                  id="state"
                  onChange={(e) => setData({ ...data, billingAddress: {city: e.target.value}})}
                  value={data?.billingAddress.city}
                />
              </div>
              <div className="w-[302px] ">
                <h3 className="mb-[6px]">Zip Code</h3>
                <input
                  className="block w-[302px] border-solid focus:grays-gray600  outline-none drop-shadow-sm transition-all duration-200 ease-in-out   focus:bg-white focus:ring-1 focus:ring-[#234f1e]  text-grays-gray600 border mt-[6px]   rounded-lg py-[14px] px-[16px] text-[16px] font-[400]  leading-[21px]"
                  type="text"
                  id="zipCode"
                  onChange={(e) => setData({ ...data, billingAddress: {zipCode: e.target.value}})}
                  value={data?.billingAddress.zipCode}
                />
              </div>
            </div>
            <div className="flex gap-[16px]">
              <div>
                <Label
                  className="mt-4 block mb-[4px] text-[14px] font-[400]  leading-[21px]"
                  htmlFor="emailBill"
                >
                  Email
                </Label>
                <input
                  className="border-[1.5px]  text-grays-gray600 text-[14px ] leading-[21px] w-[460px] px-[14px] py-[11px] rounded-[6px] border-solid focus:grays-gray600  outline-none drop-shadow-sm transition-all duration-200 ease-in-out   focus:bg-white focus:ring-1 focus:ring-[#234f1e] v"
                  id="emailBill"
                  type="email"
                  onChange={(e) => setData({ ...data, billingAddress: {email: e.target.value}})}
                  value={data?.billingAddress.email}
                  
                />
              </div>
              <div>
                <Label
                  className="mt-4 block mb-[4px] text-[14px] font-[400]  leading-[21px]"
                  htmlFor="phone"
                >
                  Phone
                </Label>
                <input
                  className="border-[1.5px] text-[14px ] text-grays-gray600 leading-[21px] w-[460px] px-[14px] py-[11px] rounded-[6px] border-solid focus:grays-gray600  outline-none drop-shadow-sm transition-all duration-200 ease-in-out   focus:bg-white focus:ring-1 focus:ring-[#234f1e] v"
                  id="phone"
                  type="phone"
                  onChange={(e) => setData({ ...data, billingAddress: {phone: e.target.value}})}
                  value={data?.billingAddress.phone}
                />
              </div>
            </div>
            <Button
              onClick={handleSaveChanges}
              
              className=" mt-[16px] text-[14px] rounded-[43px] font-[600] leading-[16px] hover:bg-[#234f1e]"
            >
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BillingAddress;
