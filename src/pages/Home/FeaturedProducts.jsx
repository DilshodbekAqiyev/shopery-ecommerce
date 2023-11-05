import ProductCard from "../../components/common/Cards/ProductCard"
const FeaturedProducts = ({ data }) => {
    return <div className="pt-[100px] ">
        <h1 className="text-center font-[600] text-[40px] mb-[50px]">Featured Products</h1>
        <div className="flex">
            <ProductCard {...data} />
            <ProductCard {...data} />
            <ProductCard {...data} />
            <ProductCard {...data} />
            <ProductCard {...data} />
        </div>
    </div>
}

export default FeaturedProducts