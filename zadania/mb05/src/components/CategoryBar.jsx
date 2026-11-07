const opcje = [
  { id: 'wszystkie', tekst: 'Wszystkie zdjęcia' },
  { id: 'gory', tekst: 'Góry' },
  { id: 'morze', tekst: 'Morze' },
  { id: 'miasto', tekst: 'Miasto' }
]

function CategoryBar({ aktywna, onWybierz }) {
  return (
    <div id="kategorie" className="d-flex flex-wrap gap-3 mb-4">
      {opcje.map((opcja) => (
        <button
          key={opcja.id}
          type="button"
          className={`btn rounded-pill ${
            aktywna === opcja.id ? 'btn-primary' : 'btn-outline-secondary'
          }`}
          onClick={() => onWybierz(opcja.id)}
          aria-pressed={aktywna === opcja.id}
        >
          {opcja.tekst}
        </button>
      ))}
    </div>
  )
}

export default CategoryBar