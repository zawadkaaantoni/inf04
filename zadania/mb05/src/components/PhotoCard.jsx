const CATEGORY_MAP = {
  gory: { label: 'Góry', badgeClass: 'text-bg-success' },
  morze: { label: 'Morze', badgeClass: 'text-bg-primary' },
  miasto: { label: 'Miasto', badgeClass: 'text-bg-dark' },
}

function PhotoCard({ id, title, description, category, image, alt }) {
  const categoryInfo = CATEGORY_MAP[category] || { label: category, badgeClass: 'text-bg-secondary' }

  return (
    <div className="card h-100 shadow-sm">
      <img src={image} className="card-img-top" alt={alt} />
      <div className="card-body d-flex flex-column">
        <h3 className="card-title h5">{title}</h3>
        <p>
          <span className={`badge ${categoryInfo.badgeClass}`}>
            {categoryInfo.label}
          </span>
        </p>
        <p className="card-text text-body-secondary">{description}</p>
        <button
          type="button"
          className="btn btn-outline-primary mt-auto"
          data-bs-toggle="modal"
          data-bs-target={`#zdjecie${id}`}
        >
          Powiększ
        </button>
      </div>
    </div>
  )
}

export default PhotoCard