import React from 'react'
import ImageSection from '../ImageSection'
import ImageGrid from './ImageGrid'

const ImageGridSection = ({ images, ...rest }) => (
  <ImageSection {...rest} childComponent={<ImageGrid images={images} />} />
)

export default ImageGridSection
