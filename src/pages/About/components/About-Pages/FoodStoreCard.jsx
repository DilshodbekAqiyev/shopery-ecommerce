import { LazyLoadImage } from "react-lazy-load-image-component"
import Container from "../../../../components/common/Container"
import { useEffect, useState } from "react"
import { instance } from "../../../../utils/apiRequest"
import { Link } from "react-router-dom"
import { Button } from "../../../../components/ui/button"

function FoodStoreCard() {
    const [data, setData] = useState({})

    const getData = async () => {
        const res = await instance.get('/aboutUs')
        setData(res.data)
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <Container >
                <div className="mt-[80px] flex justify-between items-center gap-[41px]">
                    <div>
                        <h1 className="text-[56px] font-[600] leading-[67px]">{data.welcome?.[0].title}</h1>
                        <p className="mt-[32px] w-[565px] text-gray-600 font-[18px] leading-[27px]">{data.welcome?.[0].content}</p>
                    </div>
                    <LazyLoadImage
                        delayTime={300}
                        src={data.welcome?.[0].image}
                        alt="img"
                        effect="blur"
                        className="w-[716px] h-[492px] object-contain rounded-md"
                    />
                </div>
            </Container>
            <div className="max-w-[1620px] mx-auto mt-[80px]  flex gap-[32px] bg-[url('/assets/images/About/about_bg.png')] bg-no-repeat">
                <LazyLoadImage
                    delayTime={300}
                    src={data.welcome?.[1].image}
                    alt="img"
                    effect="blur"
                    className="h-[685px] w-full"
                />
                <div>
                    <h1 className="mt-[80px] text-[56px] font-[600] leading-[67px] w-[544px]">{data.welcome?.[1].title}</h1>
                    <p className="mt-[32px] w-[565px] text-gray-600  leading-[27px]">{data.welcome?.[1].content}</p>
                    <div className="flex mt-[24px] gap-[24px]">
                        <div>
                            <div className="flex items-center gap-[16px]">
                                <img src="/assets/images/About/about-icon-leaf.svg" alt="" />
                                <div>
                                    <h2 className="text-[18px] font-[500]">100% Organic food</h2>
                                    <p className="mt-[5px] text-[14px] text-gray-600 ">100% healthy & Fresh food.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-[16px] mt-[24px]">
                                <img src="/assets/images/About/about-icon-star.svg" alt="" />
                                <div>
                                    <h2 className="text-[18px] font-[500]">Customer Feedback</h2>
                                    <p className="mt-[5px] text-[14px] text-gray-600 ">Our happy customer</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-[16px]  mt-[24px]">
                                <img src="/assets/images/About/about-icon-car.svg" alt="" />
                                <div>
                                    <h2 className="text-[18px] font-[500]">Free Shipping</h2>
                                    <p className="mt-[5px] text-[14px] text-gray-600 ">Free shipping with discount</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-[16px]">
                                <img src="/assets/images/About/about-icon-earphone.svg" alt="" />
                                <div>
                                    <h2 className="text-[18px] font-[500]">Great Support 24/7</h2>
                                    <p className="mt-[5px] text-[14px] text-gray-600 ">Instant access to Contact</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-[16px] mt-[24px]">
                                <img src="/assets/images/About/about-icon-shop.svg" alt="" />
                                <div>
                                    <h2 className="text-[18px] font-[500]">100% Sucure Payment</h2>
                                    <p className="mt-[5px] text-[14px] text-gray-600 ">We ensure your money is save</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-[16px]  mt-[24px]">
                                <img src="/assets/images/About/about-icon-organ-food.svg" alt="" />
                                <div>
                                    <h2 className="text-[18px] font-[500]">100% Organic Food</h2>
                                    <p className="mt-[5px] text-[14px] text-gray-600 ">100% healthy & Fresh food.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Container>
                <div className="mt-[160px] flex items-center  justify-between gap-[29px] ">
                    <div>
                        <h1 className="w-[552px] leading-[57px] text-[48px] font-[600]">{data.welcome?.[2].title}</h1>
                        <p className="w-[536px] mt-[20px] text-[16px] font-[400] text-gray-600">{data.welcome?.[2].content}</p>
                        <div className="flex items-center mt-[20px] gap-[8px]">
                            <img src="/assets/images/About/about-check.svg" alt="img" />
                            <p className="text-gray-600 text-[14px]" >Sed in metus pellentesque.</p>
                        </div>
                        <div className="flex items-center mt-[16px] gap-[8px]">
                            <img src="/assets/images/About/about-check.svg" alt="img" />
                            <p className="text-gray-600 text-[14px]">Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.</p>
                        </div>
                        <div className="flex items-center mt-[16px] gap-[8px]">
                            <img src="/assets/images/About/about-check.svg" alt="img" />
                            <p className="text-gray-600 text-[14px]">Maecenas ut nunc fringilla erat varius.</p>
                        </div>
                        <Link to={"/shop"}>
                            <Button className="mt-[24px] rounded-[43px]">{data.welcome?.[2].button}<img className="ml-[16px]" src="/assets/images/About/about-icon.svg" alt="img" /></Button>
                        </Link>
                    </div>
                    <div className=" w-[895px] ">
                        <LazyLoadImage
                            delayTime={300}
                            src={data.welcome?.[2].image}
                            alt="img"
                            effect="blur"
                            className="w-full"
                        />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default FoodStoreCard
