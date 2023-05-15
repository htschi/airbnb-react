import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
axios.defaults.withCredentials = true

export default function Nav() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [user, setId] = useState('')

  async function logout() {
    let user = await axios.get('http://localhost:4000/logout')
    navigate('/login')
  }

  async function getUserId() {
    let response = await axios.get(`http://localhost:4000/profile/${id}`)
    setId(response.data)
  }

  useEffect(() => {
    getUserId()
  }, [])

  return (
    <div className="container p-2">
      <div className="row">
        {/* Logo */}
        <div className="col align-self-center">
          <img src="/images/logo-airbnb.png" className="w-25" />
        </div>
        {/* Buttons / Links */}
        <div className="col text-end">
          <Link
            to={`/profile/${user._id}`}
            className="btn btn-outline-secondary"
          >
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
