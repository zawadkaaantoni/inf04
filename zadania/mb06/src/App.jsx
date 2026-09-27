import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import CategoryBar from './components/CategoryBar.jsx'
import Gallery from './components/Gallery.jsx'
import AddPhotoModal from './components/AddPhotoModal.jsx'
import FiltersOffcanvas from './components/FiltersOffcanvas.jsx'
import Footer from './components/Footer.jsx'
import photoData from './data/photos.json'
import './App.css'

function App() {
  const [listaZdjec, setListaZdjec] = useState(photoData)
  const [wybranaKategoria, setWybranaKategoria] = useState('wszystkie')

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

  return (
    <>
      <Navbar />
      <main className="container my-4">
        <CategoryBar
          aktywna={wybranaKategoria}
          onWybierz={setWybranaKategoria}
        />
        {przefiltrowaneZdjecia.length === 0 && (
          <div className="alert alert-warning my-3" role="alert">
            Brak zdjęć w wybranej kategorii.
          </div>
        )}
        <Gallery zdjecia={przefiltrowaneZdjecia} onUsun={obslugaUsun} />
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