import { useEffect, useState } from "react"
import Container from "../../../../components/common/Container"
import { instance } from "../../../../utils/apiRequest"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"

function ClientTestimonials() {
    const [data, setData] = useState({})

    const getData = async () => {
        const res = await instance.get('/aboutUs')
        setData(res.data)
    }

    useEffect(() => {
        getData()
    }, [])

    const ClientSliderLeft = () => {
        let ClientSlider = document.querySelector("#client-slider")
        ClientSlider.scrollLeft = ClientSlider.scrollLeft - 440
    }
    const ClientSliderRight = () => {
        let ClientSlider = document.querySelector("#client-slider")
        ClientSlider.scrollLeft = ClientSlider.scrollLeft + 440
    }

    return (
        <div className=" bg-gradient-to-t from-gray-50 to-[#F2F2F2] pt-[100px]  pb-[100px]">
            <Container>
                <div className="flex items-center justify-between ">
                    <h1 className="text-[48px] font-[600]">Client Testimonail</h1>
                    <div className="flex items-center gap-[12px]">
                        <div className="border p-[13px] rounded-[50px] cursor-pointer bg-white hover:bg-[#00B207] hover:text-white" onClick={ClientSliderLeft}><AiOutlineArrowLeft /></div>
                        <div className="border p-[13px] rounded-[50px] cursor-pointer bg-white hover:bg-[#00B207] hover:text-white" onClick={ClientSliderRight}><AiOutlineArrowRight /></div>
                    </div>
                </div>
                <div id="client-slider" className="scroll-smooth mt-[50px] flex gap-[24px] overflow-x-scroll  scrollbar-hide">
                    {data.client?.map((item) => (
                        <div key={item.id}>
                            <div className="w-[420px] h-[250px] p-[24px] px-[24px] rounded-[8px] bg-white shadow-[0_10px_20px_0_rgba(0,0,0,0.01)]">
                                <img src={item.icon} alt="icon" />
                                <p className="w-[376px] text-[14px] my-[16px] text-gray-700">{item.title}</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-[12px]">
                                        <img src={item.linkImg} alt="img" className="cursor-pointer " />
                                        <div>
                                            <h1 className="text-[16px] font-[500]">{item.user}</h1>
                                            <p className="text-[14px] text-gray-400">{item.category}</p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        {Array(5)
                                            .fill(undefined)
                                            .map((_, index) => (
                                                <img key={index} src="/assets/images/About/star-img.svg" alt="Star" />
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default ClientTestimonials
