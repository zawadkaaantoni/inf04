import { useState } from 'react'
import {BrowserRouter, Routes, Route, useParams, Link, useNavigate} from 'react-router-dom'
import './App.css'
import { Button } from 'bootstrap'
import { wydarzenia } from './wydarzenia'


const miasta = [...new Set(wydarzenia.map(w => w.miasto))]



function SzczegolyWydarzenia(){
  const {id} = useParams()
  const navigate = useNavigate()
  const numerId = Number(id)
  const wydarzenie = wydarzenia.find(w => w.id === numerId)

  if(!wydarzenie){
    return(
      <div>
        <div className='d-flex flex-wrap'>
          <button className="btn-primary" onClick={() => navigate(-1)} >wstecz</button>
        </div>
        <p className='h3 mt-5'>nie znaleziono wydarzenia o numerze {numerId}</p>
      </div>
    )
  }

  return(
    <div className='card'>
      <div className='d-flex flex-wrap'>
        <button className="btn-primary" onClick={() => navigate(-1)} >wstecz</button>
      </div>
      <div className="card-body">
        <div className="card-title h4">{wydarzenie.nazwa}</div>
        <div className="card-text">
          <p>{wydarzenie.miasto} - {wydarzenie.data}</p>
          {wydarzenie.cena === 0 ? 
            <span className='badge text-bg-success'>wstep wolny</span> : 
            <span className='badge text-bg-secondary'>{wydarzenie.cena} zl</span>
          }
        </div>
      </div>
    </div>
  )
}

function ListaWydarzen(){
  const [aktywneMiasta, setAktywneMiasta] = useState(miasta)

  function przelaczMiasto(miasto) {
    setAktywneMiasta(poprzednieMiasta => {
      if (poprzednieMiasta.includes(miasto)) {
        return poprzednieMiasta.filter(nazwa => nazwa !== miasto)
      }

      return [...poprzednieMiasta, miasto]
    })
  }

  const widoczneWydarzenia = wydarzenia.filter(wydarzenie =>
   (aktywneMiasta.includes(wydarzenie.miasto))
  )


  return(
    <div className="container">
      <h1 className='h2'>Lista wydarzen</h1>
      <div className="d-flex flex-row">
        <input className="form-check-input" type="checkbox" role="switch" id="miasto-Kraków" 
          checked={aktywneMiasta.includes('Kraków')} onChange={() => przelaczMiasto('Kraków')}/>
        <label className='form-label' htmlFor="miasto-Kraków">krakow</label>

        <input className="form-check-input" type="checkbox" role="switch" id="miasto-Poznań" 
          checked={aktywneMiasta.includes('Poznań')} onChange={() => przelaczMiasto('Poznań')}/>
        <label htmlFor="miasto-Poznań" className='form-label'>poznan</label>

        <input className="form-check-input" type="checkbox" role="switch" id="miasto-Wrocław" 
          checked={aktywneMiasta.includes('Wrocław')} onChange={() => przelaczMiasto('Wrocław')}/>
        <label htmlFor="miasto-Wrocław" className='form-label'>wroclaw</label>

        <input className="form-check-input" type="checkbox" role="switch" id="miasto-Gdańsk" 
          checked={aktywneMiasta.includes('Gdańsk')} onChange={() => przelaczMiasto('Gdańsk')}/>
        <label htmlFor="miasto-Gdańsk" className='form-label'>gdansk</label>

      </div>

      {widoczneWydarzenia.map(w => (
        <div key={w.id}>
          <p>{w.nazwa}</p>
          <p>{w.miasto} – {w.data}</p>
          <Link className="btn btn-secondary mb-3" to={`/wydarzenie/${w.id}`}>
            Szczegóły
          </Link>
        </div>
))}
    </div>
  )
}

function NieMaTakiejStrony(){
  return(
    <div>
      <h1 className='h1' >nie ma takiej strony</h1>
      <Link to={'/'} >wroc do listy</Link>
    </div>
  )
}



function App() {


  return (
      <Routes>
        <Route path='/' element={ <ListaWydarzen/> }></Route>
        <Route path='/wydarzenie/:id' element={<SzczegolyWydarzenia/>}></Route>
        <Route path='*' element={<NieMaTakiejStrony/>} ></Route>
      </Routes>
  )
}

export default App
