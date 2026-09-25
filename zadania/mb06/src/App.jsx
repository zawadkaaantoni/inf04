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
        <Gallery zdjecia={przefiltrowaneZdjecia} />
      </main>
      <AddPhotoModal />
      <FiltersOffcanvas />
      <Footer />
    </>
  )
}

export default App