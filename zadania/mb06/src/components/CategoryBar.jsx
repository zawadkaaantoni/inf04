const KATEGORIE_LISTA = [
  { value: 'gory', label: 'Góry' },
  { value: 'morze', label: 'Morze' },
  { value: 'miasto', label: 'Miasto' },
]

function CategoryBar({ aktywna, onWybierz }) {
  return (
    <div id="kategorie" className="d-flex flex-wrap gap-2 mb-4">
      <button
        type="button"
        className={`btn btn-outline-primary ${aktywna === 'wszystkie' ? 'active' : ''}`}
        aria-pressed={aktywna === 'wszystkie'}
        onClick={() => onWybierz('wszystkie')}
      >
        Wszystkie
      </button>
      {KATEGORIE_LISTA.map(kat => (
        <button
          key={kat.value}
          type="button"
          className={`btn btn-outline-primary ${aktywna === kat.value ? 'active' : ''}`}
          aria-pressed={aktywna === kat.value}
          onClick={() => onWybierz(kat.value)}
        >
          {kat.label}
        </button>
      ))}
    </div>
  )
}

export default CategoryBar