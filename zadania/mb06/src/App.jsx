import { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import CategoryBar from './components/CategoryBar.jsx'
import Gallery from './components/Gallery.jsx'
import AddPhotoModal from './components/AddPhotoModal.jsx'
import FiltersOffcanvas from './components/FiltersOffcanvas.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  const [zdjecia, setZdjecia] = useState([])
  const [wybranaKategoria, setWybranaKategoria] = useState('wszystkie')

  useEffect(() => {
  const wczytajGalerie = async () => {
    try {
      const res = await fetch('/photos.json')

      if (!res.ok) {
        throw new Error(`Błąd pobierania: ${res.status}`)
      }

      const lista = await res.json()
      setZdjecia(lista)
    } catch (blad) {
      console.error(blad.message)
    }
  }

  wczytajGalerie()
}, [])

  const przefiltrowaneZdjecia =
    wybranaKategoria === 'wszystkie'
      ? listaZdjec
      : listaZdjec.filter(item => item.category === wybranaKategoria)

  const obslugaUsun = targetId => {
    setListaZdjec(prev => prev.filter(item => item.id !== targetId))
  }

  const obslugaDodaj = nowoDodane => {
    const nextId = Math.max(...listaZdjec.map(item => item.id), 0) + 1
    setListaZdjec(prev => [
      ...prev,
      { ...nowoDodane, id: nextId, favorite: false },
    ])
  }

  const obslugaUlubione = targetId => {
    setListaZdjec(prev =>
      prev.map(item =>
        item.id === targetId ? { ...item, favorite: !item.favorite } : item
      )
    )
  }

  return (
    <>
      <Navbar />
      <main className="container my-4">
        <CategoryBar
          aktywna={wybranaKategoria}
          onWybierz={setWybranaKategoria}
        />
        <p className="text-muted fw-bold mb-3">
          Wyświetlono {przefiltrowaneZdjecia.length} z {listaZdjec.length} zdjęć
        </p>
        {przefiltrowaneZdjecia.length === 0 && (
          <div className="alert alert-warning my-3">
            Brak zdjęć w wybranej kategorii.
          </div>
        )}
        <Gallery zdjecia={przefiltrowaneZdjecia} onUsun={obslugaUsun} onPrzelaczUlubione={obslugaUlubione}/>
      </main>
      <AddPhotoModal onDodaj={obslugaDodaj} />
      <FiltersOffcanvas
        aktywna={wybranaKategoria}
        onWybierz={setWybranaKategoria}
      />
      <Footer />
    </>
  )
}

export default App