import React from 'react'
import TimelineItem from './TimelineItem'
import './Timeline.css'

const Timeline = ({ items }) => (
  <div className="timeline d-none d-lg-flex">
    <div className="timeline-column">
      {items &&
        items
          .filter(item => item.side === 'left')
          .map((item, i) => (
            <TimelineItem
              key={item.date}
              date={item.date}
              text={item.text}
              image={item.image}
            />
          ))}
    </div>
    <div className="timeline-column">
      <div className="timeline-spacing" />
      {items &&
        items
          .filter(item => item.side === 'right')
          .map((item, i) => (
            <TimelineItem
              key={item.date}
              date={item.date}
              text={item.text}
              image={item.image}
              rightSide
            />
          ))}
    </div>
  </div>
)

export default Timeline
