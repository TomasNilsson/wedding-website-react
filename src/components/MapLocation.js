import React from 'react'
import './MapLocation.css'

const MapLocation = ({ icon, title, text }) => (
  <div className="map-location-wrapper">
    <div className="map-location-title">
      <h2>
        <i className={`icon icon-${icon}`} />
        {title}
      </h2>
    </div>
    {text &&
      text.split('\n').map((item, i) => (
        <p className="map-location-text" key={i}>
          {item}
        </p>
      ))}
  </div>
)

export default MapLocation
