import React from 'react'
import styles from './ImageGrid.module.scss'

const ImageGrid = ({ images = [] }) => (
  <div className={styles.gridWrapper}>
    {images.map((image) => (
      <img
        src={image.src}
        key={image.src}
        alt={image.caption}
        className={styles.image}
      />
    ))}
  </div>
)

export default ImageGrid
