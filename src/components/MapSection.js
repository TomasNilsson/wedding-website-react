import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GoogleMap from 'google-map-react'
import MapLocation from './MapLocation'
import MapMarker from './MapMarker'
import './MapSection.css'

class MapSection extends Component {
  render() {
    const { id, center, zoom, locations } = this.props
    return (
      <section className="map-section" id={id}>
        <div className="map-section-wrapper">
          {locations &&
            locations.map(location => (
              <MapLocation
                icon={location.icon}
                title={location.title}
                text={location.text}
                key={location.title}
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
          >
            {locations &&
              locations.map((location, i) => (
                <MapMarker
                  lat={location.latitude}
                  lng={location.longitude}
                  icon={location.icon}
                  key={location.title}
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
