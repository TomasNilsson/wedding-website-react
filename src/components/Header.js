import React from 'react'
import Countdown from './Countdown'
import './Header.css'

const Header = ({ scrollTo }) => (
  <div className="main-slider">
    <div className="slider-content">
      <h3 className="pre-title">
        <span className="custom-color">W</span>edding
      </h3>
      <h1 className="title">
        Alice <i className="icon icon-heart" /> Bob
      </h1>
      <h5 className="date">5 October 2030</h5>
      <Countdown date={'2030-10-05T14:00:00+01:00'} className={'count-down'} />
      <div className="slider-scroll">
        <a className="scroll-link" href={`#${scrollTo}`}>
          <i className="fa fa-angle-down fade-down" />
        </a>
      </div>
    </div>
  </div>
)

export default Header
