import React from 'react'
import classNames from 'classnames'
import styles from './Button.module.scss'

const Button = ({ large = false, onClick, children }) => {
  return (
    <button
      className={classNames(styles.button, large && styles.large)}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
