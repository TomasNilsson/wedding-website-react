import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import Button from '../../shared/Button'
import Modal from '../../shared/Modal'
import styles from './FormsSection.module.scss'

const FormsSection = ({ forms, id }) => {
  const [selectedFormId, setSelectedFormId] = useState('')

  const openFormModal = (formId) => {
    setSelectedFormId(formId)
  }

  const closeFormModal = () => {
    setSelectedFormId('')
  }

  const openNewWindow = (url) => {
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

  return (
    <section className={styles.section} id={id}>
      {forms &&
        forms.map(({ id, title, text, buttonText, url, newWindow = false }) => (
          <div className={styles.subsectionWrapper} key={id}>
            <div className={styles.subsectionHeading}>
              <h2>{title}</h2>
            </div>
            {!!text && (
              <ReactMarkdown
                className={styles.subsectionText}
                linkTarget="_blank"
              >
                {text}
              </ReactMarkdown>
            )}
            <Button
              large
              onClick={() =>
                newWindow ? openNewWindow(url) : openFormModal(id)
              }
            >
              {buttonText}
            </Button>
            <Modal
              open={id === selectedFormId}
              onClose={closeFormModal}
              fullHeight
            >
              <iframe
                className={styles.formModalIframe}
                title={title}
                src={url}
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

export default FormsSection
