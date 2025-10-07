import { useState } from "react"
import { BsThreeDotsVertical, BsTrash, BsPencil } from "react-icons/bs"
import { Modal, Button } from "react-bootstrap"

const UploadsBookBox = ({ image, bookName, text, onEdit, onDelete }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  const [showEditModal, setShowEditModal] = useState(false)
  const handleEditClose = () => setShowEditModal(false)
  
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const handleDeleteClose = () => setShowDeleteModal(false)
  const handleDeleteShow = () => setShowDeleteModal(true)

  const [editAuthor, setEditAuthor] = useState(bookName.split(" - ")[0])
  const [editBook, setEditBook] = useState(bookName.split(" - ")[1] || "")
  const [editQuote, setEditQuote] = useState(text || "")

  const toggleMenu = (e) => {
    e.stopPropagation()
    setShowMenu(!showMenu)
  }

  const handleEditShow = () => {
    setEditAuthor(bookName.split(" - ")[0])
    setEditBook(bookName.split(" - ")[1] || "")
    setEditQuote(text || "")
    setShowEditModal(true)
  }

  const handleEditSave = () => {
    onEdit({
      bookName: `${editAuthor} - ${editBook}`,
      text: editQuote,
    })
    setShowEditModal(false)
  }

  return (
    <>
      <div className="box" tabIndex="0"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {setIsHovered(false); setShowMenu(false)}}
        onFocus={() => setIsHovered(true)}
        onBlur={() => {setIsHovered(false); setShowMenu(false)}}
        style={{ cursor: "pointer" }}
      >
        {/* Image or Note */}
        {image ? (
          <img src={image} rel="preload" alt={bookName} className="img-fluid w-100" />
        ) : (
          <div className="sticky-note">
            <p>{text}</p>
          </div>
        )}

        {/* Overlay on hover */}
        {isHovered && (
          <div className="overlay">
            <div className="d-flex justify-content-between align-items-center">
              <div className="text-white fw-bold">{bookName}</div>
              <div className="position-relative">
                <BsThreeDotsVertical color="white" size={20} style={{ cursor: "pointer" }} onClick={toggleMenu}/>
                {showMenu && (
                  <div className="action-menu position-absolute end-0 bg-white border rounded shadow-sm p-2 mt-1">
                    <div className="d-flex align-items-center mb-2 text-dark" style={{ cursor: "pointer" }} onClick={handleEditShow}>
                      <BsPencil className="me-2" /> Edit
                    </div>
                    <div className="d-flex align-items-center text-danger" style={{ cursor: "pointer" }} onClick={handleDeleteShow}>
                      <BsTrash className="me-2" /> Delete
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={handleEditClose} centered className="custom-modal">
        <Modal.Header closeButton />
        <Modal.Body>
          <div className="row align-items-center mb-2">
            <label htmlFor="editAuthor" className="col-sm-3 col-form-label"> Author </label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="editAuthor" value={editAuthor}
                onChange={(e) => setEditAuthor(e.target.value)} required/>
            </div>
          </div>

          <div className="row align-items-center mb-2">
            <label htmlFor="editBook" className="col-sm-3 col-form-label"> Book </label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="editBook" value={editBook}
                onChange={(e) => setEditBook(e.target.value)} required/>
            </div>
          </div>

          <div className="row align-items-center">
            <label htmlFor="editQuote" className="col-sm-3 col-form-label"> Quote </label>
            <div className="col-sm-9">
              <textarea className="form-control" id="editQuote" placeholder="Enter book quote" value={editQuote}
                onChange={(e) => setEditQuote(e.target.value)}/>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button variant="primary" onClick={handleEditSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Delete Modal */}
      <Modal show={showDeleteModal} onHide={handleDeleteClose} centered className="custom-modal modal-sm">
        <Modal.Body>
          <p>Are you sure you want to delete this post?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteClose}> Cancel </Button>
          <Button variant="danger" onClick={() => {onDelete(); handleDeleteClose}}> Delete </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default UploadsBookBox
