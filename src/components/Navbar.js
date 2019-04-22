import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, scroller } from 'react-scroll'
import MobileMenu from './MobileMenu'
import MobileMenuButton from './MobileMenuButton'
import MobileMenuItem from './MobileMenuItem'
import './Navbar.css'

class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isTop: true,
      mobileMenuOpen: false,
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const hasOverflowHidden =
        document.documentElement.style.getPropertyValue('overflow') === 'hidden' // true when modal is open
      const isTop = window.pageYOffset < 100 && !hasOverflowHidden
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }
    })
  }

  handleMenuClick() {
    this.setState({ mobileMenuOpen: !this.state.mobileMenuOpen })
  }

  handleLinkClick(to) {
    this.setState({ mobileMenuOpen: false })
    scroller.scrollTo(to, {
      smooth: true,
      offset: -25,
      duration: 1000,
    })
  }

  render() {
    const mobileMenuItems = this.props.items.map((item, index) => {
      return (
        <MobileMenuItem
          key={index}
          delay={`${index * 0.1}s`}
          onClick={() => {
            this.handleLinkClick(item.id)
          }}
        >
          {item.title}
        </MobileMenuItem>
      )
    })

    return (
      <header>
        <nav
          className={`nav${
            this.state.isTop || this.state.mobileMenuOpen
              ? ' nav-transparent'
              : ''
          }`}
          id="navbar"
        >
          <MobileMenuButton
            open={this.state.mobileMenuOpen}
            onClick={() => this.handleMenuClick()}
            color={
              this.state.isTop || this.state.mobileMenuOpen
                ? '#ffffff'
                : '#000000'
            }
            className="nav-mobile-menu-button d-lg-none"
          />
          <div className="nav-icon d-lg-none">
            <i className="icon icon-hearts" />
          </div>
          <div className="nav-content d-none d-lg-flex">
            <ul className="nav-items">
              {this.props.items.map(item => (
                <li className="nav-item" key={item.id}>
                  <Link
                    activeClass="active"
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <MobileMenu open={this.state.mobileMenuOpen}>
          {mobileMenuItems}
        </MobileMenu>
      </header>
    )
  }
}

Navbar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    })
  ),
}

Navbar.defaultProps = {
  items: [],
}

export default Navbar
