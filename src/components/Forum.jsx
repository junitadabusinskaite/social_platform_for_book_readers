import Navbar from "./Navbar"
import { OverlayTrigger, Popover } from "react-bootstrap"
import { Link } from "react-router-dom"

const Forum = () => {
  return (
    <><Navbar /><div>
      <div className="forum-container">
        <div className="row mt-5 mb-3">
          <div className="col-12 d-flex justify-content-between align-items-center px-3" style={{ height: "60px" }}>
            <Link to="../newreleases"><h5 className="mb-0">New Releases</h5></Link>
            <OverlayTrigger trigger="click" placement="left" overlay={
              <Popover id="popover-basic">
                <Popover.Body>
                  Here you will find discussions about all the upcoming releases!
                </Popover.Body>
              </Popover>}>
              <button className="btn btn-light rounded-circle circle-btn d-flex justify-content-center align-items-center">i</button>
            </OverlayTrigger>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-12 d-flex justify-content-between align-items-center px-3" style={{ height: "60px" }}>
            <h5 className="mb-0">Adaptations</h5>
            <OverlayTrigger trigger="click" placement="left" overlay={
              <Popover id="popover-basic">
                <Popover.Body>
                  Here you will find discussions about all of the bookish adaptations!
                </Popover.Body>
              </Popover>}>
              <button className="btn btn-light rounded-circle circle-btn d-flex justify-content-center align-items-center">i</button>
            </OverlayTrigger>
          </div>
        </div>
        
        <div className="row mb-3">
          <div className="col-12 d-flex justify-content-between align-items-center px-3" style={{ height: "60px" }}>
            <h5 className="mb-0">Romance</h5>
            <OverlayTrigger trigger="click" placement="left" overlay={
              <Popover id="popover-basic">
                <Popover.Body>
                  It's all about the romance books here!
                </Popover.Body>
              </Popover>}>
              <button className="btn btn-light rounded-circle circle-btn d-flex justify-content-center align-items-center">i</button>
            </OverlayTrigger>
          </div>
        </div>
        
        <div className="row mb-3">
          <div className="col-12 d-flex justify-content-between align-items-center px-3" style={{ height: "60px" }}>
            <h5 className="mb-0">Fantasy</h5>
            <OverlayTrigger trigger="click" placement="left" overlay={
              <Popover id="popover-basic">
                <Popover.Body>
                  Who needs real world when you can ride dragons!
                </Popover.Body>
              </Popover>}>
              <button className="btn btn-light rounded-circle circle-btn d-flex justify-content-center align-items-center">i</button>
            </OverlayTrigger>
          </div>
        </div>
        
        <div className="row mb-3">
          <div className="col-12 d-flex justify-content-between align-items-center px-3" style={{ height: "60px" }}>
            <h5 className="mb-0">Classics</h5>
            <OverlayTrigger trigger="click" placement="left" overlay={
              <Popover id="popover-basic">
                <Popover.Body>
                  Let's discuss good ol' classics!
                </Popover.Body>
              </Popover>}>
              <button className="btn btn-light rounded-circle circle-btn d-flex justify-content-center align-items-center">i</button>
            </OverlayTrigger>
          </div>
        </div>
      </div>
    </div></>
  )
}
  
export default Forum