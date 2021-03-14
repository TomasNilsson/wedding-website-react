import React, { useEffect, useState } from 'react'
import { Link, scroller, animateScroll } from 'react-scroll'
import classNames from 'classnames'
import MobileMenu from '../MobileMenu'
import MobileMenuButton from '../MobileMenuButton'
import MobileMenuItem from '../MobileMenuItem'
import styles from './Navbar.module.scss'

const Navbar = ({ items = [] }) => {
  const [isTop, setIsTop] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const hasOverflowHidden =
        document.documentElement.style.getPropertyValue('overflow') === 'hidden' // true when modal is open
      setIsTop(window.pageYOffset < 100 && !hasOverflowHidden)
    })
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleLinkClick = (to) => {
    setIsMobileMenuOpen(false)
    scroller.scrollTo(to, {
      smooth: true,
      offset: -25,
      duration: 1000,
    })
  }

  const scrollToTop = () => {
    animateScroll.scrollToTop()
  }

  return (
    <>
      <nav
        className={classNames(styles.nav, {
          [styles.navTransparent]: isTop || isMobileMenuOpen,
        })}
        id="navbar"
      >
        <MobileMenuButton
          open={isMobileMenuOpen}
          onClick={toggleMobileMenu}
          color={isTop || isMobileMenuOpen ? '#ffffff' : '#000000'}
          className={`${styles.mobileMenuButton} d-lg-none`}
        />
        <div onClick={scrollToTop} className={`${styles.navIcon} d-lg-none`}>
          <i className="icon icon-hearts" />
        </div>
        <div className={`${styles.navContent} d-none d-lg-flex`}>
          <ul className={styles.navItems}>
            {items.map((item) => (
              <li className={styles.navItem} key={item.id}>
                <Link
                  activeClass={styles.active}
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
      <MobileMenu open={isMobileMenuOpen}>
        {items.map((item, index) => (
          <MobileMenuItem
            key={item.id}
            delay={`${index * 0.1}s`}
            onClick={() => {
              handleLinkClick(item.id)
            }}
          >
            {item.title}
          </MobileMenuItem>
        ))}
      </MobileMenu>
    </>
  )
}

export default Navbar
