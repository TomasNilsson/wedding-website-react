import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Input.css'

class Input extends Component {
  constructor(props) {
    super(props)

    this.state = {
      active: false,
      value: '',
    }
  }

  handleChange = event => {
    const value = event.target.value
    this.setState({ value })
    this.props.onChange(value)
  }

  render() {
    const { active, value } = this.state
    const { label, type } = this.props
    const fieldClassName = `field ${(active || value) && 'active'}`

    return (
      <div className={fieldClassName}>
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
