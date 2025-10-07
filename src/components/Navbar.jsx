import { useState, useEffect } from "react"
import { NavLink, Link } from "react-router-dom"
import { OverlayTrigger, Popover } from "react-bootstrap"
import { BsBell, BsEnvelope} from "react-icons/bs"

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <nav className="navbar navbar-expand-md navbar-dark">
      <div className="container">
        <NavLink to="/" className="navbar-brand h1">For Book Lovers</NavLink>

        <div className="d-flex justify-content-end order-md-2 ms-auto">
          <OverlayTrigger trigger="click" placement="bottom" overlay={
            <Popover id="popover-basic" className="message-popover">
              <Popover.Body>
                <div className="popover-content">
                  <Link to="../useruploads" className="message-button">
                    <div className="pop-wrapper">
                      <img src="user123.jpg" alt="Profile" className="profile-pic" />
                        <div className="message-info">@user1 uploaded a new photo</div>
                    </div>
                  </Link>
                </div>
              </Popover.Body>
            </Popover>
          }>
            <button className="btn btn-link p-0 me-3" aria-label="Notifications" style={{background: "none", border: "none" }}>
              <BsBell color="white" size={20}/>
            </button>
          </OverlayTrigger>
          <OverlayTrigger trigger="click" placement="bottom" overlay={
            <Popover id="popover-basic" className="message-popover">
              <Popover.Body>
                <div className="popover-content">
                  <Link to="../privatechat" className="message-button">
                    <div className="pop-wrapper">
                      <img src="user123.jpg" alt="Profile" className="profile-pic" />
                      <div className="message-info">
                        <div className="user-name">user123</div>
                        <div className="pop-text">"i'm great. What about u?"</div>
                      </div>
                    </div>
                  </Link>
                  <Link to="../privatechat" className="message-button">
                    <div className="pop-wrapper">
                      <img src="reader456.jpg" alt="Profile" className="profile-pic" />
                      <div className="message-info">
                        <div className="user-name">reader456</div>
                        <div className="pop-text">"Hello!"</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </Popover.Body>
            </Popover>
          }>
            <button className="btn btn-link p-0 me-2" aria-label="Messages" style={{ background: "none", border: "none" }}>
              <BsEnvelope color="white" size={20}/>
            </button>
          </OverlayTrigger>
        </div>

        {/* Collapsible menu for small screens */}
        <button className="navbar-toggler order-md-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse justify-content-end order-md-1" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/forum" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                Forum
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/favorites" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                Favorites
              </NavLink>
            </li>
            {/* Menu options for small screens */}
            {isMobile && (
              <>
                <li className="nav-item">
                  <NavLink to="/profile" className="nav-link">Profile</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/manage-account" className="nav-link">Manage Account</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/support" className="nav-link">Support</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/logout" className="nav-link">Log Out</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Profile picture menu for large screens */}
        {!isMobile && (
          <div className="ms-3 justify-content-end order-md-5 dropdown">
            <a href="#" className="d-flex align-items-center text-dark text-decoration-none" id="profileDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="./profile.jpg" alt="Profile" className="rounded-circle" width="40" height="40" />
            </a>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
              <li><NavLink className="dropdown-item" to="/profile">Profile</NavLink></li>
              <li><NavLink className="dropdown-item" to="/manage-account">Manage Account</NavLink></li>
              <li><NavLink className="dropdown-item" to="/support">Support</NavLink></li>
              <li><hr className="dropdown-divider" /></li>
              <li><NavLink className="dropdown-item" to="/logout">Log Out</NavLink></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

