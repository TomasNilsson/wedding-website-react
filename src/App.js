import React, { Component } from 'react'
import Header from './components/Header'
import ImageSection from './components/ImageSection'
import MapSection from './components/MapSection'
import Section from './components/Section'
import Timeline from './components/Timeline'
import content from './content.json'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header scrollTo={'ourStory'} />
        <Section
          title={content.ourStory.title}
          text={content.ourStory.text}
          id={'ourStory'}
          childComponent={<Timeline items={content.timeline} />}
        />
        <ImageSection
          title={content.hashtag.title}
          text={content.hashtag.text}
          id={'hashtag'}
        />
        <Section
          title={content.info.title}
          text={content.info.text}
          id={'info'}
        />
        <MapSection
          center={content.map.center}
          zoom={11}
          locations={content.map.locations}
          id={'map'}
        />
        <Section
          title={content.miscInfo.title}
          text={content.miscInfo.text}
          id={'miscInfo'}
        />
        <Section
          title={content.wishes.title}
          text={content.wishes.text}
          id={'wishes'}
        />
      </div>
    )
  }
}

export default App
