import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import Modal from 'react-responsive-modal'
import './FormsSection.css'

class FormsSection extends Component {
  constructor(props) {
    super(props)

    this.state = {
      forms: Object.assign(
        ...props.forms.map(form => ({
          [form.id]: { open: false },
        }))
      ),
    }
  }

  openModal = id => {
    this.setState(state => ({
      forms: {
        ...state.forms,
        [id]: {
          open: true,
        },
      },
    }))
  }

  closeModal = id => {
    this.setState(state => ({
      forms: {
        ...state.forms,
        [id]: {
          open: false,
        },
      },
    }))
  }

  render() {
    const { forms, id } = this.props
    return (
      <section className="forms-section" id={id}>
        {forms &&
          forms.map(form => (
            <div className="forms-section-wrapper" key={form.id}>
              <div className="forms-section-heading">
                <h2>{form.title}</h2>
              </div>
              {form.text && (
                <ReactMarkdown
                  source={form.text}
                  className="forms-section-text"
                />
              )}
              <button
                className="forms-section-button"
                onClick={() => this.openModal(form.id)}
              >
                {form.buttonText}
              </button>
              <Modal
                open={this.state.forms[form.id].open}
                onClose={() => this.closeModal(form.id)}
                center
                classNames={{
                  modal: 'forms-section-modal',
                  overlay: 'forms-section-modal-overlay',
                  closeIcon: 'forms-section-modal-close',
                }}
              >
                <iframe
                  className="forms-section-modal-iframe"
                  title={form.title}
                  src={form.url}
                  width="640"
                  height="1060"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                >
                  Loading...
                </iframe>
              </Modal>
            </div>
          ))}
      </section>
    )
  }
}

export default FormsSection
