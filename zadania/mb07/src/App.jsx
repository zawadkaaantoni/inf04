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

  const wyniki = listaKursow.map((nazwa, i) => ({
    nazwa: nazwa,
    id: i + 1
    })).filter((element) =>
    element.nazwa.toLowerCase().includes(fraza.toLowerCase()))


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

      <input type="text" className="form-control mb-2" placeholder="Szukaj kursu..." value={fraza} onChange={(e) => setFraza(e.target.value)}/>

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