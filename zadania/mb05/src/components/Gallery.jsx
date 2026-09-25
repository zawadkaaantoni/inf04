import { Fragment } from 'react'
import photosList from '../data/photos.json'
import PhotoCard from './PhotoCard.jsx'
import PhotoModal from './PhotoModal.jsx'

function Gallery() {
  return (
    <div id="galeria" className="row g-4">
      {photosList.map(item => (
        <Fragment key={item.id}>
          <div className="col-12 col-md-6 col-lg-4">
            <PhotoCard {...item} />
          </div>
          <PhotoModal {...item} />
        </Fragment>
      ))}
    </div>
  )
}

export default Gallery