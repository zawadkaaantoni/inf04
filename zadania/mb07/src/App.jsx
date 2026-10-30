import { useState } from 'react'

const listaKursow = [
  'Programowanie w C#',
  'Angular dla początkujących',
  'Kurs Django',
  'Wprowadzenie do SQL'
]

function App() {
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
    </main>
  )
}

export default App
