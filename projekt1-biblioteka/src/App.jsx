import { useState } from 'react'
import './App.css'
import { ksiazkiStartowe } from './ksiazki'
import KsiazkaCard from './components/KsiazkaCard'

const GATUNKI = [...new Set(ksiazkiStartowe.map(k => k.gatunek))]

function App() {
  const [ksiazki, setKsiazki] = useState(ksiazkiStartowe)
  const [aktywnyGatunek, setAktywnyGatunek] = useState('wszystkie')

  function przelaczUlubiona(id){
    setKsiazki(poprzednieKsiazki => 
      poprzednieKsiazki.map(k => (
        k.id === id ? {...k, ulubiona : !k.ulubiona} : k
      ))
    )
  }

  const widoczne = aktywnyGatunek === 'wszystkie' ? ksiazki : ksiazki.filter(k => k.gatunek === aktywnyGatunek)  

  return (
    <div className="container">
      <div>wyswietlono {widoczne.length} z {ksiazki.length} ksiazek</div>
      <div className="d-flex flex-row">
        <button type='button' 
          className={`btn m-2 btn-outline-primary${aktywnyGatunek == 'wszystkie' ? ' active' : ''}`} 
          onClick={() => setAktywnyGatunek('wszystkie')}>wszystkie</button>
        {GATUNKI.map(g => (
          <button type='button' 
            className={`btn m-2 btn-outline-primary${aktywnyGatunek == g ? ' active' : ''}`} 
            key={g} onClick={() => setAktywnyGatunek(g)}>{g}</button>
        ))}
      </div>
      <div className="row g-3">
        {widoczne.map(ksiazka => (
          <KsiazkaCard key={ksiazka.id} ksiazka={ksiazka} onPrzelaczUlubiona={przelaczUlubiona}/>),
          console.log(widoczne)
        )}
      </div>
    </div>
  )
}

export default App
