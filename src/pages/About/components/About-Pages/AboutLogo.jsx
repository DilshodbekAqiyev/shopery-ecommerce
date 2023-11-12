import Container from '../../../../components/common/Container'
import BookOffIcon from '../Icons/bookOffIcon'
import FoodIcon from '../Icons/foodIcon'
import FoodNetworkIcon from '../Icons/foodNetworkIcon'
import MangoIcon from '../Icons/mangoIcon'
import SeriesIcon from '../Icons/seriesIcon'

function AboutLogo() {
    return (
        <Container>
            <div className="py-[80px] flex justify-between">
                <a href="#" className="transition ease-in-out delay-60 hover:-translate-y-1 hover:scale-110 duration-300"><FoodNetworkIcon /></a>
                <a href="#" className="transition ease-in-out delay-60 hover:-translate-y-1 hover:scale-110 duration-300"><MangoIcon /></a>
                <a href="#" className="transition ease-in-out delay-60 hover:-translate-y-1 hover:scale-110 duration-300"><FoodIcon /></a>
                <a href="#" className="transition ease-in-out delay-60 hover:-translate-y-1 hover:scale-110 duration-300"><BookOffIcon /></a>
                <a href="#" className="transition ease-in-out delay-60 hover:-translate-y-1 hover:scale-110 duration-300"><SeriesIcon /></a>
            </div>
        </Container>
    )
}

export default AboutLogo
