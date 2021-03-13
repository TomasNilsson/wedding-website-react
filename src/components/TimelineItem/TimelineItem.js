import React from 'react'
import ReactMarkdown from 'react-markdown'
import classNames from 'classnames'
import styles from './TimelineItem.module.scss'

const TimelineItem = ({ date, text, image, rightSide }) => (
  <div className={styles.container}>
    <div
      className={classNames(
        rightSide ? styles.rightSide : styles.leftSide,
        styles.dateCircle
      )}
    >
      <div className={styles.arrow} />
      <h4 className={styles.title}>{date}</h4>
      {!!text && <ReactMarkdown linkTarget="_blank">{text}</ReactMarkdown>}
      {!!image && <img src={image} alt={date} className={styles.image} />}
    </div>
  </div>
)

export default TimelineItem
