import React from 'react'
import './TimelineItem.css'

const TimelineItem = ({ date, text, image, textRight }) =>
  textRight ? (
    <div className="timeline-item">
      <div className="timeline-thumbnail-left story-img" />
      <div className="timeline-right-side col-xs-12 col-md-6 date-circle">
        <div className="timeline-arrow" />
        <h4 className="timeline-title">{date}</h4>
        <p>{text}</p>
      </div>
    </div>
  ) : (
    <div className="timeline-item">
      <div className="timeline-left-side col-xs-12 col-md-6 date-circle">
        <div className="timeline-arrow" />
        <h4 className="timeline-title">{date}</h4>
        <p>{text}</p>
      </div>
      <div className="timeline-thumbnail-right story-img" />
    </div>
  )

export default TimelineItem
