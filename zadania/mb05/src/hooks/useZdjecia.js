import { useEffect, useState } from 'react'
import { zaladujZdjecia } from '../services/zdjecia.js'

export function useZdjecia() {
  const [lista, setLista] = useState([])
  const [ladowanie, setLadowanie] = useState(true)
  const [blad, setBlad] = useState(null)

  useEffect(() => {
    let aktywny = true

    zaladujZdjecia()
      .then((dane) => {
        if (aktywny) {
          setLista(dane)
          setBlad(null)
        }
      })
      .catch((err) => {
        if (aktywny) {
          setBlad(err.message)
        }
      })
      .finally(() => {
        if (aktywny) {
          setLadowanie(false)
        }
      })

    return () => {
      aktywny = false
    }
  }, [])

  return {
    lista,
    setLista,
    ladowanie,
    blad
  }
}