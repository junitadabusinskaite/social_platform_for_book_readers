import Navbar from "./Navbar"
import { Link } from "react-router-dom"
import { useState } from "react"
import { Modal, Button, Form } from "react-bootstrap"
import { BsPencil } from "react-icons/bs"

const MainProfile = () => {
  const user = {
    socialMedia: [
      "Goodreads: hello123",
      "Storygraph: hello123",
      "Instagram: hello123"
    ]
  }
  const [showProfilePhotoModal, setShowProfilePhotoModal] = useState(false)
  const handleProfilePhotoClose = () => setShowProfilePhotoModal(false)
  const handleProfilePhotoShow = () => setShowProfilePhotoModal(true)

  const [showQuoteModal, setShowQuoteModal] = useState(false)
  const handleQuoteClose = () => setShowQuoteModal(false)
  const handleQuoteShow = () => setShowQuoteModal(true)

  const [showAuthorModal, setShowAuthorModal] = useState(false)
  const handleAuthorClose = () => setShowAuthorModal(false)
  const handleAuthorShow = () => setShowAuthorModal(true)

  const [showBookModal, setShowBookModal] = useState(false)
  const handleBookClose = () => setShowBookModal(false)
  const handleBookShow = () => setShowBookModal(true)

  const [showFavoriteModal, setShowFavoriteModal] = useState(false)
  const handleFavoriteClose = () => setShowFavoriteModal(false)
  const handleFavoriteShow = () => setShowFavoriteModal(true)

  const [showGenreModal, setShowGenreModal] = useState(false)
  const handleGenreClose = () => setShowGenreModal(false)
  const handleGenreShow = () => setShowGenreModal(true)

  const [showSocialModal, setShowSocialModal] = useState(false)
  const handleSocialClose = () => setShowSocialModal(false)
  const handleSocialShow = () => setShowSocialModal(true)

  return (
    <><Navbar /><div>
      <div className="profile-wrapper d-flex justify-content-center align-items-center">
        <div className="profile-container d-flex align-items-center p-3">
          <div className="d-flex align-items-end position-relative">
            <img src="./profile.jpg" alt="Profile" className="profile-photo rounded-circle" />
            <Button onClick={handleProfilePhotoShow} className="pen-btn position-absolute" style={{ bottom: "0", left: "90px" }}>
              <BsPencil color="black" size={17} />
            </Button>
          </div>
          <div className="profile-info flex-grow-1">
            <h5 className="mb-lg-3 mb-sm-0">@hello123</h5>
            <div className="d-flex align-items-center">
              <span className="follower-info">1 follower</span>
              <span className="mx-3">|</span>
              <span className="follower-info">1 following</span>
            </div>
          </div>

          <div className="social-media">
            <div className="d-flex justify-content-between align-items-center">
              <h6 className="mb-1">Social Media</h6>
              <Button onClick={handleSocialShow} className="pen-btn ms-3">
                <BsPencil color="black" size={17} />
              </Button>
            </div>
            {user.socialMedia.map((item, index) => (
              <p key={index} className="mb-0">{item}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="box">
          <div className="sticky-note">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Favorite Quote</h5>
              <Button onClick={handleQuoteShow} className="pen-btn ms-3">
                <BsPencil color="black" size={17} />
              </Button>
            </div>
            <p>“Fear is the mind killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me”</p>
          </div>
        </div>
        <div className="box">
          <div className="sticky-note">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Favorite Books</h5>
              <Button onClick={handleBookShow} className="pen-btn ms-3">
                <BsPencil color="black" size={17} />
              </Button>
            </div>
            <ul>
              <li>Fourth Wing</li>
              <li>Six of Crows</li>
              <li>Boys of Tommen</li>
            </ul>
          </div>
        </div>
        <div className="box">
          <div className="sticky-note d-flex justify-content-between align-items-center">
            <h5 className="mb-0">
              <Link to="../favorites" className="text-black text-decoration-none">
                Favored →
              </Link>
            </h5>
            <Button onClick={handleFavoriteShow} className="pen-btn ms-3">
              <BsPencil color="black" size={17} />
            </Button>
          </div>
        </div>
        <div className="box">
          <div className="sticky-note">
            <h5 className="mb-0">
              <Link to="../mainuploads" className="text-black text-decoration-none">
                Uploads →
              </Link>
            </h5>
          </div>
        </div>
        <div className="box">
          <div className="sticky-note">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Favorite Genres</h5>
              <Button onClick={handleGenreShow} className="pen-btn ms-3">
                <BsPencil color="black" size={17} />
              </Button>
            </div>
            <ul>
              <li>Fantasy</li>
              <li>Romance</li>
              <li>Dystopian</li>
            </ul>
          </div>
        </div>
        <div className="box">
          <div className="sticky-note">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Favorite Auhtors</h5>
              <Button onClick={handleAuthorShow} className="pen-btn ms-3">
                <BsPencil color="black" size={17} />
              </Button>
            </div>
            <ul>
              <li>Rebecca Yarros</li>
              <li>Leigh Bardugo</li>
              <li>Ruta Sepetys</li>
              <li>H.D. Carlton</li>
              <li>Sarah J. Maas</li>
              <li>Cassandra Clare</li>
              <li>Ana Huang</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

      <Modal show={showProfilePhotoModal} onHide={handleProfilePhotoClose} centered>
        <Modal.Header closeButton className="d-flex justify-content-center">
          <h3 className="w-100 text-center mb-0">Change profile photo</h3>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formFile" className="mt-3">
            <Form.Control type="file" accept="image/*" onChange={e => setImageFile(e.target.files[0])} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button onClick={handleProfilePhotoClose}>Save new profile photo</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showAuthorModal} onHide={handleAuthorClose} centered className="custom-modal">
        <Modal.Header closeButton className="d-flex justify-content-center">
          <h3 className="w-100 text-center mb-0">Favorite authors</h3>
        </Modal.Header>
        <Modal.Body>
          <div className="row align-items-center mb-3">
            <label htmlFor="authors" className="col-sm-3 col-form-label">Authors</label>
            <div className="col-sm-9">
              <textarea className="form-control" id="authors" placeholder="Enter auhtor names"
                value="Rebecca Yarros, Leigh Bardugo, Ruta Sepetys, H.D. Carlton, Sarah J. Maas, Cassandra Clare, Ana Huang"
                style={{ height: "100px" }} required />

              <div className="form-check mt-2 d-flex align-items-center">
                <input className="form-check-input me-2" type="checkbox" id="confirmCheckbox" />
                <label className="form-check-label mt-1" for="confirmCheckbox">
                  Show to other users
                </label>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button variant="primary" onClick={handleAuthorClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showGenreModal} onHide={handleGenreClose} centered className="custom-modal">
        <Modal.Header closeButton className="d-flex justify-content-center">
          <h3 className="w-100 text-center mb-0">Favorite genres</h3>
        </Modal.Header>
        <Modal.Body>
          <div className="row align-items-center mb-3">
            <label htmlFor="genres" className="col-sm-3 col-form-label">Genres</label>
            <div className="col-sm-9">
              <textarea className="form-control" id="genres" placeholder="Enter genres"
                value="Fantasy, romance, dystopian"
                style={{ height: "100px" }} required />

              <div className="form-check mt-2 d-flex align-items-center">
                <input className="form-check-input me-2" type="checkbox" id="confirmCheckbox" />
                <label className="form-check-label mt-1" for="confirmCheckbox">
                  Show to other users
                </label>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button variant="primary" onClick={handleGenreClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showBookModal} onHide={handleBookClose} centered className="custom-modal">
        <Modal.Header closeButton className="d-flex justify-content-center">
          <h3 className="w-100 text-center mb-0">Favorite books</h3>
        </Modal.Header>
        <Modal.Body>
          <div className="row align-items-center mb-3">
            <label htmlFor="books" className="col-sm-3 col-form-label">Books</label>
            <div className="col-sm-9">
              <textarea className="form-control" id="books" placeholder="Enter book titles"
                value="Fourth Wing, Six of Crows, Boys of Tommen"
                style={{ height: "100px" }} required />

              <div className="form-check mt-2 d-flex align-items-center">
                <input className="form-check-input me-2" type="checkbox" id="confirmCheckbox" />
                <label className="form-check-label mt-1" for="confirmCheckbox">
                  Show to other users
                </label>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button variant="primary" onClick={handleBookClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showQuoteModal} onHide={handleQuoteClose} centered className="custom-modal">
        <Modal.Header closeButton className="d-flex justify-content-center">
          <h3 className="w-100 text-center mb-0">Favorite quote</h3>
        </Modal.Header>
        <Modal.Body>
          <div className="row align-items-center mb-3">
            <label htmlFor="quote" className="col-sm-3 col-form-label">Quote</label>
            <div className="col-sm-9">
              <textarea className="form-control" id="quote" placeholder="Enter quote"
                value="“Fear is the mind killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me”"
                style={{ height: "100px" }} required />

              <div className="form-check mt-2 d-flex align-items-center">
                <input className="form-check-input me-2" type="checkbox" id="confirmCheckbox" />
                <label className="form-check-label mt-1" for="confirmCheckbox">
                  Show to other users
                </label>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button variant="primary" onClick={handleQuoteClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showFavoriteModal} onHide={handleFavoriteClose} centered className="custom-modal">
        <Modal.Header closeButton className="d-flex justify-content-center">
          <h3 className="w-100 text-center mb-0">Show your favorites to other users?</h3>
        </Modal.Header>
        <Modal.Body>
          <div className="form-check mt-2 d-flex align-items-center justify-content-center">
            <input className="form-check-input me-2" type="checkbox" id="confirmCheckbox" />
            <label className="form-check-label mt-1" for="confirmCheckbox">
              Show to other users
            </label>
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button variant="primary" onClick={handleFavoriteClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showSocialModal} onHide={handleSocialClose} centered className="custom-modal">
        <Modal.Header closeButton className="d-flex justify-content-center">
          <h3 className="w-100 text-center mb-0">Social Media</h3>
        </Modal.Header>
        <Modal.Body>
          <div className="row align-items-center mb-3">
            <label htmlFor="goodreads" className="col-sm-3 col-form-label">Goodreads</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="goodreads" placeholder="Enter your goodreads nickname"
                value="hello123" />
            </div>
            <label htmlFor="storygraph" className="col-sm-3 col-form-label">Storygraph</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="storygraph" placeholder="Enter your storygraph nickname"
                value="hello123" />
            </div>
            <label htmlFor="instagram" className="col-sm-3 col-form-label">Instagram</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="instagram" placeholder="Enter your instagram nickname"
                value="hello123" />
            </div>
            <div className="col-sm-10">
              <div className="form-check mt-2 d-flex align-items-center justify-content-center">
                <input className="form-check-input me-2" type="checkbox" id="confirmCheckbox" />
                <label className="form-check-label mt-1" for="confirmCheckbox">
                  Show to other users
                </label>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button variant="primary" onClick={handleGenreClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal></>
  )
}

export default MainProfile