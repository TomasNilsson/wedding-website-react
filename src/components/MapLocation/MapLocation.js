import React from 'react'
import ReactMarkdown from 'react-markdown'
import classNames from 'classnames'
import styles from './MapLocation.module.scss'

const MapLocation = ({ icon, title, text, hovered }) => (
  <div className={styles.wrapper}>
    <div
      className={classNames(styles.locationTitle, hovered && styles.hovered)}
    >
      <h2>
        <i className={`icon icon-${icon}`} />
        {title}
      </h2>
    </div>
    {!!text && <ReactMarkdown linkTarget="_blank">{text}</ReactMarkdown>}
  </div>
)

export default MapLocation
