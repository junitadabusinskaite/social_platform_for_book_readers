import { useEffect } from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <nav className="navbar navbar-expand-md navbar-dark">
      <div className="container">
        <NavLink to="/logout" className="navbar-brand h1">For Book Lovers</NavLink>

        {/* Collapsible menu for small screens */}
        <button className="navbar-toggler order-md-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse justify-content-end order-md-1" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/login" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                Log In
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/signup" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                Sign Up
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar