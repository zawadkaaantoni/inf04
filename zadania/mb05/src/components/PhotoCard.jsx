import { Link } from 'react-router-dom'

const nazwyKategorii = {
  gory: 'Góry',
  morze: 'Morze',
  miasto: 'Miasto'
}

const kolory = {
  gory: 'success',
  morze: 'info',
  miasto: 'secondary'
}

function PhotoCard({
  id,
  title,
  description,
  category,
  image,
  alt,
  favorite,
  onUsun,
  onPrzelacz
}) {
  return (
    <article className="card h-100 border-0 shadow">
      <img
        src={image}
        className="card-img-top"
        alt={alt}
      />

      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h3 className="card-title fs-5">{title}</h3>

          <button
            type="button"
            className="btn btn-light border rounded-circle"
            onClick={onPrzelacz}
            aria-label={favorite ? 'Usuń z ulubionych' : 'Dodaj do ulubionych'}
            aria-pressed={Boolean(favorite)}
          >
            <span className={favorite ? 'text-warning' : 'text-secondary'}>
              {favorite ? '★' : '☆'}
            </span>
          </button>
        </div>

        <div className="mb-3">
          <span className={`badge bg-${kolory[category] || 'secondary'}`}>
            {nazwyKategorii[category] || category}
          </span>
        </div>

        <p className="card-text text-muted flex-grow-1">
          {description}
        </p>

        <div className="d-flex gap-2">
          <Link
            to={`/zdjecie/${id}`}
            className="btn btn-primary flex-grow-1"
          >
            Zobacz zdjęcie
          </Link>

          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={onUsun}
          >
            Usuń
          </button>
        </div>
      </div>
    </article>
  )
}

export default PhotoCard