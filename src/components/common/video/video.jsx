import PropTypes from 'prop-types';
import ReactPlayer from 'react-player'

function Video({src }) {
  return (
    <div>
        <ReactPlayer url={src} />
    </div>
  )
}

Video.propTypes = {
    src : PropTypes.string
}

export default Video