import { useParams, useNavigate } from 'react-router-dom'
import { useZdjecia } from '../hooks/useZdjecia.js'

function ZdjeciePage() {
  const { id } = useParams()
  const przejdz = useNavigate()
  const { lista, ladowanie, blad } = useZdjecia()

  const wybrane = lista.find((element) => element.id === Number(id))

  if (ladowanie) {
    return (
      <p className="container mt-5 text-muted">
        Wczytywanie zdjęcia...
      </p>
    )
  }

  if (blad) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger">
          {blad}
        </div>
      </div>
    )
  }

  if (!wybrane) {
    return (
      <div className="container mt-5">
        <div className="alert alert-warning">
          Nie znaleziono zdjęcia o numerze {id}.
        </div>

        <button
          className="btn btn-outline-dark"
          onClick={() => przejdz(-1)}
        >
          Powrót
        </button>
      </div>
    )
  }

  return (
    <main className="container py-5">
      <h1 className="h2 fw-bold mb-4">
        {wybrane.title}
      </h1>

      <img
        src={wybrane.imageLarge || wybrane.image}
        className="img-fluid rounded-3 shadow-sm"
        alt={wybrane.alt || wybrane.title}
      />

      <p className="lead mt-4">
        {wybrane.description}
      </p>

      <button
        type="button"
        className="btn btn-outline-dark mt-2"
        onClick={() => przejdz(-1)}
      >
        Wróć
      </button>
    </main>
  )
}

export default ZdjeciePage