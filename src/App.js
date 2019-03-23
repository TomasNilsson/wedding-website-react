import React, { Component, Fragment } from 'react'
import Header from './components/Header'
import ImageSection from './components/ImageSection'
import MapSection from './components/MapSection'
import Navbar from './components/Navbar'
import Section from './components/Section'
import Timeline from './components/Timeline'
import content from './content.json'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false,
    }
  }

  checkSecretCode = value => {
    this.setState({
      isLoggedIn: value === process.env.REACT_APP_SECRET_CODE,
    })
  }

  render() {
    const { isLoggedIn } = this.state

    return (
      <div className="App">
        {isLoggedIn && (
          <Navbar
            items={[
              'ourStory',
              'hashtag',
              'info',
              'map',
              'miscInfo',
              'wishlist',
            ].map(item => ({
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
          <Fragment>
            <Section
              title={content.ourStory.title}
              text={content.ourStory.text}
              id={content.ourStory.id}
              childComponent={<Timeline items={content.timeline} />}
            />
            <ImageSection
              title={content.hashtag.title}
              text={content.hashtag.text}
              id={content.hashtag.id}
            />
            <Section
              title={content.info.title}
              text={content.info.text}
              id={content.info.id}
            />
            <MapSection
              center={content.map.center}
              zoom={11}
              locations={content.map.locations}
              id={content.map.id}
            />
            <Section
              title={content.miscInfo.title}
              text={content.miscInfo.text}
              id={content.miscInfo.id}
            />
            <Section
              title={content.wishlist.title}
              text={content.wishlist.text}
              id={content.wishlist.id}
            />
          </Fragment>
        )}
      </div>
    )
  }
}

export default App
