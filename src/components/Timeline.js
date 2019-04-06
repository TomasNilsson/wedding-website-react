import React from 'react'
import TimelineItem from './TimelineItem'
import './Timeline.css'

const Timeline = ({ items }) => (
  <div className="timeline">
    <div className="timeline-column d-none d-lg-block">
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
    <div className="timeline-column d-none d-lg-block">
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
    <div className="timeline-column d-lg-none">
      {items &&
        items.map((item, i) => (
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
