import { Link } from "react-router-dom";
import { getUser } from "/src/utils/utils.js";
import { useState, useEffect } from "react";

function Profile() {
  const [data, setData] = useState({});
  useEffect(() => {
    // eslint-disable-next-line no-extra-semi
    (async () => {
      const response = await getUser();
      setData(response);
    })();
  }, []);
  return (
    <div className="text-center flex  justify-center pt-[32px] items-center flex-col  border-solid border-2 border-gray100 rounded-[10px] mt-10  w-[536px] h-[310px] ">
      <img src="/assets/icons/user__profile__img.svg" alt="" />
      <h4 className="mt-8 font-semibold text-[20px] leading-[30px] ">
        {data.firstName} {data.lastName}
      </h4>
      <p className="text-[#808080]  mb-[9px]">{data.role}</p>
      <Link to={"settings"}>
        <button className="border-none  outline-none  text-[16px] font-semibold mb-[32px]   text-[#00B207] ">
          Edit Profile
        </button>
      </Link>
    </div>
  );
}

export default Profile;
