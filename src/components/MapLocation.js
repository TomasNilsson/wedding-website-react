import React from 'react'
import ReactMarkdown from 'react-markdown'
import './MapLocation.css'

const MapLocation = ({ icon, title, text, hovered }) => (
  <div
    className={`map-location-wrapper${
      hovered ? ' map-location-wrapper-hovered' : ''
    }`}
  >
    <div className="map-location-title">
      <h2>
        <i className={`icon icon-${icon}`} />
        {title}
      </h2>
    </div>
    {text && (
      <ReactMarkdown
        source={text}
        className="map-location-text"
        linkTarget="_blank"
      />
    )}
  </div>
)

export default MapLocation
