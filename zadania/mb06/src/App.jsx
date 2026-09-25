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

  return (
    <>
      <Navbar />
      <main className="container my-4">
        <CategoryBar />
        <Gallery zdjecia={listaZdjec} />
      </main>
      <AddPhotoModal />
      <FiltersOffcanvas />
      <Footer />
    </>
  )
}

export default App