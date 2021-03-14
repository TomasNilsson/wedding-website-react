import React, { useState } from 'react'
import FormsSection from './components/sections/FormsSection'
import Header from './components/header/Header'
import ImageSection from './components/sections/ImageSection'
import ImageGridSection from './components/sections/ImageGridSection'
import InstagramWallSection from './components/sections/InstagramWallSection'
import MapSection from './components/sections/MapSection'
import ModalSection from './components/sections/ModalSection'
import Navbar from './components/navigation/Navbar'
import Section from './components/sections/Section'
import TimelineSection from './components/sections/TimelineSection'
import content from './customize/content.json'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !process.env.REACT_APP_SECRET_CODE
  )

  const checkSecretCode = (value) => {
    if (value === process.env.REACT_APP_SECRET_CODE) {
      setIsLoggedIn(true)
      window.gtag('event', 'login')
    }
  }

  const isFuture = (date) => new Date(date) > new Date()

  const sectionComponents = {
    FormsSection,
    ImageSection,
    ImageGridSection,
    InstagramWallSection,
    MapSection,
    ModalSection,
    Section,
    TimelineSection,
  }

  const sections = content.sections.filter((section) => {
    const startDate = section.startDate
    const endDate = section.endDate
    return !(
      (startDate && isFuture(startDate)) ||
      (endDate && !isFuture(endDate))
    )
  })

  const navItems = sections
    .filter((section) => !!section.inNavbar)
    .map((section) => ({
      id: section.id,
      title: section.title,
    }))

  return (
    <div className="app">
      <header>
        {isLoggedIn && <Navbar items={navItems} />}
        <Header
          {...content.header}
          scrollTo={sections.length > 0 && sections[0].id}
          isLoggedIn={isLoggedIn}
          onInputChange={checkSecretCode}
        />
      </header>
      {isLoggedIn && (
        <main>
          {sections.map(({ type, ...sectionContent }) => {
            const SectionComponent = sectionComponents[type] || Section
            return (
              <SectionComponent key={sectionContent.id} {...sectionContent} />
            )
          })}
        </main>
      )}
    </div>
  )
}

export default App
