import SimpleNavbar from "./SimpleNavbar"
import { useState } from "react"
import { Modal, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const LogIn = () => {
  const [showModal, setShowModal] = useState(false)
  const handleClose = () => setShowModal(false)
  const handleShow = () => setShowModal(true)
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = () => setSubmitted(true)

  return (
    <><SimpleNavbar /><div>
      <div className="container-fluid">
        <div class="row justify-content-center align-items-center my-5">
          <form class="col-sm-6">
            <h1 class="h3 mb-4 fw-normal text-center">Log in</h1>
        
            <div class="row mb-2">
              <label htmlFor="email" class="col-sm-3 col-form-label">Email</label>
              <div class="col-sm-9">
                <input type="email" class="form-control" id="email" placeholder="name@example.com" required />
              </div>
            </div>
            <div class="row">
              <label htmlFor="password" class="col-sm-3 col-form-label">Password</label>
              <div class="col-sm-9">
                <input type="password" class="form-control" id="password" placeholder="password" required />
              </div>
            </div>
            <div class="text-end mb-2 small">
              <Link onClick={handleShow} style={{cursor: "pointer"}}>Forgot password?</Link>
            </div>
            <button class="btn btn-primary d-block mx-auto py-1" type="submit">Log in</button>
            <div class="text-center mt-3">
              Don't have an account? <Link to="../signup" className="text-black">Sign up</Link>!
            </div>
          </form>
        </div>
      </div>
    </div>
      
    <Modal show={showModal} onHide={handleClose} centered className="custom-modal">
      <Modal.Header closeButton className="d-flex justify-content-center">
        <h3 className="w-100 text-center mb-0">Forgot password?</h3>
      </Modal.Header>
      <Modal.Body>
        <div className="row align-items-center">
          <label htmlFor="email1"className="col-sm-3 col-form-label">Email</label>
          <div className="col-sm-9">
            <input type="email" className="form-control" id="email1" placeholder="name@example.com" required />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center">
        <Button onClick={handleSubmit}>Send me reset password instructions</Button>
        {submitted && (
          <p className="mt-3 text-success text-center">
            Check your email for further password reset instructions.
          </p>
        )}
      </Modal.Footer>
    </Modal></>
  )
}
  
export default LogIn