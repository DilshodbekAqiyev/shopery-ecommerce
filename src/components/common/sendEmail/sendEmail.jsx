import { Button } from "../../ui/button"

function SendEmail() {
  return (
    <div className=" container flex items-center justify-between py-12 bg-greenGrays-greenGray0.5">
        <img src="./assets/Logo.png" alt="logo" className=" w-[223px] object-fill" />
        <div>
            <p className=" font-medium text-[24px]">Subcribe our Newsletter</p>
            <p className=" font-normal text-sm text-greenGrays-greenGray400">Pellentesque eu nibh eget mauris congue mattis matti.</p>
        </div>
        <div className=" bg-white rounded-full pl-8 ">
            <input className=" bg-transparent text-gray-500 w-[320px]" type="text" placeholder="Your email address"/>
            <Button className=" rounded-full px-[40px] text-base font-medium">
              Subscribe
            </Button>
        </div>
    </div>
  )
}

export default SendEmail