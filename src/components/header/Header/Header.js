import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Link } from 'react-scroll'
import Countdown from '../Countdown'
import Input from '../../shared/Input'
import styles from './Header.module.scss'

const BACKGROUND_ANIMATION_DURATION = 5

const Header = ({
  images = [],
  imagesMobile = [],
  title,
  names,
  date,
  dateFormat,
  dateFormatLanguage,
  location,
  countdownText,
  inputLabel,
  onInputChange,
  isLoggedIn,
  scrollTo,
}) => {
  const backgroundImages = window.innerWidth <= 768 ? imagesMobile : images
  const totalAnimationDuration =
    backgroundImages.length * BACKGROUND_ANIMATION_DURATION

  return (
    <div
      className={styles.imageSlider}
      style={
        backgroundImages.length > 0
          ? { backgroundImage: `url(${backgroundImages[0]})` }
          : {}
      }
    >
      {isLoggedIn &&
        backgroundImages.length > 1 &&
        backgroundImages.map((imageUrl, index) => (
          <figure
            key={index}
            style={{
              backgroundImage: `url(${imageUrl})`,
              animationDuration: `${totalAnimationDuration}s`,
              animationDelay: `${index * BACKGROUND_ANIMATION_DURATION}s`,
            }}
          />
        ))}
      <div className={styles.sliderContent}>
        <p className={styles.preTitle}>{title}</p>
        <h1 className={styles.title}>
          {names[0]} <i className="icon icon-hearts" /> {names[1]}
        </h1>
        {!isLoggedIn && (
          <Input type="password" label={inputLabel} onChange={onInputChange} />
        )}
        <TransitionGroup component={null}>
          {isLoggedIn && (
            <CSSTransition
              classNames={{
                enter: styles.fadeEnter,
                enterActive: styles.fadeEnterActive,
                exit: styles.fadeExit,
                exitActive: styles.fadeExitActive,
              }}
              timeout={700}
            >
              <>
                <time dateTime={date} className={styles.info}>
                  {new Intl.DateTimeFormat(
                    dateFormatLanguage,
                    dateFormat
                  ).format(new Date(date))}
                </time>
                {!!location && <p className={styles.info}>{location}</p>}
                <Countdown
                  date={date}
                  countdownText={countdownText}
                  className={styles.countdown}
                />
                <div>
                  <Link
                    to={scrollTo}
                    smooth={true}
                    offset={-60}
                    duration={1000}
                  >
                    <i
                      className={`fas fa-angle-down ${styles.scrollDownButton}`}
                    />
                  </Link>
                </div>
              </>
            </CSSTransition>
          )}
        </TransitionGroup>
      </div>
    </div>
  )
}

export default Header
