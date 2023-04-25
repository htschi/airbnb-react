export default function SignUp() {
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
            <form>
              <div className="mb-3 mt-3">
                <label className="form-label">Your Full Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Profile Picture</label>
                <input
                  type="text"
                  placeholder="http://..."
                  className="form-control"
                />
              </div>
              <div className="mb-3 mt-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" />
              </div>
              <button type="submit" className="btn btn-primary mb-3">
                Sign Up
              </button>
              <div>
                <span>
                  Already have an Account?
                  <a href="#">Login</a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
