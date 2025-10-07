import Navbar from "./Navbar"

const Support = () => {
  return (
    <><Navbar /><div>
      <div className="container-fluid">
        <div class="row justify-content-center align-items-center my-4">
          <form class="col-lg-6 col-sm-8 support-form">
            <h1 class="h3 mb-4 fw-normal text-center">Contact us!</h1>
            <p class="mb-3 fw-normal text-center">Write us if you have any suggestions for the page, if you’re experiencing any issues with how the site is working or if you want to report any users</p>

            <div className="row align-items-center mb-2">
              <label htmlFor="message" className="col-sm-3 col-form-label">Your message</label>
              <div className="col-sm-9">
                <textarea className="form-control" id="message" placeholder="Write your message" required />
              </div>
            </div>

            <div className="row align-items-center mb-4">
              <label htmlFor="email" className="col-sm-3 col-form-label">Your email</label>
              <div className="col-sm-9">
                <input type="email" className="form-control" id="email" placeholder="name@example.com" required />
              </div>
            </div>

            <button class="btn btn-primary d-block mx-auto py-1" type="submit">Send</button>
          </form>
        </div>
      </div>
    </div></>
  )
}
  
export default Support