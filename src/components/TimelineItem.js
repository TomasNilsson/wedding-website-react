import React from 'react'
import ReactMarkdown from 'react-markdown'
import './TimelineItem.css'

const TimelineItem = ({ date, text, image, rightSide }) => (
  <div className="timeline-item">
    <div
      className={`${
        rightSide ? 'timeline-right-side' : 'timeline-left-side'
      } date-circle`}
    >
      <div className="timeline-arrow" />
      <h4 className="timeline-title">{date}</h4>
      {text && <ReactMarkdown source={text} className="timeline-text" />}
      {image && <img src={image} alt={date} className="timeline-image" />}
    </div>
  </div>
)

export default TimelineItem
