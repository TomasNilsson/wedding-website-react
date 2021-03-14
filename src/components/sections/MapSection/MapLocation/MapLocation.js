import React from 'react'
import ReactMarkdown from 'react-markdown'
import classNames from 'classnames'
import styles from './MapLocation.module.scss'

const MapLocation = ({ icon, title, text, hovered }) => (
  <div className={styles.wrapper}>
    <h2 className={classNames(styles.locationTitle, hovered && styles.hovered)}>
      <i className={`icon icon-${icon}`} />
      {title}
    </h2>
    {!!text && <ReactMarkdown linkTarget="_blank">{text}</ReactMarkdown>}
  </div>
)

export default MapLocation
