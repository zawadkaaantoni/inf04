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

  const [fraza, setFraza] = useState('')
  const [sortAZ, setSortAZ] = useState(true)

  const wyniki = listaKursow.map((nazwa, i) => ({
    nazwa: nazwa,
    id: i + 1
  })).filter((element) =>
    element.nazwa.toLowerCase().includes(fraza.toLowerCase())
  ).sort((a, b) => {
    if (sortAZ) {
      return a.nazwa.localeCompare(b.nazwa)
    }
    return b.nazwa.localeCompare(a.nazwa)
  })


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

      <div className="d-flex gap-2 mb-2">
        <input type="text" className="form-control" placeholder="Szukaj kursu..." value={fraza} onChange={(e) => setFraza(e.target.value)} />

        <button type="button" className="btn btn-outline-secondary text-nowrap" onClick={() => setSortAZ(!sortAZ)}>
          Sortuj {sortAZ ? 'Z-A' : 'A-Z'}
        </button>
      </div>

      <p className="text-body-secondary">Znaleziono {wyniki.length} z {listaKursow.length} kursów</p>


      <ol>
        {wyniki.map((element) => (
          <li key={element.id} value={element.id}>{element.nazwa}</li>
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