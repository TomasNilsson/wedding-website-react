import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Input.module.scss'

class Input extends Component {
  constructor(props) {
    super(props)

    this.state = {
      active: false,
      value: '',
    }
  }

  handleChange = (event) => {
    const value = event.target.value
    this.setState({ value })
    this.props.onChange(value)
  }

  render() {
    const { active, value } = this.state
    const { label, type } = this.props

    return (
      <div
        className={classNames(styles.field, {
          [styles.active]: active || value,
        })}
      >
        <input
          type={type}
          value={value}
          placeholder={label}
          onChange={this.handleChange}
          onFocus={() => this.setState({ active: true })}
          onBlur={() => this.setState({ active: false })}
        />
        <label>{label}</label>
      </div>
    )
  }
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
}

Input.defaultProps = {
  label: 'Label',
  type: 'text',
  onChange: () => {},
}

export default Input
