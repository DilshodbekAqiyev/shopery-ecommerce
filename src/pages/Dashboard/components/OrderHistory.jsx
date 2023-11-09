import { Link, Outlet } from "react-router-dom";

const orderHistoryData = [
  {
    id: "#3933",
    date: "4 April, 2021",
    total: "$135.00 (5 Products)",
    status: "Processing",
    link: "View Details",
  },
  {
    id: "#3933",
    date: "4 April, 2021",
    total: "$135.00 (5 Products)",
    status: "Processing",
    link: "View Details",
  },
  {
    id: "#3933",
    date: "4 April, 2021",
    total: "$135.00 (5 Products)",
    status: "Processing",
    link: "View Details",
  },
  {
    id: "#3933",
    date: "4 April, 2021",
    total: "$135.00 (5 Products)",
    status: "Processing",
    link: "View Details",
  },
  {
    id: "#3933",
    date: "4 April, 2021",
    total: "$135.00 (5 Products)",
    status: "Processing",
    link: "View Details",
  },
];
function OrderHistory() {
  return (
    <>
      <div className=" border-solid border-2 border-gray100 rounded-[10px] mt-10  w-[984px]">
        <div className="flex justify-between m-[24px] items-center">
          <h3 className="text-[20px] leading-[30px]  font-[500]">
            Recet Order History
          </h3>
          <button className=" border-none outline-none  text-primary  font-semibold leading-[24px] fontSize-textMedium">
            View All
          </button>
        </div>
        <div>
          <div className="  border flex gap-[122px] items-center py-[12px]  pl-[24px] hover:bg-grays-gray0.5">
            <p className="flex-col-6 uppercase text-[12px] font-[500]    text-grays-gray700">
              Order ID
            </p>
            <p className="flex-col-6 uppercase text-[12px] font-[500]  mr-[60px]  text-grays-gray700">
              Date
            </p>
            <p className="flex-col-6 uppercase text-[12px] font-[500]  mr-[110px]  text-grays-gray700">
              Total
            </p>
            <p className="flex-col-6 uppercase text-[12px] font-[500]    text-grays-gray700">
              Status
            </p>
          </div>
          <div className=" mb-[30px]   items-center ">
            {orderHistoryData.map((data) => (
              <div
                className="flex gap-[130px]  hover:bg-grays-gray0.5 py-[12px]  pl-[24px]"
                key={data.id}
              >
                <p className="text-[14px]">{data.id} </p>
                <p className="text-[14px]">{data.date}</p>
                <p className="text-[14px]">{data.total}</p>
                <p className="text-[14px]">{data.status}</p>
                <Link
                  to={"/dashboard/order-history/order-detail"}
                  className="text-[14px] leading-[27px] text-primary font-semibold"
                >
                  {data.link}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default OrderHistory;
