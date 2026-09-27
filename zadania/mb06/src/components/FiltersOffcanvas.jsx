const KATEGORIE_LISTA = [
  { value: 'gory', label: 'Góry' },
  { value: 'morze', label: 'Morze' },
  { value: 'miasto', label: 'Miasto' },
]

function FiltersOffcanvas({ aktywna, onWybierz }) {
  const PrzelaczKategorie = kategoria => {
    onWybierz(aktywna === kategoria ? 'wszystkie' : kategoria)
  }

  return (
    <div
      className="offcanvas offcanvas-start"
      tabIndex="-1"
      id="panelFiltrow"
      aria-labelledby="panelFiltrowLabel"
    >
      <div className="offcanvas-header">
        <h2 className="offcanvas-title h5" id="panelFiltrowLabel">
          Filtry
        </h2>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Zamknij"
        ></button>
      </div>
      <div className="offcanvas-body">
        <p className="text-body-secondary">Wybierz kategorię do wyświetlenia:</p>
        {KATEGORIE_LISTA.map(kat => (
          <div className="form-check" key={kat.value}>
            <input
              className="form-check-input"
              type="checkbox"
              id={`filtr-${kat.value}`}
              checked={aktywna === kat.value}
              onChange={() => PrzelaczKategorie(kat.value)}
            />
            <label className="form-check-label" htmlFor={`filtr-${kat.value}`}>
              {kat.label}
            </label>
          </div>
        ))}
        <button
          type="button"
          className="btn btn-primary w-100 mt-4"
          data-bs-dismiss="offcanvas"
        >
          Zamknij
        </button>
      </div>
    </div>
  )
}

export default FiltersOffcanvas