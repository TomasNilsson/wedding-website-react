import React, { Component } from 'react'
import { Modal as ModalComponent } from 'react-responsive-modal'
import Section from './Section'
import 'react-responsive-modal/styles.css'
import './Modal.css'

class Modal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
    }
  }

  openModal = () => {
    this.setState({ open: true })
  }

  closeModal = () => {
    this.setState({ open: false })
  }

  render() {
    const { buttonText, title, text } = this.props
    const { open } = this.state
    return (
      <div>
        <p>
          <button className="modal-button" onClick={this.openModal}>
            {buttonText}
          </button>
        </p>
        <ModalComponent
          open={open}
          onClose={this.closeModal}
          center
          classNames={{
            modal: 'modal-component',
            closeButton: 'modal-close',
          }}
          focusTrapped={false}
        >
          <Section title={title} text={text} id={'modal'} />
        </ModalComponent>
      </div>
    )
  }
}

export default Modal
