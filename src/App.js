import React, { Component } from 'react'
import Header from './components/Header'
import Section from './components/Section'
import text from './text.json'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Section title={'Vår historia'} text={text.ourStory} />
      </div>
    )
  }
}

export default App
