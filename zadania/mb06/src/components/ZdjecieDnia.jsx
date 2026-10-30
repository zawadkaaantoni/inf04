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
      } catch (err) {
        setBlad(err.message)
      } finally {
        setCzyLaduje(false)
      }
    }

    pobierzDane()
  }, [numer])

  return <p>Zdjęcie dnia - tutaj pojawi się zdjęcie</p>
}

export default ZdjecieDnia