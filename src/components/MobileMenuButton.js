import React, { Component } from 'react'
import PropTypes from 'prop-types'

class MobileMenuButton extends Component {
  render() {
    const styles = {
      container: {
        height: '32px',
        width: '32px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        padding: '4px',
      },
      line: {
        height: '2px',
        width: '20px',
        background: this.props.color || '#000000',
        transition: 'all 0.2s ease',
      },
      lineTop: {
        transform: this.props.open ? 'rotate(45deg)' : 'none',
        transformOrigin: 'top left',
        marginBottom: '5px',
      },
      lineMiddle: {
        opacity: this.props.open ? 0 : 1,
        transform: this.props.open ? 'translateX(-16px)' : 'none',
      },
      lineBottom: {
        transform: this.props.open ? 'translateX(-1px) rotate(-45deg)' : 'none',
        transformOrigin: 'top left',
        marginTop: '5px',
      },
    }
    return (
      <div
        className={this.props.className}
        style={styles.container}
        onClick={this.props.onClick}
      >
        <div style={{ ...styles.line, ...styles.lineTop }} />
        <div style={{ ...styles.line, ...styles.lineMiddle }} />
        <div style={{ ...styles.line, ...styles.lineBottom }} />
      </div>
    )
  }
}

MobileMenuButton.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  open: PropTypes.bool,
}

export default MobileMenuButton
