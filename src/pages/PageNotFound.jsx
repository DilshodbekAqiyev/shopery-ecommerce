import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function PageNotFound() {
  return (
    <div>
      <div className="container text-center">
        <div className="mt-[80px] flex items-center w-[100%] h-[100%] justify-center">
          <img src="/assets/images/PageNotFound/PageNotFound.png" alt="" />
        </div>
        <h1 className="mt-[32px] text-[40px] font-[600]">Oops! page not found</h1>
        <p className="mt-[20px] w-[612px] mx-auto text-gray-500">Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. Maecenas sagittis tortor at metus mollis</p>
        <Link to={"/"}>
          <Button className="mt-[24px] mb-[80px] rounded-[43px]">Back to Home</Button>
        </Link>
      </div>
    </div>
  )
}
