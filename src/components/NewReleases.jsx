import Navbar from "./Navbar"
import { OverlayTrigger, Popover } from "react-bootstrap"
import { useState } from "react"
import { Modal, Button} from "react-bootstrap"
import { Link } from "react-router-dom"

const NewReleases = () => {
  const [showModal, setShowModal] = useState(false)
  const handleClose = () => setShowModal(false)
  const handleShow = () => setShowModal(true)

  return (
    <><Navbar /><div>
      <Link to="../forum" className="text-black p-4">← go back to forum</Link>
      <div className='forum-container'>
        <div className="row mt-4 mb-3">
          <div className="col-12 d-flex justify-content-between align-items-center px-3" style={{ height: "60px" }}>
            <Link to="../onyxstormchat"><h5 className="mb-0">Onyx Storm</h5></Link>
            <OverlayTrigger trigger="click" placement="left" overlay={
              <Popover id="popover-basic">
                <Popover.Body>
                  All the theories are here for Rebecca Yarros's new book!
                </Popover.Body>
              </Popover>
            }>
              <button className="btn btn-light rounded-circle circle-btn d-flex justify-content-center align-items-center">i</button>
            </OverlayTrigger>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12 d-flex justify-content-between align-items-center px-3" style={{ height: "60px" }}>
            <h5 className="mb-0">Sunrise on the Reaping</h5>
            <OverlayTrigger trigger="click" placement="left" overlay={
              <Popover id="popover-basic">
                <Popover.Body>
                  Suzzane Collins is about to ruin our lives, so let's chat!
                </Popover.Body>
              </Popover>
            }>
              <button className="btn btn-light rounded-circle circle-btn d-flex justify-content-center align-items-center">i</button>
            </OverlayTrigger>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12 d-flex justify-content-between align-items-center px-3" style={{ height: "60px" }}>
            <h5 className="mb-0">Fearless</h5>
            <OverlayTrigger trigger="click" placement="left" overlay={
              <Popover id="popover-basic">
                <Popover.Body>
                  Can't wait for the last installment of the series by Lauren Roberts!
                </Popover.Body>
              </Popover>
            }>
              <button className="btn btn-light rounded-circle circle-btn d-flex justify-content-center align-items-center">i</button>
            </OverlayTrigger>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12 d-flex justify-content-between align-items-center px-3" style={{ height: "60px" }}>
            <h5 className="mb-0">Rewind it Back</h5>
            <OverlayTrigger trigger="click" placement="left" overlay={
              <Popover id="popover-basic">
                <Popover.Body>
                  Windy city by Liz Tomforde is back!
                </Popover.Body>
              </Popover>
            }>
              <button className="btn btn-light rounded-circle circle-btn d-flex justify-content-center align-items-center">i</button>
            </OverlayTrigger>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12 d-flex justify-content-between align-items-center px-3" style={{ height: "60px" }}>
            <h5 className="mb-0">King of Envy</h5>
            <OverlayTrigger trigger="click" placement="left" overlay={
              <Popover id="popover-basic">
                <Popover.Body>
                  Anna Huang is about to bless us again!
                </Popover.Body>
              </Popover>
            }>
              <button className="btn btn-light rounded-circle circle-btn d-flex justify-content-center align-items-center">i</button>
            </OverlayTrigger>
          </div>
        </div>
      </div>
    </div>

    <button onClick={handleShow} className="floating-btn">+</button>

    <Modal show={showModal} onHide={handleClose} centered className="custom-modal">
      <Modal.Header closeButton />
      <Modal.Body>
        <div className="row align-items-center mb-2">
          <label for="bookTitle" className="col-sm-3 col-form-label">Book</label>
          <div className="col-sm-9">
            <input type="text" className="form-control" id="bookTitle" placeholder="Enter book title" required />
          </div>
        </div>

        <div className="row align-items-center">
          <label for="description" className="col-sm-3 col-form-label">Description</label>
          <div className="col-sm-9">
            <textarea className="form-control" id="description" placeholder="Enter chat description" required />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center">
        <Button variant="primary" onClick={handleClose}>
          Start a new Discussion
        </Button>
      </Modal.Footer>
    </Modal></>
  )
}
  
export default NewReleases