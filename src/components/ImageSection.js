import React from 'react'
import './ImageSection.css'

const ImageSection = ({ title, text, image, id }) => (
  <section className="image-section" id={id}>
    <div className="image-section-text-wrapper">
      <div className="image-section-heading">
        <h2>{title}</h2>
      </div>
      {text &&
        text.split('\n').map((item, i) => (
          <p className="image-section-text" key={i}>
            {item}
          </p>
        ))}
    </div>
  </section>
)

export default ImageSection
