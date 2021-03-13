import React from 'react'
import Section from '../Section'
import Timeline from './Timeline'

const TimelineSection = ({ timeline, ...rest }) => (
  <Section {...rest} childComponent={<Timeline items={timeline} />} />
)

export default TimelineSection
