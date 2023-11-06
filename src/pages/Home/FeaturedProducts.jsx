import ProductCard from '../../components/common/Cards/ProductCard'
import PropTypes from 'prop-types'

const FeaturedProducts = ({ dataFeatures }) => {
    return (
        <div className="pt-[100px] ">
            <h1 className="text-center font-[600] text-[40px] mb-[50px]">Featured Products</h1>
            <div className="flex">
                {Array.from(Array(5)).map((_, idx) => {
                    return <ProductCard key={idx} {...dataFeatures} />
                })}
            </div>
        </div>
    )
}

export default FeaturedProducts
FeaturedProducts.propTypes = {
    dataFeatures: PropTypes.object,
}
