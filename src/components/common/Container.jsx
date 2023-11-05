import PropTypes from 'prop-types'

const container = {
  maxWidth: '1320px',
  margin: '0 auto'
}

export default function Container(props) {
  return (
    <div style={container}>
      {props.children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.any
}