import React from 'react'
import TimelineItem from './TimelineItem'
import './Timeline.css'

const Timeline = ({ items }) => (
  <div className="timeline">
    <div className="timeline-left col-xs-12 col-md-6">
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
    <div className="timeline-right col-xs-12 col-md-6">
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
