import React from 'react'
import classNames from 'classnames'
import styles from './MobileMenu.module.scss'

const MobileMenu = ({ open, children }) => (
  <div className={classNames(styles.container, open && styles.open)}>
    {!!open && <ul className={styles.menuList}>{children}</ul>}
  </div>
)

export default MobileMenu
