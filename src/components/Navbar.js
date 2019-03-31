import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, animateScroll as scroll } from 'react-scroll'
import './Navbar.css'

class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isTop: true,
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }
    })
  }

  componentWillUnmount() {}

  render() {
    return (
      <header>
        <nav
          className={`nav d-none d-lg-block${
            this.state.isTop ? ' nav-transparent' : ''
          }`}
          id="navbar"
        >
          <div className="nav-content">
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
