import React from 'react'
import classNames from 'classnames'
import styles from './MapMarker.module.css'

const MapMarker = ({ $hover, icon, title, showTooltip }) => (
  // google-map-react pass $hover prop to hovered component
  <div className={classNames(styles.marker, $hover && styles.markerHover)}>
    <i className={`icon icon-${icon}`} />
    {$hover && showTooltip && title && (
      <div className={styles.tooltip}>
        <div className={styles.tooltipLabel}>{title}</div>
        <div className={styles.tooltipArrow} />
      </div>
    )}
  </div>
)

export default MapMarker
