import { Label } from '../../../components/ui/label'
import { Button } from '../../../components/ui/button'
import { useRef, useState } from 'react';

function AccountSettings() {
  const  inputRef = useRef(null)
  const [image, setImage] = useState("")
  const handleImageClick = () =>{

    inputRef.current.click();
    
  }

  const handleImageChange = (event) =>{
    const file = event.target.files[0]
    console.log(file);
    setImage(file)
  }
  return (
    <div>
      <div className="border w-[984px] mt-[40px] rounded-lg">
        <h3 className=" mx-[24px]  my-[16px] text-[20px] font-[500]  leading-[30px] text-grays-gray900 ">
          Account Settings
        </h3>
        <div className="w-100% h-[1.5px] bg-[#E5E5E5]"></div>
        <div className='flex gap-[100px] '>
          <div className=" mx-[24px] my-[24px]">
          <div className="mb-[16px]">
            <Label
              htmlFor={`firstName`}
              className="block text-grays-gray900  text-[14px ] leading-[21px] font-[400] cursor-pointer"
            >
              First name
            </Label>
            <input
              className="border-solid focus:grays-gray600  outline-none drop-shadow-sm transition-all duration-200 ease-in-out   focus:bg-white focus:ring-1 focus:ring-[#234f1e] text-grays-gray600 border mt-[6px]  w-[512px] rounded-lg py-[14px] px-[16px] text-[16px] font-[400]  leading-[21px]"
              type="text"
              id="firstName"
              defaultValue="Dianne"
            />
          </div>
          <div className="mb-[16px]">
            <Label
              htmlFor={`firstName`}
              className="block text-grays-gray900  text-[14px ] leading-[21px] font-[400] cursor-pointer"
            >
              Last Name
            </Label>
            <input
              className="border-solid focus:grays-gray600  outline-none drop-shadow-sm transition-all duration-200 ease-in-out   focus:bg-white focus:ring-1 focus:ring-[#234f1e] text-grays-gray600 border mt-[6px]  w-[512px] rounded-lg py-[14px] px-[16px] text-[16px] font-[400]  leading-[21px]"
              type="text"
              id="firstName"
              defaultValue="Russell"
            />
          </div>
          <div className="mb-[16px]">
            <Label
              htmlFor={`email`}
              className="block text-grays-gray900  text-[14px ] leading-[21px] font-[400] cursor-pointer"
            >
              Email
            </Label>
            <input
              className="border-solid focus:grays-gray600  outline-none drop-shadow-sm transition-all duration-200 ease-in-out   focus:bg-white focus:ring-1 focus:ring-[#234f1e] text-grays-gray600 border mt-[6px]  w-[512px] rounded-lg py-[14px] px-[16px] text-[16px] font-[400]  leading-[21px]"
              type="email"
              id="email"
              defaultValue="dianne.russell@gmail.com"
            />
          </div>
          <div className="mb-[16px]">
            <Label
              htmlFor={`number`}
              className="block text-grays-gray900  text-[14px ] leading-[21px] font-[400] cursor-pointer"
            >
              Phone Number
            </Label>
            <input
              className="block border-solid focus:grays-gray600  outline-none drop-shadow-sm transition-all duration-200 ease-in-out   focus:bg-white focus:ring-1 focus:ring-[#234f1e]  text-grays-gray600 border mt-[6px]  w-[512px] rounded-lg py-[14px] px-[16px] text-[16px] font-[400]  leading-[21px]"
              type="text"
              id="number"
              defaultValue="(603) 555-0123"
            />
            <Button className=" mt-[16px] text-[14px] rounded-[43px] font-[600] leading-[16px] hover:bg-[#234f1e]">
              Save Changes
            </Button>
          </div>
        </div>
        <div>
          <div onClick={handleImageClick} className='mt-[56px] w-[224px] h-[224px] '>
            {image? (<img className=' rounded-full  w-full h-full' src={URL.createObjectURL(image)} alt="" />):(<img  src="/assets/images/settings__user__img.svg" alt="" />)}
            <input type="file"  ref={inputRef} className='hidden' onChange={handleImageChange } />            
          </div>
          <button  className=' border-dotted border-2 border-primary text-primary text-[14px] font-semibold leading-[17px] ml-[30px] rounded-[43px] mt-[20px] py-[10px] px-[32px] '>Chose Image</button>
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default AccountSettings
