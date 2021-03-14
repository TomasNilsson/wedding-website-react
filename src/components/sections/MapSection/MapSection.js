import React, { useState } from 'react'
import GoogleMap from 'google-map-react'
import MapLocation from './MapLocation'
import MapMarker from './MapMarker'
import styles from './MapSection.module.scss'

const MapSection = ({
  id,
  center = { lat: 55.76578, lng: 13.322263 },
  zoom = 11,
  locations,
  showLocationTextSection = true,
}) => {
  const [hoveredMarkerId, setHoveredMarkerId] = useState('')

  const onMarkerHoverEnter = (key) => {
    setHoveredMarkerId(key)
  }

  const onMarkerHoverLeave = () => {
    setHoveredMarkerId('')
  }

  const onMarkerClick = (key, markerProps) => {
    window.open(markerProps.link)
  }

  return (
    <section className={styles.section} id={id}>
      {showLocationTextSection && (
        <div className={styles.subsectionWrapper}>
          {locations &&
            locations.map((location) => (
              <MapLocation
                icon={location.icon}
                title={location.title}
                text={location.text}
                hovered={location.id === hoveredMarkerId}
                key={location.id}
              />
            ))}
        </div>
      )}
      <div className={styles.subsectionWrapper}>
        <GoogleMap
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
            language: 'sv',
            region: 'SE',
          }}
          defaultCenter={center}
          defaultZoom={zoom}
          onChildMouseEnter={onMarkerHoverEnter}
          onChildMouseLeave={onMarkerHoverLeave}
          onChildClick={onMarkerClick}
        >
          {locations &&
            locations.map((location) => (
              <MapMarker
                lat={location.latitude}
                lng={location.longitude}
                icon={location.icon}
                title={location.title}
                link={location.link}
                key={location.id}
                showTooltip={!showLocationTextSection}
              />
            ))}
        </GoogleMap>
      </div>
    </section>
  )
}

export default MapSection
