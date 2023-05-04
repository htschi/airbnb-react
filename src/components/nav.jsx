import { Link } from 'react-router-dom'

export default function Nav() {
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
          <Link to="/login" className="btn btn-outline-secondary">
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}
