import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
axios.defaults.withCredentials = true

export default function Nav() {
  const navigate = useNavigate()
  async function logout() {
    let userToLogout = await axios.get('http://localhost:4000/logout')
    navigate('/login')
  }

  return (
    <div className="container p-2">
      <div className="row">
        {/* Logo */}
        <div className="col align-self-center">
          <img src="images/logo-airbnb.png" className="w-25" />
        </div>
        {/* Buttons / Links */}
        <div className="col text-end">
          <Link to="/profile" className="btn btn-outline-secondary">
            <img
              src="https://randomuser.me/api/portraits/men/11.jpg"
              id="avatar-login"
            />
            <span>My Profile</span>
          </Link>
          <button onClick={logout} className="btn btn-outline-secondary">
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}
