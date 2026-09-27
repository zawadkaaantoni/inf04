function Gallery({ zdjecia, onUsun }) {
  return (
    <div id="galeria" className="row g-4">
      {zdjecia.map(item => (
        <Fragment key={item.id}>
          <div className="col-12 col-md-6 col-lg-4">
            <PhotoCard {...item} onUsun={() => onUsun(item.id)} />
          </div>
          <PhotoModal {...item} />
        </Fragment>
      ))}
    </div>
  )
}