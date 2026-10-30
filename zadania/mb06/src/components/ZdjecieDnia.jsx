import { useState, useEffect } from 'react'

function generujId() {
  return Math.floor(Math.random() * 300)
}

function ZdjecieDnia() {
  const [numer, setNumer] = useState(generujId)
  const [daneZdjecia, setDaneZdjecia] = useState(null)
  const [czyLaduje, setCzyLaduje] = useState(true)
  const [blad, setBlad] = useState(null)

  useEffect(() => {
  const pobierzDane = async () => {
    setCzyLaduje(true)

    try {
      const res = await fetch(`https://picsum.photos/id/${numer}/info`)

      if (!res.ok) {
        throw new Error(`Błąd serwera: ${res.status}`)
      }

      const dane = await res.json()

      setDaneZdjecia(dane)
      setBlad(null)
    } catch (err) {
      setBlad(err.message)
      setDaneZdjecia(null)
    } finally {
      setCzyLaduje(false)
    }
  }

  pobierzDane()
}, [numer])

    const losujNowe = () => {
    let noweId = generujId()

    while (noweId === numer) {
        noweId = generujId()
    }

    setNumer(noweId)
    }

  return (
  <section className="container my-5">
    <h2 className="mb-3">Zdjęcie dnia</h2>

    {blad && (
        <div className="alert alert-danger">
            Błąd: {blad}
        </div>
    )}

    {daneZdjecia && (
      <div>
        <img
          src={`https://picsum.photos/id/${numer}/400/250`}
          className="img-fluid rounded"
          alt={daneZdjecia.author}
        />

        <p className="text-muted mt-2">
          Autor: {daneZdjecia.author}
        </p>
      </div>
    )}

    <button
      type="button"
      className="btn btn-outline-primary"
      disabled={czyLaduje}
      onClick={losujNowe}
    >
      {czyLaduje ? 'Losuję...' : 'Losuj nowe zdjęcie'}
    </button>
  </section>
)
}

export default ZdjecieDnia