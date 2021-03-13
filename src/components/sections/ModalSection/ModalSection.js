import React from 'react'
import Section from '../Section'
import ModalButton from './ModalButton'

const ModalSection = ({ modal, ...rest }) => (
  <Section {...rest} childComponent={<ModalButton {...modal} />} />
)

export default ModalSection
