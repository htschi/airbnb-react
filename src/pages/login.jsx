import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

let loginIsSuccessed = false
export default function Login() {
  const navigate = useNavigate()

  async function getLoginInfo(e) {
    e.preventDefault()
    let responseFromAPI = await axios.post('http://localhost:4000/login', {
      email: e.target.email.value,
      password: e.target.password.value,
    })
    if (responseFromAPI.data !== 'User does not exist') {
      loginIsSuccessed = true
      navigate('/')
    } else {
      loginIsSuccessed = false
    }
  }

  return (
    <div id="backgroundLogin">
      <div className="position-absolute top-50 start-50 translate-middle">
        <div className="card" style={{ width: `18rem` }}>
          {/* Logo */}
          <div className="d-flex justify-content-center align-items-center">
            <img src="images/logo-airbnb.png" className="w-25 pt-2" />
          </div>
          {/* Card Body */}
          <div className="card-body">
            <form onSubmit={(e) => getLoginInfo(e)}>
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
                Login
              </button>
              <div>
                <span>
                  New to Airbnb?
                  <Link to="/">Sign Up</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
