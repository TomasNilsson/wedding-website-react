import React from 'react'
import ReactMarkdown from 'react-markdown'
import './MapLocation.css'

const MapLocation = ({ icon, title, text }) => (
  <div className="map-location-wrapper">
    <div className="map-location-title">
      <h2>
        <i className={`icon icon-${icon}`} />
        {title}
      </h2>
    </div>
    {text && <ReactMarkdown source={text} className="map-location-text" />}
  </div>
)

export default MapLocation
