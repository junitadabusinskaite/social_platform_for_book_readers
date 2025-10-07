import SimpleNavbar from "./SimpleNavbar"
import { Link } from "react-router-dom"

const Registration = () => {
  return (
    <><SimpleNavbar /><div>
      <div className="container-fluid">
        <div class="row h-100 justify-content-center align-items-center my-5">
          <form class="col-sm-6">
            <h1 class="h3 mb-4 fw-normal text-center">Create Account</h1>

            <div class="row mb-2">
              <label htmlFor="inputEmail3" class="col-sm-3 col-form-label">Email</label>
              <div class="col-sm-9">
                <input type="email" class="form-control" id="email" placeholder="name@example.com" required />
              </div>
            </div>
            <div class="row mb-2">
              <label htmlFor="text" class="col-sm-3 col-form-label">Username</label>
              <div class="col-sm-9">
                <input type="text" class="form-control" id="username" placeholder="username" required />
              </div>
            </div>
            <div class="row mb-2">
              <label htmlFor="inputBirthDate" class="col-sm-3 col-form-label">Birth Date</label>
              <div class="col-sm-9">
                <input type="date" class="form-control" id="inputBirthDate" required />
              </div>
            </div>
            <div class="row mb-2">
              <label htmlFor="inputPassword3" class="col-sm-3 col-form-label">Password</label>
              <div class="col-sm-9">
                <input type="password" class="form-control" id="inputPassword" placeholder="password" required />
              </div>
            </div>
            <div class="row mb-4">
              <label htmlFor="inputPassword3" class="col-sm-3 col-form-label">Repeat Password</label>
              <div class="col-sm-9">
                <input type="password" class="form-control" id="repeatPassword3" placeholder="repeat password" required />
              </div>
            </div>
            <button class="btn btn-primary d-block mx-auto py-1" type="submit">Sign up</button>
            <div class="text-center mt-3">
              Already have an account? <Link to="../login" className="text-black">Log in</Link>!
            </div>
          </form>
        </div>
      </div>
    </div></>
  )
}
  
export default Registration