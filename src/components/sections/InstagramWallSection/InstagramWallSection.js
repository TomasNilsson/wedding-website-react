import React from 'react'
import ImageSection from '../ImageSection'
import InstagramWall from './InstagramWall'

const InstagramWallSection = ({ wallUrl, ...rest }) => (
  <ImageSection
    {...rest}
    childComponent={<InstagramWall wallUrl={wallUrl} />}
  />
)

export default InstagramWallSection
