import React from 'react'
import { Modal as ModalComponent } from 'react-responsive-modal'
import classNames from 'classnames'
import 'react-responsive-modal/styles.css'
import styles from './Modal.module.scss'

const Modal = ({ open, onClose, fullHeight = false, children }) => (
  <ModalComponent
    open={open}
    onClose={onClose}
    center
    classNames={{
      modal: classNames(styles.modal, fullHeight && styles.fullHeight),
      closeButton: styles.closeButton,
    }}
    focusTrapped={false}
  >
    {children}
  </ModalComponent>
)

export default Modal
