import photosList from '../data/photos.json'
import PhotoCard from './PhotoCard.jsx'

function Gallery() {
  return (
    <div id="galeria" className="row g-4">
      {photosList.map(item => (
        <div key={item.id} className="col-12 col-md-6 col-lg-4">
          <PhotoCard {...item} />
        </div>
      ))}
    </div>
  )
}

export default Gallery