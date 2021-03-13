import React from 'react'
import ReactMarkdown from 'react-markdown'
import styles from './ImageSection.module.scss'

const ImageSection = ({ title, text, id, childComponent }) => (
  <section className={styles.section} id={id}>
    <div className={styles.sectionTextWrapper}>
      <div className={styles.sectionHeading}>
        <h2>{title}</h2>
      </div>
      {!!text && (
        <ReactMarkdown className={styles.sectionText} linkTarget="_blank">
          {text}
        </ReactMarkdown>
      )}
    </div>
    {childComponent}
  </section>
)

export default ImageSection
