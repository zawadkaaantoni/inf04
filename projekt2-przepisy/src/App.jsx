
import { useState } from 'react'
import './App.css'
import { przepisyStartowe } from './przepisy'
import PrzepisCard from './components/PrzepisCard'

function App() {
  const [przepisy, setPrzepisy] = useState(przepisyStartowe)
  const [sortRosnaca, setSortRosnaca] = useState(false)

  const [nazwa, setNazwa] = useState('')
  const [czas, setCzas] = useState('')
  const [invalid, setInvalid] = useState(false)

  const przepisyPosortowane = [...przepisy].sort((a, b) => sortRosnaca ? a.czas - b.czas : b.czas - a.czas)

  function dodajPrzepis(event){
    event.preventDefault()
    const czasWLiczbie = Number(czas)
    if(!isFinite(czasWLiczbie) || czasWLiczbie <= 0){
      setCzas(-5)
      setInvalid(true)
      return
    }

    const noweId = Math.max(...przepisy.map(p => p.id)) + 1
    setPrzepisy ([...przepisy, {id: noweId, nazwa:nazwa, kategoria:'inne', czas:czasWLiczbie }])
    console.log(nazwa, czas)

    setCzas('')
    setInvalid(false)
    setNazwa('')
    console.log(przepisy)
  }

  return (
    <div className="container">
      <button className="btn btn-primary m-2"
        onClick={() => setSortRosnaca(!sortRosnaca)}  >sortuj
      </button>
      <div className="row g-3 mb-4">
        {przepisyPosortowane.map(p => (
          <PrzepisCard key={p.id} przepis={p}/>
        ))}
      </div>

      <div className="mb-3">
        <form action="" onSubmit={dodajPrzepis} noValidate method="post" >
          <label htmlFor="nazwa" className="form-label">nazwa dania</label>
          <input type="text" id='nazwa' className="form-control" value={nazwa} onChange={(event) => setNazwa(event.target.value)}/>

          <label htmlFor="czas" className="form-label">czas przygotowania(min)</label>
          <input type="number" className={`form-control ${invalid ? "is-invalid": ""}`} id='czas' 
          onChange={(event) => setCzas(event.target.value)} value={czas}/>
          
          {invalid && (
            <div className='d-block invalid-feedback'>czas musi byc liczba dodatnia</div>
          )}

          <button type="submit" className="btn btn-primary">Dodaj przepis</button>
        </form>
      </div>
    </div>
  )
}

export default App
