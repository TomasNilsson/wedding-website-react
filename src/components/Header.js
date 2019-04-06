import React, { Fragment } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Link } from 'react-scroll'
import Countdown from './Countdown'
import Input from './Input'
import './Header.css'

const Header = ({
  title,
  names,
  date,
  inputLabel,
  onInputChange,
  isLoggedIn,
  scrollTo,
}) => (
  <div className="main-slider">
    <div className="slider-content">
      <h3 className="pre-title">{title}</h3>
      <h1 className="title">
        {names[0]} <i className="icon icon-hearts" /> {names[1]}
      </h1>
      {!isLoggedIn && (
        <Input type="password" label={inputLabel} onChange={onInputChange} />
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

export default Header
