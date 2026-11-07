let bazaZdjec = null
let trwajacePobieranie = null

export async function zaladujZdjecia() {
  if (bazaZdjec !== null) {
    return bazaZdjec
  }

  if (trwajacePobieranie) {
    return trwajacePobieranie
  }

  trwajacePobieranie = fetch('/photos.json')
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Nie udało się pobrać danych: ${res.status}`)
      }

      return res.json()
    })
    .then((lista) => {
      bazaZdjec = lista
      return bazaZdjec
    })
    .finally(() => {
      trwajacePobieranie = null
    })

  return trwajacePobieranie
}

export async function znajdzZdjecie(id) {
  const lista = await zaladujZdjecia()
  return lista.find((element) => element.id === Number(id)) || null
}

export function usunZGalerii(id) {
  bazaZdjec = bazaZdjec.filter((element) => element.id !== Number(id))
  return bazaZdjec
}

export function zmienUlubione(id) {
  bazaZdjec = bazaZdjec.map((element) => {
    if (element.id === Number(id)) {
      return {
        ...element,
        favorite: !element.favorite
      }
    }

    return element
  })

  return bazaZdjec
}

export function zapiszZdjecie(dane) {
  const najwyzszeId = Math.max(0, ...bazaZdjec.map((element) => element.id))

  const noweZdjecie = {
    ...dane,
    id: najwyzszeId + 1,
    favorite: false
  }

  bazaZdjec = [...bazaZdjec, noweZdjecie]
  return bazaZdjec
}