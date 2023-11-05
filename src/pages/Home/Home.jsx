import { space } from "postcss/lib/list";
import ProductCard from "../../components/common/Cards/ProductCard";

const data = {
   name: "Green Apple",
   originalPrice: 20.99,
   discountPrice: 14.99,
   images: {
      src: 'https://www.freepngimg.com/thumb/apple/89-green-apple-png-image.png'
   },
   rating: 4,
   status: 'Stock',
   statusColor: 'green'
}

const vegetablesData = [
   "All", "Vegetables", "Fruit", "Meat & Fish", " View All"
]
const Home = () => {
   return (<>
      <h1 className="font-[600] text-[40px] text-center mt-[100px] mb-[24px]">Introducing Our Products</h1>
      <div className="text-center mb-[50px]">
         {vegetablesData.map((item, index) => {
            return <a href="#0"><span className="hover:border-b-2 hover:text-[#00B207] text-[#808080] text-[16px] font-[500] border-[#20B526] py-[8px] px-[12px]">{item}</span> {index < vegetablesData.length - 1 ? <span className="mx-[10px] text-[#B4CCB4] font-[400]">|</span> : ''}</a>
         })}
      </div>
      <div className="container  border">
         <div className="flex">
            <ProductCard {...data} />
            <ProductCard {...data} />
            <ProductCard {...data} />
            <ProductCard {...data} />
         </div>
         <div className="flex">
            <ProductCard {...data} />
            <ProductCard {...data} />
            <ProductCard {...data} />
            <ProductCard {...data} />
         </div>
      </div></>)
};

export default Home;
