import PropTypes from 'prop-types';

function LatestCard({title , description , date : { month , day}, images : {src}}) {
  return (
    <div>
        
    </div>
  )
}

LatestCard.propTypes = {
    title : PropTypes.string,
    description: PropTypes.string,
    month: PropTypes.string,
    day: PropTypes.string,
    src: PropTypes.string
}

export default LatestCard