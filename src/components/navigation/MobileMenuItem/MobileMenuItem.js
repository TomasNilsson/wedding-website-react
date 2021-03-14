import React from 'react'
import styles from './MobileMenuItem.module.scss'

const MobileMenuItem = ({ delay, onClick, children }) => (
  <li className={styles.container} style={{ animationDelay: delay }}>
    <div
      className={styles.menuItem}
      style={{ animationDelay: delay }}
      onClick={onClick}
    >
      {children}
    </div>
    <div className={styles.line} style={{ animationDelay: delay }} />
  </li>
)

export default MobileMenuItem
