import React, { useState } from 'react'
import classNames from 'classnames'
import styles from './Input.module.scss'

const Input = ({ label, type = 'text', onChange = () => {} }) => {
  const [isActive, setIsActive] = useState(false)
  const [value, setValue] = useState('')

  const handleChange = (event) => {
    const value = event.target.value
    setValue(value)
    onChange(value)
  }

  return (
    <div
      className={classNames(styles.field, {
        [styles.active]: isActive || value,
      })}
    >
      <input
        type={type}
        value={value}
        placeholder={label}
        onChange={handleChange}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
      />
      <label>{label}</label>
    </div>
  )
}

export default Input
