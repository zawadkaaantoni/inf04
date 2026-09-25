function FiltersOffcanvas() {
  const filterCategories = [
    { id: 'filtrGory', label: 'Góry' },
    { id: 'filtrMorze', label: 'Morze' },
    { id: 'filtrMiasto', label: 'Miasto' },
  ]

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
        <p className="text-body-secondary">Zaznacz kategorie, które chcesz zobaczyć:</p>
        {filterCategories.map(item => (
          <div key={item.id} className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id={item.id}
              defaultChecked
            />
            <label className="form-check-label" htmlFor={item.id}>
              {item.label}
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