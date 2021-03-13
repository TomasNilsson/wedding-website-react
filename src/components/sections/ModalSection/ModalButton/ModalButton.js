import React, { useState } from 'react'
import Modal from '../../../shared/Modal'
import Section from '../../Section'
import styles from './ModalButton.module.scss'

const ModalButton = ({ buttonText, ...modalContent }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div>
      <p>
        <button className={styles.openModalButton} onClick={openModal}>
          {buttonText}
        </button>
      </p>
      <Modal open={isModalOpen} onClose={closeModal}>
        <Section {...modalContent} />
      </Modal>
    </div>
  )
}

export default ModalButton
