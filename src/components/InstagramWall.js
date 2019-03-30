import React from 'react'
import './InstagramWall.css'

const InstagramWall = ({ wallUrl }) => (
  <div className="instagram-wall-wrapper">
    <iframe
      src={wallUrl}
      title="Instagram"
      className="instagram-wall-iframe"
      scrolling="no"
    />
  </div>
)

export default InstagramWall
