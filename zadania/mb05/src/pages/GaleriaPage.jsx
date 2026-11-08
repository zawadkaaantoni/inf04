import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useZdjecia } from '../hooks/useZdjecia.js'
import { usunZGalerii, zmienUlubione } from '../services/zdjecia.js'
import CategoryBar from '../components/CategoryBar.jsx'
import Gallery from '../components/Gallery.jsx'
import ZdjecieDnia from '../components/ZdjecieDnia.jsx'

function GaleriaPage() {
  const { lista, setLista, ladowanie, blad } = useZdjecia()
  const [filtr, setFiltr] = useState('wszystkie')

  const pokazane = lista.filter((element) => {
    return filtr === 'wszystkie' || element.category === filtr
  })

  const usun = (id) => {
    const nowaLista = usunZGalerii(id)
    setLista(nowaLista)
  }

  const ulubione = (id) => {
    setLista(zmienUlubione(id))
  }

  if (ladowanie) {
    return (
      <div className="container text-center py-5">
        <div className="spinner-grow text-primary" role="status"></div>
        <p className="mt-3 text-secondary">
          Wczytywanie zdjęć...
        </p>
      </div>
    )
  }

  if (blad) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger">
          Wystąpił problem: {blad}
        </div>
      </div>
    )
  }

  if (lista.length === 0) {
    return (
      <div className="container mt-4">
        <div className="alert alert-secondary">
          Galeria jest obecnie pusta.
        </div>
      </div>
    )
  }

  return (
    <>
      <header className="container py-4">
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
          <div>
            <h1 className="display-6 fw-bold mb-1">
              Galeria zdjęć
            </h1>
            <p className="text-body-secondary mb-0">
              Przeglądaj zdjęcia z różnych miejsc.
            </p>
          </div>

          <Link to="/dodaj" className="btn btn-success">
            + Dodaj zdjęcie
          </Link>
        </div>
      </header>

      <main className="container">
        <CategoryBar
          aktywna={filtr}
          onWybierz={setFiltr}
        />

        <p className="small text-muted mb-3">
          Wyświetlono {pokazane.length} z {lista.length} zdjęć
        </p>

        {pokazane.length === 0 ? (
          <div className="alert alert-info">
            Brak zdjęć w wybranej kategorii.
          </div>
        ) : (
          <Gallery
            zdjecia={pokazane}
            onUsun={usun}
            onPrzelacz={ulubione}
          />
        )}

        <div className="mt-5 border-top pt-4">
          <ZdjecieDnia />
        </div>
      </main>
    </>
  )
}

export default GaleriaPage
