import { useEffect, useState } from 'react'
import Container from '../../../../components/common/Container'
import { instance } from '../../../../utils/apiRequest'
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from 'react-icons/bi'
import { FaPinterestP } from 'react-icons/fa'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

function CardTeam() {
    const [data, setData] = useState({})

    const getData = async () => {
        const res = await instance.get('/aboutUs')
        setData(res.data)
    }

    useEffect(() => {
        getData()
    }, [])

    const Left = () => {
        let Slider = document.querySelector("#slider")
        Slider.scrollLeft = Slider.scrollLeft + 337
      }

      const Right = () => {
        let Slider = document.querySelector("#slider")
        Slider.scrollLeft = Slider.scrollLeft - 345
      }

    return (
        <div className="bg-gradient-to-b from-[#F2F2F2] to-[#FFF] ">
            <Container>
                <div className="pt-[80px] text-center">
                    <h1 className="text-[48px] font-[600]">Our Awesome Team</h1>
                    <p className="w-[640px] mx-auto text-gray-600 text-[16px]">Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi.</p>
                </div>
                <div className="flex gap-[20px] relative">
                    <div className="border p-[13px] absolute top-[260px] left-[-70px] rounded-[50px] cursor-pointer bg-white hover:bg-[#00B207] hover:text-white" onClick={Right}><AiOutlineArrowLeft /></div>
                    <div className="border p-[13px] absolute top-[255px] right-[-70px] rounded-[50px] cursor-pointer bg-white hover:bg-[#00B207] hover:text-white" onClick={Left}><AiOutlineArrowRight /></div>
                </div>
                <div id="slider" className="scroll-smooth mt-[100px] pb-[100px] flex overflow-x-scroll  scrollbar-hide gap-[24px] pr-[10px]">
                    {data.cards?.map((item) => (<div key={item.id}>
                        <div className="border w-[312px] h-[368px] bg-white rounded-[8px] shadow-[0_20px_48px_0_rgba(0,38,3,0.08)]">
                            <img className="w-[312px] h-[280px]" src={item.linkImg} alt="" />
                            <div className="pt-[16px] pl-[20px]">
                                <h3 className="text-[18px] font-[500]">{item.title}</h3>
                                <p className="text-gray-500 text-[14px]">{item.category}</p>
                            </div>
                            <div className="overlay relative ">
                                <div className="h-[280px] w-[311px]  content opacity-0 hover:opacity-100 cursor-pointer hover:bg-black hover:bg-opacity-40 rounded-t-lg flex items-center justify-center gap-[4px] absolute top-[-344px] left-0 hover:transition-all">
                                    <div className="flex items-center gap-1">
                                        <div className="hover:bg-primary text-white p-2 cursor-pointer rounded-full transition-all ease-in-out duration-500 hover:text-white">
                                            <BiLogoFacebook fontSize={24} />
                                        </div>
                                        <div className="hover:bg-primary text-white p-2 cursor-pointer rounded-full transition-all ease-in-out duration-500 hover:text-white">
                                            <BiLogoTwitter fontSize={24} />
                                        </div>
                                        <div className="hover:bg-primary text-white p-2 cursor-pointer rounded-full transition-all ease-in-out duration-500 hover:text-white">
                                            <FaPinterestP fontSize={24} />
                                        </div>
                                        <div className="hover:bg-primary text-white p-2 cursor-pointer rounded-full transition-all ease-in-out duration-500 hover:text-white">
                                            <BiLogoInstagram fontSize={24} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>))}
                </div>
            </Container>
        </div>
    )
}

export default CardTeam
