import Navbar from "./Navbar"
import BookBox from "./BookBox"
import { useState } from "react"
import { Modal, Button, Form } from "react-bootstrap"

const HomePage = () => {
  const [showModal, setShowModal] = useState(false)
  const [showPhotoUploadModal, setShowPhotoUploadModal] = useState(false)
  const [showNoteUploadModal, setShowNoteUploadModal] = useState(false)

  const handleClose = () => {
    setShowModal(false)
    setShowPhotoUploadModal(false)
    setShowNoteUploadModal(false)
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

  return (
    <><Navbar /><div>
      <div className="container">
        <div>
          <BookBox image="book1.jpg" bookName="Rebecca Yarros - Fourth Wing" userName="user123" link="./userprofile" />
          <BookBox text="All the stories are true" bookName="Cassandra Clare - City of Bones" userName="reader456" link="./readerprofile" />
          <BookBox image="book2.jpg" bookName="T.J. Clune - The House in the Cerulean Sea" userName="hello123" link="./profile" />
          <BookBox image="book3.jpg" bookName="Ana Huang - Twisted Series" userName="user123" link="./userprofile" />
          <BookBox text="Destroying things is much easier than making them" bookName="Suzanne Collins - The Hunger Games" userName="reader456" link="./readerprofile" />
          <BookBox image="book4.jpg" bookName="J.K. Rowling - Harry Potter" userName="hello123" link="./profile" />
          <BookBox image="book5.jpg" bookName="Leigh Bardugo - Six of Crows" userName="user123" link="./userprofile" />
          <BookBox text="A dragon without its rider is a tragedy. A rider without their dragon is dead" bookName="Rebecca Yarros - Fourth Wing" userName="Reader456" link="./readerprofile" />
          <BookBox text="No mourners, no funerals" bookName="Leigh Bardugo - Six of Crows" userName="hello123" link="./profile" />
          <BookBox image="book6.jpg" bookName="Rachel Gillig - One Dark Window" userName="user123" link="./userprofile" />
          <BookBox image="book7.jpg" bookName="Stephanie Garber - Once Upon A Broken Heart" userName="reader456" link="./readerprofile" />
        </div>
      </div>
    </div>

      <button onClick={handleShow} className="floating-btn">+</button>

      <Modal show={showModal} onHide={handleClose} centered className="custom-modal modal-sm">
        <Modal.Header closeButton />
        <Modal.Body className="d-flex flex-column align-items-center">
          <Button onClick={handleUploadPhotoClick} className="mb-3 w-75">Upload Photo</Button>
          <Button onClick={handleUploadNoteClick} className="mb-3 w-75">Upload Note</Button>
        </Modal.Body>
      </Modal>

      <Modal show={showPhotoUploadModal} onHide={handleClose} centered className="custom-modal">
        <Modal.Header closeButton />
        <Modal.Body>
          <div className="row align-items-center mb-2">
            <label htmlFor="authorName" className="col-sm-3 col-form-label">Author</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="authorName" placeholder="Enter author name" required />
            </div>
          </div>

          <div className="row align-items-center">
            <label htmlFor="bookTitle" className="col-sm-3 col-form-label">Book</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="bookTitle" placeholder="Enter book title" required />
            </div>
          </div>

          <Form.Group controlId="formFile" className="mt-3">
            <div className="file-upload">
              <Button as="label">
                Choose File
                <input type="file" accept="image/*" style={{ display: "none" }} />
              </Button>
            </div>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button variant="primary" onClick={handleClose}>
            Upload New Photo
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showNoteUploadModal} onHide={handleClose} centered className="custom-modal">
        <Modal.Header closeButton />
        <Modal.Body>
          <div className="row align-items-center mb-2">
            <label htmlFor="authorName" className="col-sm-3 col-form-label">Author</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="authorName" placeholder="Enter author name" required />
            </div>
          </div>

          <div className="row align-items-center mb-2">
            <label htmlFor="bookTitle" className="col-sm-3 col-form-label">Book</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="bookTitle" placeholder="Enter book title" required />
            </div>
          </div>

          <div className="row align-items-center">
            <label htmlFor="bookQuote" className="col-sm-3 col-form-label">Quote</label>
            <div className="col-sm-9">
              <textarea className="form-control" id="bookQuote" placeholder="Enter book quote" style={{ height: "100px" }} required />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button variant="primary" onClick={handleClose}>Upload New Note</Button>
        </Modal.Footer>
      </Modal></>
  )
}

export default HomePage