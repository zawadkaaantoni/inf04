function CategoryBar() {
  const categoriesList = [
    { label: 'Wszystkie', active: true },
    { label: 'Góry', active: false },
    { label: 'Morze', active: false },
    { label: 'Miasto', active: false },
  ]

  return (
    <div id="kategorie" className="d-flex flex-wrap gap-2 mb-4">
      {categoriesList.map((item, index) => (
        <button
          key={index}
          type="button"
          className={`btn ${item.active ? 'btn-primary' : 'btn-outline-primary'}`}
          aria-pressed={item.active}
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}

export default CategoryBar