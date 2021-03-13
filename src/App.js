import React, { Component } from 'react'
import FormsSection from './components/sections/FormsSection'
import Header from './components/header/Header'
import ImageGridSection from './components/sections/ImageGridSection'
import InstagramWallSection from './components/sections/InstagramWallSection'
import MapSection from './components/sections/MapSection'
import ModalSection from './components/sections/ModalSection'
import Navbar from './components/navigation/Navbar'
import Section from './components/sections/Section'
import TimelineSection from './components/sections/TimelineSection'
import content from './customize/content.json'
import './App.scss'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: !process.env.REACT_APP_SECRET_CODE,
    }
  }

  checkSecretCode = (value) => {
    if (value === process.env.REACT_APP_SECRET_CODE) {
      this.setState({
        isLoggedIn: true,
      })
      window.gtag('event', 'login')
    }
  }

  isFuture = (date) => new Date(date) > new Date()

  render() {
    const { isLoggedIn } = this.state

    return (
      <div className="app">
        {isLoggedIn && (
          <Navbar
            items={[
              'ourStory',
              'hashtag',
              'info',
              'map',
              'miscInfo',
              'imageGrid',
              'wishlist',
              'rsvp',
              'imageUpload',
            ]
              .filter((item) => {
                const startDate = content[item].startDate
                const endDate = content[item].endDate
                return !(
                  (startDate && this.isFuture(startDate)) ||
                  (endDate && !this.isFuture(endDate))
                )
              })
              .map((item) => ({
                id: content[item].id,
                title: content[item].title,
              }))}
          />
        )}
        <Header
          {...content.header}
          scrollTo={content.ourStory.id}
          isLoggedIn={isLoggedIn}
          onInputChange={this.checkSecretCode}
        />
        {isLoggedIn && (
          <div className="container">
            <TimelineSection
              {...content.ourStory}
              timeline={content.timeline}
            />
            <InstagramWallSection {...content.hashtag} />
            <Section {...content.info} />
            <MapSection {...content.map} />
            <ModalSection {...content.miscInfo} />
            <ImageGridSection {...content.imageGrid} />
            <Section {...content.wishlist} />
            {this.isFuture(content.rsvp.endDate) && (
              <FormsSection {...content.rsvp} />
            )}
            {!this.isFuture(content.imageUpload.startDate) && (
              <FormsSection {...content.imageUpload} />
            )}
            <Section {...content.contact} />
            <Section {...content.footer} />
          </div>
        )}
      </div>
    )
  }
}

export default App
