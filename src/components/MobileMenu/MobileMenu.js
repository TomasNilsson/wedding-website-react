import React from 'react'
import classNames from 'classnames'
import styles from './MobileMenu.module.css'

const MobileMenu = ({ open, children }) => (
  <div className={classNames(styles.container, open && styles.open)}>
    {!!open && <div className={styles.menuList}>{children}</div>}
  </div>
)

export default MobileMenu
