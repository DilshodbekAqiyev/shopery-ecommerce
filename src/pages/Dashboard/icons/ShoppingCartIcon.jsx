
import { PropTypes } from 'prop-types';
function ShoppingCartIcon({isHovered}) {
  
  return (
    <div>
        <svg xmlns="http://www.w3.org/2000/svg"   width="28" height="28" viewBox="0 0 24 24" fill={`${isHovered ? 'white ':"none"}`}>
        <path d="M8 10H5L3 21H21L19 10H16M8 10V7C8 4.79086 9.79086 3 12 3V3C14.2091 3 16 4.79086 16 7V10M8 10H16M8 10V13M16 10V13" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </div>
  )
}

export default ShoppingCartIcon
ShoppingCartIcon.propTypes = {
  isHovered:PropTypes.bool
}