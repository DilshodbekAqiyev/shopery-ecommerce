import ProductCard from "../../components/common/Cards/ProductCard"
const FeaturedProducts = ({ dataFeatures }) => {
    return <div className="pt-[100px] ">
        <h1 className="text-center font-[600] text-[40px] mb-[50px]">Featured Products</h1>
        <div className="flex">
            {Array.from(Array(5)).map((_) => {
                return <ProductCard {...dataFeatures} />
            })}
        </div>
    </div>
}

export default FeaturedProducts