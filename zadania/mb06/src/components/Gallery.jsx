function Gallery({ zdjecia, onUsun, onPrzelaczUlubione }) {
  return (
    <div id="galeria" className="row g-4">
      {zdjecia.map(item => (
        <Fragment key={item.id}>
          <div className="col-12 col-md-6 col-lg-4">
            <PhotoCard
              {...item}
              onUsun={() => onUsun(item.id)}
              onToggleFavorite={() => onPrzelaczUlubione(item.id)}
            />
          </div>
          <PhotoModal {...item} />
        </Fragment>
      ))}
    </div>
  )
}

export default Gallery