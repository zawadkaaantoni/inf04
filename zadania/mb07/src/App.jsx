import { useState } from 'react'
import { useRef } from 'react'

const listaKursow = [
  'Programowanie w C#',
  'Angular dla początkujących',
  'Kurs Django',
  'Wprowadzenie do SQL'
]

function App() {
  const osobaRef = useRef(null)
  const kursRef = useRef(null)

  const zapiszNaKurs = (e) => {
    e.preventDefault()

    const osoba = osobaRef.current.value
    const nr = Number(kursRef.current.value)
    const wybranyKurs = listaKursow[nr - 1]

    console.log(osoba)

    if (wybranyKurs === undefined) {
      console.log('Nieprawidłowy numer kursu')
    } else {
      console.log(wybranyKurs)
    }
  }

  return (
    <main className="container py-4" style={{ maxWidth: '600px' }}>
      <h1 className="h3 mb-4">Zapisy na kursy</h1>

      <h2 className="h5">
        Liczba kursów: {listaKursow.length}
      </h2>

      <ol>
        {listaKursow.map((nazwa, i) => (
          <li key={i}>{nazwa}</li>
        ))}
      </ol>

      <form onSubmit={zapiszNaKurs}>
        <div className="mb-3">
          <label htmlFor="osoba" className="form-label">
            Imię i nazwisko:
          </label>
          <input
            id="osoba"
            type="text"
            className="form-control"
            ref={osobaRef}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="kurs" className="form-label">
            Numer kursu:
          </label>
          <input
            id="kurs"
            type="number"
            className="form-control"
            ref={kursRef}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Zapisz do kursu
        </button>
      </form>
    </main>
  )
}

export default App