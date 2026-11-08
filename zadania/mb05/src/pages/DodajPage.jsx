
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useZdjecia } from '../hooks/useZdjecia.js'
import { zapiszZdjecie } from '../services/zdjecia.js'

const poczatkoweDane = {
  title: '',
  category: '',
  image: '',
  description: ''
}

function DodajPage() {
  const przejdz = useNavigate()
  const { ladowanie, blad } = useZdjecia()

  const [dane, setDane] = useState(poczatkoweDane)

  const aktualizuj = (e) => {
    const { name, value } = e.target

    setDane((poprzednie) => ({
      ...poprzednie,
      [name]: value
    }))
  }

  const zapisz = (e) => {
    e.preventDefault()

    zapiszZdjecie({
      title: dane.title.trim(),
      category: dane.category,
      image: dane.image.trim(),
      imageLarge: dane.image.trim(),
      alt: dane.title.trim(),
      description: dane.description.trim()
    })

    przejdz('/')
  }

  if (ladowanie) {
    return (
      <p className="container mt-5 text-muted">
        Przygotowywanie formularza...
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

  return (
    <main className="container py-5" style={{ maxWidth: '750px' }}>
      <h1 className="h2 fw-bold mb-4">
        Dodaj nowe zdjęcie
      </h1>

      <form onSubmit={zapisz} className="row g-4">
        <div className="col-12 col-md-7">
          <label htmlFor="tytul" className="form-label">
            Tytuł zdjęcia
          </label>

          <input
            id="tytul"
            name="title"
            type="text"
            className="form-control"
            value={dane.title}
            onChange={aktualizuj}
            required
          />
        </div>

        <div className="col-12 col-md-5">
          <label htmlFor="kategoria" className="form-label">
            Kategoria
          </label>

          <select
            id="kategoria"
            name="category"
            className="form-select"
            value={dane.category}
            onChange={aktualizuj}
            required
          >
            <option value="" disabled>
              Wybierz kategorię
            </option>
            <option value="gory">Góry</option>
            <option value="morze">Morze</option>
            <option value="miasto">Miasto</option>
          </select>
        </div>

        <div className="col-12">
          <label htmlFor="adres" className="form-label">
            Adres URL zdjęcia
          </label>

          <input
            id="adres"
            name="image"
            type="url"
            className="form-control"
            placeholder="https://example.com/zdjecie.jpg"
            value={dane.image}
            onChange={aktualizuj}
            required
          />
        </div>

        <div className="col-12">
          <label htmlFor="opis" className="form-label">
            Opis zdjęcia
          </label>

          <textarea
            id="opis"
            name="description"
            className="form-control"
            rows={4}
            value={dane.description}
            onChange={aktualizuj}
          />
        </div>

        <div className="col-12 d-flex gap-3">
          <button type="submit" className="btn btn-success px-4">
            Zapisz zdjęcie
          </button>

          <Link to="/" className="btn btn-outline-secondary">
            Anuluj
          </Link>
        </div>
      </form>
    </main>
  )
}

export default DodajPage
