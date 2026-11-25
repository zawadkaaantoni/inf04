import { useState, useEffect } from 'react'
import './App.css'
import RowerCard from './Components/RowerCard'

function App() {
  const [rowery, setRowery] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [szukaj, setSzukaj] = useState('')


  useEffect(() => {
    async function pobierzRowery() {
      try{
        const odpowiedz = await fetch('../public/rowery.json')

        if(!odpowiedz.ok){
          throw new Error(`blad serwera ${odpowiedz.status}`)
        }

        const dane = await odpowiedz.json()
        setRowery(dane)
      }catch(blad){
        setError(blad.message)
      }finally{
        setIsLoading(false)
      }
    }
    pobierzRowery()
  }, [])

  if(isLoading){
    return(
    <div className="container mt-4">
      <div className="spinner-border " role='status'></div>
      <span className='ms-2'>ladowanie...</span>
    </div>
    )
  }

  if(error){
    return(
      <div className="alert alert-danger">
        blad serwera 404
      </div>
    )
  }

  if(rowery.length === 0){
    return(
      <div className="alert alert-secondary">
        brak danych
      </div>
    )
  }

  const fraza = szukaj.toLowerCase()
  const widoczne = [...rowery.filter((r) => r.model.toLowerCase().includes(fraza))] //do sprawdzenia

  function usunRower(id){
    setRowery([...rowery.filter(r => r.id !== id)])
  }

  return (
    <div className="container">
      <h1 className="h3 m-3">wypozyczalnia rowerow</h1>

      <div className="mb-2">
        <label htmlFor="szukaj" className="form-label">szukaj modelu</label>
        <input type="text" name="" id="szukaj" className='form-control' value={szukaj} onChange={(event) => setSzukaj(event.target.value)} />
      </div>

      <div className="row g-3">
        {widoczne.map(r => (
          <RowerCard key={r.id} rower={r} usunRower={usunRower}/>
        ))}
      </div>
    </div>
  )
}

export default App
