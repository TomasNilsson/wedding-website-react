import React from 'react'
import classNames from 'classnames'
import styles from './MobileMenuButton.module.scss'

const MobileMenuButton = ({ className, color = '#000000', onClick, open }) => (
  <div className={classNames(styles.container, className)} onClick={onClick}>
    <div
      className={classNames(styles.line, styles.lineTop, open && styles.open)}
      style={{ background: color }}
    />
    <div
      className={classNames(
        styles.line,
        styles.lineMiddle,
        open && styles.open
      )}
      style={{ background: color }}
    />
    <div
      className={classNames(
        styles.line,
        styles.lineBottom,
        open && styles.open
      )}
      style={{ background: color }}
    />
  </div>
)

export default MobileMenuButton
