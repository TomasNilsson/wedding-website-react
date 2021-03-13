import React from 'react'
import styles from './InstagramWall.module.scss'

const InstagramWall = ({ wallUrl }) => (
  <div className={styles.wrapper}>
    <iframe
      src={wallUrl}
      title="Instagram"
      className={styles.instagramWallIframe}
      scrolling="no"
    />
  </div>
)

export default InstagramWall
