import Navbar from "./Navbar"
import UploadsBookBox from "./UploadsBookBox"
import { useState } from "react"
import { Modal, Button, Form } from "react-bootstrap"
import { Link } from "react-router-dom"

const MainUploads = () => {
  const [uploads, setUploads] = useState([
    { id: 1, image: "book2.jpg", bookName: "T.J. Clune - The House in the Cerulean Sea", text: "" },
    { id: 2, image: "", bookName: "Leigh Bardugo - Six of Crows", text: "No mourners, no funerals" },
    { id: 3, image: "book4.jpg", bookName: "J.K. Rowling - Harry Potter", text: "" }
  ])

  const [showModal, setShowModal] = useState(false)
  const [showPhotoUploadModal, setShowPhotoUploadModal] = useState(false)
  const [showNoteUploadModal, setShowNoteUploadModal] = useState(false)
  const [authorName, setAuthorName] = useState("")
  const [bookTitle, setBookTitle] = useState("")
  const [bookQuote, setBookQuote] = useState("")
  const [imageFile, setImageFile] = useState(null)

  const handleEdit = (id, newBookName, newText) => {
    setUploads(prev =>
      prev.map(upload =>
        upload.id === id ? { ...upload, bookName: newBookName, text: newText } : upload
      )
    )
  }

  const handleDelete = (id) => {
    setUploads(prev => prev.filter(upload => upload.id !== id))
  }

  const handleClose = () => {
    setShowModal(false)
    setShowPhotoUploadModal(false)
    setShowNoteUploadModal(false)
    setAuthorName("")
    setBookTitle("")
    setBookQuote("")
    setImageFile(null)
  }
  const handleShow = () => setShowModal(true)

  const handleUploadPhotoClick = () => {
    setShowModal(false)
    setShowNoteUploadModal(false)
    setShowPhotoUploadModal(true)
  }

  const handleUploadNoteClick = () => {
    setShowModal(false)
    setShowPhotoUploadModal(false)
    setShowNoteUploadModal(true)
  }

  const handleUploadPhoto = () => {
    const newUpload = {
      id: Date.now(),
      image: URL.createObjectURL(imageFile),
      bookName: `${authorName} - ${bookTitle}`,
      text: ""
    }
    setUploads([...uploads, newUpload])
    handleClose()
  }

  const handleUploadNote = () => {
    const newUpload = {
      id: Date.now(),
      image: "",
      bookName: `${authorName} - ${bookTitle}`,
      text: bookQuote
    }
    setUploads([...uploads, newUpload])
    handleClose()
  }

  return (
    <><Navbar />
      <Link to="../profile" className="text-black p-4">← go back to profile</Link>
      <div className="container">
        {uploads.map(upload => (
          <UploadsBookBox
            key={upload.id}
            image={upload.image}
            bookName={upload.bookName}
            text={upload.text}
            onEdit={(newData) => handleEdit(upload.id, newData.bookName, newData.text)}
            onDelete={() => handleDelete(upload.id)}
          />
        ))}
      </div>

      <button onClick={handleShow} className="floating-btn">+</button>

      <Modal show={showModal} onHide={handleClose} centered className="custom-modal modal-sm">
        <Modal.Header closeButton />
        <Modal.Body className="d-flex flex-column align-items-center">
          <Button onClick={handleUploadPhotoClick} className='mb-3 w-75'>Upload Photo</Button>
          <Button onClick={handleUploadNoteClick} className='mb-3 w-75'>Upload Note</Button>
        </Modal.Body>
      </Modal>

      <Modal show={showPhotoUploadModal} onHide={handleClose} centered className="custom-modal">
        <Modal.Header closeButton />
        <Modal.Body>
          <Form.Group className="row align-items-center mb-2">
            <Form.Label className="col-sm-3" htmlFor="author">Author</Form.Label>
            <div className="col-sm-9">
              <Form.Control id="author" value={authorName} onChange={e => setAuthorName(e.target.value)} required />
            </div>
          </Form.Group>
          <Form.Group className="row align-items-center mb-2">
            <Form.Label className="col-sm-3" htmlFor="book">Book</Form.Label>
            <div className="col-sm-9">
              <Form.Control id="book" value={bookTitle} onChange={e => setBookTitle(e.target.value)} required />
            </div>
          </Form.Group>
          <Form.Group controlId="formFile">
            <Form.Control type="file" accept="image/*" onChange={e => setImageFile(e.target.files[0])} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button variant="primary" onClick={handleUploadPhoto}>Upload Photo</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showNoteUploadModal} onHide={handleClose} centered className="custom-modal">
        <Modal.Header closeButton />
        <Modal.Body>
          <Form.Group className="row align-items-center mb-2">
            <Form.Label className="col-sm-3" htmlFor="author">Author</Form.Label>
            <div className="col-sm-9">
              <Form.Control id="author" value={authorName} onChange={e => setAuthorName(e.target.value)} required />
            </div>
          </Form.Group>
          <Form.Group className="row align-items-center mb-2">
            <Form.Label className="col-sm-3" htmlFor="book">Book</Form.Label>
            <div className="col-sm-9">
              <Form.Control id="book" value={bookTitle} onChange={e => setBookTitle(e.target.value)} required />
            </div>
          </Form.Group>
          <Form.Group className="row align-items-center mb-2">
            <Form.Label className="col-sm-3" htmlFor="quote">Quote</Form.Label>
            <div className="col-sm-9">
              <Form.Control as="textarea" id="quote" value={bookQuote} onChange={e => setBookQuote(e.target.value)} required />
            </div>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button variant="primary" onClick={handleUploadNote}>Upload Note</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default MainUploads
