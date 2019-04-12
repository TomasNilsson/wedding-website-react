import React from 'react'
import ReactMarkdown from 'react-markdown'
import './Section.css'

const Section = ({ title, text, id, childComponent }) => (
  <section className="section" id={id}>
    <div className="section-text-wrapper">
      <div className={title ? 'section-heading' : 'section-separator'}>
        {title && <h2>{title}</h2>}
      </div>
      {text && (
        <ReactMarkdown
          source={text}
          className="section-text"
          linkTarget="_blank"
        />
      )}
    </div>
    {childComponent}
  </section>
)

export default Section
