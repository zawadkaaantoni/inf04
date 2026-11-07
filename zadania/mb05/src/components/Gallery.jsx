import PhotoCard from './PhotoCard.jsx'

function Gallery({ zdjecia, onUsun, onPrzelacz }) {
  return (
    <div id="galeria" className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3">
      {zdjecia.map((element) => (
        <div className="col" key={element.id}>
          <PhotoCard
            {...element}
            onUsun={() => onUsun(element.id)}
            onPrzelacz={() => onPrzelacz(element.id)}
          />
        </div>
      ))}
    </div>
  )
}

export default Gallery