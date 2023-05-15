import { useState, useEffect } from 'react'
import Nav from '../components/nav'
import Listings from '../components/listings'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Profile() {
  const { id } = useParams()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [avatar, setAvatar] = useState()
  const [user, setId] = useState('')

  async function setProfileInfo(e) {
    e.preventDefault()
    setName(e.target.name.value)
    setEmail(e.target.email.value)
    setAvatar(e.target.avatar.value)
  }

  async function getUserId() {
    let response = await axios.get(`http://localhost:4000/profile/${id}`)
    setId(response.data)
  }

  useEffect(() => {
    getUserId()
  }, [])

  return (
    <div>
      <Nav />
      {/* Container with 2 Columns */}
      <div className="container p-2">
        <div className="row mt-2 mb-2">
          <div className="col-3 border-bottom border-1">
            <h2 className="fw-normal">Profile</h2>
          </div>
          <div className="col-1"></div>
          <div className="col-8 border-bottom border-1">
            <h2 className="fw-normal">My Listing</h2>
          </div>
        </div>
        {/* Container with Inputs */}
        <div className="container p-2">
          <div className="row">
            {/* Profile Input */}
            <div className="col-3">
              <form onSubmit={(e) => setProfileInfo(e)}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    defaultValue={user.name}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    defaultValue={user.email}
                  />
                </div>
                <div>
                  <span>Profile Picture</span>
                </div>
                <div className="pt-2">
                  <img src={user.avatar} id="avatar-house" />
                </div>
                <div className="pt-2">
                  <input
                    type="text"
                    className="form-control"
                    name="avatar"
                    defaultValue={avatar}
                  />
                  <div className="pt-2">
                    <button className="btn btn-success">Save Changes</button>
                  </div>
                </div>
              </form>
            </div>
            {/* Empty Column */}
            <div className="col-1"></div>
            {/* My Listings Inputs */}
            <Listings />
          </div>
        </div>
      </div>
    </div>
  )
}
