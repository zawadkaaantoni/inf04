import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <main className="container text-center py-5">
      <h1 className="display-1 fw-bold text-secondary">
        404
      </h1>

      <h2 className="h4 mt-3">
        Nie znaleziono strony
      </h2>

      <p className="text-muted mb-4">
        Podany adres nie istnieje.
      </p>

      <Link to="/" className="btn btn-primary px-4">
        Wróć do galerii
      </Link>
    </main>
  )
}

export default NotFoundPage