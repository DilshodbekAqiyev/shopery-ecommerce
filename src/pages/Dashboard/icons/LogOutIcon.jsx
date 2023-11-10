
import { PropTypes } from 'prop-types';

function LogOutIcon() {

  return (
    <div>
        <svg xmlns="http://www.w3.org/2000/svg"    width="24" height="" viewBox="0 0 18 18" fill="none">
        <path d="M16 18H7C6.46957 18 5.96086 17.7893 5.58579 17.4142C5.21071 17.0391 5 16.5304 5 16V12H7V16H16V2H7V6H5V2C5 1.46957 5.21071 0.960859 5.58579 0.585786C5.96086 0.210714 6.46957 0 7 0H16C16.5304 0 17.0391 0.210714 17.4142 0.585786C17.7893 0.960859 18 1.46957 18 2V16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18ZM9 13V10H0V8H9V5L14 9L9 13Z" fill={`#CCCCCC`}/>
        </svg>
    </div>
  )
}

export default LogOutIcon
LogOutIcon.propTypes= {
  isHovered:PropTypes.bool
}