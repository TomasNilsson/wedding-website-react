import React from 'react'
import ReactMarkdown from 'react-markdown'
import styles from './ImageSection.module.scss'

const ImageSection = ({ title, text, id, childComponent }) => (
  <section className={styles.section} id={id}>
    <div className={styles.sectionTextWrapper}>
      {!!title && <h2 className={styles.sectionHeading}>{title}</h2>}
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
