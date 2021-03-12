import React from 'react'
import styles from './MobileMenuItem.module.css'

const MobileMenuItem = ({ delay, onClick, children }) => (
  <div className={styles.container} style={{ animationDelay: delay }}>
    <div
      className={styles.menuItem}
      style={{ animationDelay: delay }}
      onClick={onClick}
    >
      {children}
    </div>
    <div className={styles.line} style={{ animationDelay: delay }} />
  </div>
)

export default MobileMenuItem
