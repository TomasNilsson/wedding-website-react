import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import styles from './FormsSection.module.css'

class FormsSection extends Component {
  constructor(props) {
    super(props)

    this.state = {
      forms: Object.assign(
        ...props.forms.map((form) => ({
          [form.id]: { open: false },
        }))
      ),
    }
  }

  openModal = (id) => {
    this.setState((state) => ({
      forms: {
        ...state.forms,
        [id]: {
          open: true,
        },
      },
    }))
  }

  closeModal = (id) => {
    this.setState((state) => ({
      forms: {
        ...state.forms,
        [id]: {
          open: false,
        },
      },
    }))
  }

  openNewWindow = (url) => {
    const width = 640
    const height = 800
    const left = (window.screen.width - width) / 2
    const top = (window.screen.height - height) / 2
    window.open(
      url,
      'newwindow',
      `width=${width}, height=${height}, top=${top}, left=${left}, resizable=yes, scrollbars=yes`
    )
  }

  render() {
    const { forms, id, newWindow } = this.props
    return (
      <section className={styles.section} id={id}>
        {forms &&
          forms.map((form) => (
            <div className={styles.subsectionWrapper} key={form.id}>
              <div className={styles.subsectionHeading}>
                <h2>{form.title}</h2>
              </div>
              {!!form.text && (
                <ReactMarkdown
                  className={styles.subsectionText}
                  linkTarget="_blank"
                >
                  {form.text}
                </ReactMarkdown>
              )}
              <button
                className={styles.openFormButton}
                onClick={() =>
                  newWindow
                    ? this.openNewWindow(form.url)
                    : this.openModal(form.id)
                }
              >
                {form.buttonText}
              </button>
              <Modal
                open={this.state.forms[form.id].open}
                onClose={() => this.closeModal(form.id)}
                center
                classNames={{
                  modal: styles.formModal,
                  closeButton: styles.formModalCloseButton,
                }}
                focusTrapped={false}
              >
                <iframe
                  className={styles.formModalIframe}
                  title={form.title}
                  src={form.url}
                  width="640"
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
