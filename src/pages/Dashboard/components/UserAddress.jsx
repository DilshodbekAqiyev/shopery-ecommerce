import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getUser } from "/src/utils/utils.js";

function UserAddress() {
  const [data, setData] = useState({});
  useEffect(() => {
    // eslint-disable-next-line no-extra-semi
    (async () => {
      const response = await getUser();
      setData(response);
    })();
  }, []);

  return (
    <div className=" pl-[32px] pt-[32px] items-center flex-col  border-solid border-2 border-gray100 rounded-[10px] mt-10  w-[424px] h-[310px]">
      <p className="text-grays-gray500  uppercase text-[14px] font-medium mb-[18px]">
        Billing Address
      </p>
      <h4 className=" text-[18px]  leading-[27px] font-semibold mb-[8px]">
        {data?.firstName} {data?.lastName}
      </h4>
      <p className="text-grays-gray600 w-[264px]  text-[14px] mb-[8px]">
        {data?.billingAddress?.country} {data?.billingAddress?.city} {data?.billingAddress?.streetAddress}
      </p>
      <p className=" text-[16px]  font-medium  mb-[12px] leading-[27px]">
        {data?.billingAddress?.email}
      </p>
      <h4 className="text-[16px]  font-medium  mb-[20px] leading-[27px]">
        {data?.billingAddress?.phoneNumber}
      </h4>
      <Link to={"settings"}>
        <button className="border-none  outline-none  text-[16px] font-semibold mb-[32px]   text-[#00B207]">
          Edit Address
        </button>
      </Link>
    </div>
  );
}

export default UserAddress;
