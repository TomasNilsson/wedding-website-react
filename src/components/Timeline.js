import React from 'react'
import TimelineItem from './TimelineItem'
import './Timeline.css'

const Timeline = ({ items }) => (
  <div className="timeline">
    {items &&
      items.map((item, i) => (
        <TimelineItem
          key={item.date}
          date={item.date}
          text={item.text}
          image={item.image}
          textRight={i % 2 === 1}
        />
      ))}
  </div>
)

export default Timeline
