import React from 'react'
import TimelineItem from '../TimelineItem'
import styles from './Timeline.module.css'

const Timeline = ({ items = [] }) => (
  <div className={styles.timeline}>
    <div className={`${styles.column} d-none d-lg-block`}>
      {items
        .filter((item) => item.side === 'left')
        .map((item) => (
          <TimelineItem
            key={item.date}
            date={item.date}
            text={item.text}
            image={item.image}
          />
        ))}
    </div>
    <div className={`${styles.column} d-none d-lg-block`}>
      <div className={styles.spacing} />
      {items
        .filter((item) => item.side === 'right')
        .map((item) => (
          <TimelineItem
            key={item.date}
            date={item.date}
            text={item.text}
            image={item.image}
            rightSide
          />
        ))}
    </div>
    <div className={`${styles.column} d-lg-none`}>
      {items.map((item) => (
        <TimelineItem
          key={item.date}
          date={item.date}
          text={item.text}
          image={item.image}
        />
      ))}
    </div>
  </div>
)

export default Timeline
