import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GoogleMap from 'google-map-react'
import MapLocation from './MapLocation'
import MapMarker from './MapMarker'
import './MapSection.css'

class MapSection extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hoveredMarkerId: null,
    }
  }

  onMarkerHoverEnter = key => {
    this.setState({
      hoveredMarkerId: key,
    })
  }

  onMarkerHoverLeave = key => {
    this.setState({
      hoveredMarkerId: null,
    })
  }

  onMarkerClick = (key, markerProps) => {
    window.open(markerProps.link)
  }

  render() {
    const { id, center, zoom, locations } = this.props
    const { hoveredMarkerId } = this.state
    return (
      <section className="map-section" id={id}>
        <div className="map-section-wrapper">
          {locations &&
            locations.map(location => (
              <MapLocation
                icon={location.icon}
                title={location.title}
                text={location.text}
                hovered={location.id === hoveredMarkerId}
                key={location.id}
              />
            ))}
        </div>
        <div className="map-section-wrapper">
          <GoogleMap
            bootstrapURLKeys={{
              key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
              language: 'sv',
              region: 'SE',
            }}
            defaultCenter={center}
            defaultZoom={zoom}
            onChildMouseEnter={this.onMarkerHoverEnter}
            onChildMouseLeave={this.onMarkerHoverLeave}
            onChildClick={this.onMarkerClick}
          >
            {locations &&
              locations.map((location, i) => (
                <MapMarker
                  lat={location.latitude}
                  lng={location.longitude}
                  icon={location.icon}
                  link={location.link}
                  key={location.id}
                />
              ))}
          </GoogleMap>
        </div>
      </section>
    )
  }
}

MapSection.propTypes = {
  id: PropTypes.string,
  center: PropTypes.object,
  zoom: PropTypes.number,
  locations: PropTypes.array,
}

MapSection.defaultProps = {
  center: {
    lat: 55.76578,
    lng: 13.322263,
  },
  zoom: 11,
}

export default MapSection
