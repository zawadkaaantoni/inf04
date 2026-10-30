import { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import CategoryBar from './components/CategoryBar.jsx'
import Gallery from './components/Gallery.jsx'
import AddPhotoModal from './components/AddPhotoModal.jsx'
import FiltersOffcanvas from './components/FiltersOffcanvas.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  const [listaZdjec, setZdjecia] = useState([])
  const [wybranaKategoria, setWybranaKategoria] = useState('wszystkie')
  const [ladowanie, setLadowanie] = useState(true)
  const [bladDanych, setBladDanych] = useState(null)

  useEffect(() => {
  const wczytajGalerie = async () => {
    try {
      const res = await fetch('/photos.json')

      if (!res.ok) {
        throw new Error(`Błąd pobierania: ${res.status}`)
      }

      const lista = await res.json()
      setZdjecia(lista)
      setBladDanych(null)
    } catch (blad) {
      setBladDanych(blad.message)
    } finally {
      setLadowanie(false)
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

  if (ladowanie) {
  return (
    <div className="text-center py-5">
      <div className="spinner-border text-primary" role="status"></div>
      <p className="mt-3">Ładowanie galerii...</p>
    </div>
  )
}

if (bladDanych) {
  return (
    <div className="alert alert-danger m-4">
      Nie udało się pobrać zdjęć: {bladDanych}
    </div>
  )
}

if (listaZdjec.length === 0) {
  return (
    <div className="alert alert-secondary m-4">
      Katalog jest na razie pusty.
    </div>
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