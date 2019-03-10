import React from 'react'
import './Section.css'

const Section = ({ title, text, id, childComponent }) => (
  <section className="section" id={id}>
    <div className="section-text-wrapper">
      <div className="section-heading">
        <h2>{title}</h2>
      </div>
      {text &&
        text.split('\n').map((item, i) => (
          <p className="section-text" key={i}>
            {item}
          </p>
        ))}
    </div>
    {childComponent}
  </section>
)

export default Section
