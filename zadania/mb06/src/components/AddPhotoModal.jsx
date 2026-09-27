import { useState } from 'react'
import { Modal } from 'bootstrap'

const INITIAL_FORM_STATE = {
  title: '',
  category: '',
  image: '',
  alt: '',
  description: '',
}

function AddPhotoModal({ onDodaj }) {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE)

  const handleInputChange = field => event => {
    setFormData(prev => ({ ...prev, [field]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    onDodaj({
      title: formData.title,
      category: formData.category,
      image: formData.image,
      imageLarge: formData.image,
      alt: formData.alt,
      description: formData.description,
    })
    setFormData(INITIAL_FORM_STATE)

    const modalElem = document.getElementById('dodajZdjecie')
    Modal.getInstance(modalElem)?.hide()
  }

  return (
    <div
      className="modal fade"
      id="dodajZdjecie"
      tabIndex="-1"
      aria-labelledby="dodajZdjecieLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title h5" id="dodajZdjecieLabel">
              Dodaj zdjęcie
            </h2>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Zamknij"
            ></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="tytul" className="form-label">
                    Tytuł
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="tytul"
                    value={formData.title}
                    onChange={handleInputChange('title')}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="kategoria" className="form-label">
                    Kategoria
                  </label>
                  <select
                    className="form-select"
                    id="kategoria"
                    value={formData.category}
                    onChange={handleInputChange('category')}
                  >
                    <option value="" disabled>
                      Wybierz kategorię...
                    </option>
                    <option value="gory">Góry</option>
                    <option value="morze">Morze</option>
                    <option value="miasto">Miasto</option>
                  </select>
                </div>
                <div className="col-12">
                  <label htmlFor="obrazek" className="form-label">
                    Adres URL zdjęcia
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="obrazek"
                    placeholder="https://..."
                    value={formData.image}
                    onChange={handleInputChange('image')}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="alt" className="form-label">
                    Tekst alternatywny
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="alt"
                    value={formData.alt}
                    onChange={handleInputChange('alt')}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="opis" className="form-label">
                    Opis
                  </label>
                  <textarea
                    className="form-control"
                    id="opis"
                    rows="3"
                    value={formData.description}
                    onChange={handleInputChange('description')}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Anuluj
              </button>
              <button type="submit" className="btn btn-primary">
                Zapisz
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddPhotoModal