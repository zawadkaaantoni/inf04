import { Link, NavLink, Outlet } from 'react-router-dom'
import Footer from './Footer.jsx'

function Layout() {
  return (
    <>
      <nav className="navbar navbar-expand bg-dark navbar-dark shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            Galeria Podróży
          </Link>

          <div className="navbar-nav ms-auto gap-2">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active fw-semibold' : ''}`
              }
            >
              Galeria
            </NavLink>

            <NavLink
              to="/dodaj"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active fw-semibold' : ''}`
              }
            >
              Dodaj zdjęcie
            </NavLink>
          </div>
        </div>
      </nav>

      <Outlet />

      <Footer />
    </>
  )
}

export default Layout