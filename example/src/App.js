import React from 'react'

import { ImageGallerySlider } from 'react-image-gallery-slider'
import 'react-image-gallery-slider/build/index.css'
import { IMAGES } from './config'

const App = () => {
  return (
    <div className='demo-container'>
      <h1 className='demo-title'>REACT IMAGE GALLERY SLIDER DEMO</h1>
      <div className='demo-container-imageGallery'>
        <ImageGallerySlider images={IMAGES} />
      </div>
    </div>
  )
}

export default App
