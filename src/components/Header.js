import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Link } from 'react-scroll'
import Countdown from './Countdown'
import Input from './Input'
import './Header.css'

class Header extends Component {
  render() {
    const {
      images,
      title,
      names,
      date,
      inputLabel,
      onInputChange,
      isLoggedIn,
      scrollTo,
    } = this.props

    return (
      <div
        className="main-slider"
        style={
          images.length > 0 ? { backgroundImage: `url(${images[0]})` } : {}
        }
      >
        {isLoggedIn &&
          images.map((imageUrl, index) => (
            <figure
              key={index}
              style={{
                backgroundImage: `url(${imageUrl})`,
                animationDuration: `${images.length * 5}s`,
                animationDelay: `${index * 5}s`,
              }}
            />
          ))}
        <div className="slider-content">
          <h3 className="pre-title">{title}</h3>
          <h1 className="title">
            {names[0]} <i className="icon icon-hearts" /> {names[1]}
          </h1>
          {!isLoggedIn && (
            <Input
              type="password"
              label={inputLabel}
              onChange={onInputChange}
            />
          )}
          <TransitionGroup component={null}>
            {isLoggedIn && (
              <CSSTransition classNames="fade" timeout={700}>
                <Fragment>
                  <h5 className="date">
                    {new Intl.DateTimeFormat('sv-SE', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    }).format(new Date(date))}
                  </h5>
                  <Countdown date={date} className={'count-down'} />
                  <div className="slider-scroll">
                    <Link
                      className="scroll-link"
                      to={scrollTo}
                      smooth={true}
                      offset={-60}
                      duration={1000}
                    >
                      <i className="fa fa-angle-down fade-down" />
                    </Link>
                  </div>
                </Fragment>
              </CSSTransition>
            )}
          </TransitionGroup>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  date: PropTypes.string,
  images: PropTypes.array,
  inputLabel: PropTypes.string,
  isLoggedIn: PropTypes.bool,
  names: PropTypes.array,
  onInputChange: PropTypes.func,
  scrollTo: PropTypes.string,
}

Header.defaultProps = {
  images: [],
}

export default Header
