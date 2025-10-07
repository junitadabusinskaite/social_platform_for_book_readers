import Navbar from "./Navbar"
import { useState } from "react"
import { Modal, Button } from "react-bootstrap"

const ManageAccount = () => {
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const handlePasswordClose = () => setShowPasswordModal(false)
  const handlePasswordShow = () => setShowPasswordModal(true)

  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const handleDeleteClose = () => setShowDeleteModal(false)
  const handleDeleteShow = () => setShowDeleteModal(true)

  return (
    <><Navbar /><div>
      <div className="container-fluid">
        <div class="row justify-content-center my-2">
          <form class="col-lg-6 col-sm-9 support-form">
            <h3 class="mb-4 fw-normal text-center ">Manage account</h3>
            <div className="row mb-3">
              <label htmlFor="email" className="col-sm-3 col-form-label">Email</label>
              <div className="col-sm-9">
                <input type="email" className="form-control" id="email" placeholder="name@example.com" value="email@gmail.com" />
              </div>
            </div>

            <div className="row mb-3">
              <label htmlFor="username" className="col-sm-3 col-form-label">Username</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" id="username" placeholder="username" value="hello123" />
              </div>
            </div>

            <div class="row mb-3">
              <label htmlFor="BirthDate" class="col-sm-3 col-form-label">Birth Date</label>
              <div class="col-sm-9">
                <input type="date" class="form-control" id="BirthDate" disabled />
              </div>
            </div>

            <div className="d-flex flex-column">
              <Button className="w-25 mb-4">Save changes</Button>
              <Button onClick={handlePasswordShow} className="w-50">Change password</Button>
              <p className="mt-3">Deleting account is <b>IRREVERSABLE</b></p>
              <Button onClick={handleDeleteShow} className="w-50">Delete account</Button>
            </div>
          </form>
        </div>
      </div>
    </div>

      <Modal show={showPasswordModal} onHide={handlePasswordClose} centered>
        <Modal.Header closeButton className="d-flex justify-content-center">
          <h3 className="w-100 text-center mb-0">Change password</h3>
        </Modal.Header>
        <Modal.Body>
          <div className="row align-items-center mb-2">
            <label for="currentPassword" className="col-sm-4 col-form-label">Current password</label>
            <div className="col-sm-8">
              <input type="passsword" className="form-control" id="currentPassword" placeholder="password" required />
            </div>
          </div>
          <div className="row align-items-center">
            <label for="newPassword" className="col-sm-4 col-form-label">New password</label>
            <div className="col-sm-8">
              <input type="password" className="form-control" id="newPassword" placeholder="password" required />
            </div>
          </div>
          <div className="row align-items-center">
            <label for="repeatPassword" className="col-sm-4 col-form-label">Repeat new password</label>
            <div className="col-sm-8">
              <input type="password" className="form-control" id="repeatPassword" placeholder="password" required />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button onClick={handlePasswordClose}>Save new password</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showDeleteModal} onHide={handleDeleteClose} centered>
        <Modal.Body>
          <p>Are you sure you want to delete this account and remove all of your data from For Book Lovers? This can't be reversed </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleDeleteClose} className="btn btn-secondary">OK</Button>
          <Button onClick={handleDeleteClose} className="btn btn-primary">Close</Button>
        </Modal.Footer>
      </Modal></>
  )
}

export default ManageAccount