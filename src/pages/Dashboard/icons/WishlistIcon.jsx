
import { PropTypes } from 'prop-types';

function WishlistIcon({isHovered}) {
    return (
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill={`${isHovered ? ' #808080':"#CCCCCC"}`}>
        <path d="M11.9997 21.0538C-7.99987 9.99967 6.00011 -2.00033 11.9997 5.58772C18.0001 -2.00034 32.0001 9.99967 11.9997 21.0538Z" stroke="" strokeWidth="1.5"/>
        </svg>
    </div>
    )
}

export default WishlistIcon
WishlistIcon.propTypes={
    isHovered:PropTypes.bool
}