function PhotoCard({
  id,
  title,
  description,
  image,
  alt,
  favorite,
  onUsun,
  onToggleFavorite,
}) {
  return (
    <div className="card h-100 shadow-sm">
      <img src={image} className="card-img-top" alt={alt} />
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h3 className="card-title h5 mb-0">{title}</h3>
          <button
            type="button"
            className="btn btn-link p-0 fs-4 lh-1"
            onClick={onToggleFavorite}
            aria-label={favorite ? 'Usuń z ulubionych' : 'Dodaj do ulubionych'}
          >
            {favorite ? (
              <i className="bi bi-star-fill text-warning" />
            ) : (
              <i className="bi bi-star text-secondary" />
            )}
          </button>
        </div>
        <p className="card-text text-secondary">{description}</p>
        <div className="d-flex gap-2 mt-auto">
          <button
            type="button"
            className="btn btn-outline-primary flex-fill"
            data-bs-toggle="modal"
            data-bs-target={`#zdjecie${id}`}
          >
            Powiększ
          </button>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={onUsun}
          >
            Usuń
          </button>
        </div>
      </div>
    </div>
  )
}

export default PhotoCard