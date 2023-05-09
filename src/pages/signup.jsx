import { Link } from 'react-router-dom'
import axios from 'axios'

export default function SignUp() {
  function getSignUpInfo(e) {
    e.preventDefault()
    let loginIsSuccessed = false
    let loginInfo = axios.post('http://localhost:4000/signup', {
      name: e.target.name.value,
      picture: e.target.picture.value,
      email: e.target.email.value,
      password: e.target.email.value,
    })
  }

  return (
    <div id="backgroundLogin">
      {/* Card */}
      <div className="position-absolute top-50 start-50 translate-middle">
        <div className="card" style={{ width: '40rem' }}>
          {/* Logo */}
          <div className="d-flex justify-content-center align-items-center">
            <img src="images/logo-airbnb.png" className="w-25 pt-2" />
          </div>
          {/* Card Body */}
          <div className="card-body">
            <form onSubmit={(e) => getSignUpInfo(e)}>
              <div className="mb-3 mt-3">
                <label className="form-label">Your Full Name</label>
                <input type="text" className="form-control" name="name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Profile Picture</label>
                <input
                  type="text"
                  placeholder="http://..."
                  className="form-control"
                  name="picture"
                />
              </div>
              <div className="mb-3 mt-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" name="email" />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                />
              </div>
              <button type="submit" className="btn btn-primary mb-3">
                Sign Up
              </button>
              <div>
                <span>
                  Already have an Account?
                  <Link to="/Login">Login</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
