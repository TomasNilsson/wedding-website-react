import React, { useState } from 'react'
import Button from '../../../shared/Button'
import Modal from '../../../shared/Modal'
import Section from '../../Section'

const ModalButton = ({ buttonText, ...modalContent }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <p>
        <Button onClick={openModal}>{buttonText}</Button>
      </p>
      <Modal open={isModalOpen} onClose={closeModal}>
        <Section {...modalContent} />
      </Modal>
    </>
  )
}

export default ModalButton
