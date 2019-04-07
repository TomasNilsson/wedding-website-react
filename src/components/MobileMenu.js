import React, { Component } from 'react'
import PropTypes from 'prop-types'

class MobileMenu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: this.props.open ? this.props.open : false,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open })
    }
  }

  handleClick() {
    this.setState({ open: !this.state.open })
  }

  render() {
    const styles = {
      container: {
        position: 'fixed',
        top: 0,
        left: 0,
        height: this.state.open ? '100%' : 0,
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        background: '#000000',
        color: '#fafafa',
        transition: 'height 0.3s ease',
        zIndex: 100,
      },
      menuList: {
        paddingTop: '3rem',
      },
    }
    return (
      <div style={styles.container}>
        {this.state.open ? (
          <div style={styles.menuList}>{this.props.children}</div>
        ) : null}
      </div>
    )
  }
}

MobileMenu.propTypes = {
  open: PropTypes.bool,
}

export default MobileMenu
