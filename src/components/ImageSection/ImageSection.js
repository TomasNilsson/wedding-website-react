import React from 'react'
import ReactMarkdown from 'react-markdown'
import './ImageSection.css'

const ImageSection = ({ title, text, image, id, childComponent }) => (
  <section className="image-section" id={id}>
    <div className="image-section-text-wrapper">
      <div className="image-section-heading">
        <h2>{title}</h2>
      </div>
      {text && (
        <ReactMarkdown className="image-section-text" linkTarget="_blank">
          {text}
        </ReactMarkdown>
      )}
    </div>
    <div className="image-section-child-wrapper">{childComponent}</div>
  </section>
)

export default ImageSection
