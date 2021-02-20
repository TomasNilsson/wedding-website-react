import React, { Component } from 'react'
import PropTypes from 'prop-types'

const MARKER_SIZE = 40

const styles = {
  marker: {
    position: 'absolute',
    width: MARKER_SIZE,
    height: MARKER_SIZE,
    left: -MARKER_SIZE / 2,
    top: -MARKER_SIZE / 2,
    border: '5px solid #000000',
    borderRadius: MARKER_SIZE,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    color: '#890f3a',
    fontSize: 35,
    padding: 4,
    cursor: 'pointer',
  },
  hover: {
    border: '5px solid #890f3a',
    color: '#000000',
  },
}

class MapMarker extends Component {
  render() {
    const { $hover, icon } = this.props
    return (
      <div style={{ ...styles.marker, ...($hover ? styles.hover : {}) }}>
        <i className={`icon icon-${icon}`} />
      </div>
    )
  }
}

MapMarker.propTypes = {
  // GoogleMap pass $hover props to hovered components.
  $hover: PropTypes.bool,
  icon: PropTypes.string.isRequired,
}

export default MapMarker
