import React from 'react'
import ReactMarkdown from 'react-markdown'
import styles from './Section.module.css'

const Section = ({ title, text, id, childComponent }) => (
  <section className={styles.section} id={id}>
    <div className={styles.sectionTextWrapper}>
      <div className={title ? styles.sectionHeading : styles.sectionSeparator}>
        {!!title && <h2>{title}</h2>}
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

export default Section
