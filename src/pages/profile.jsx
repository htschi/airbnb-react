import { useState } from 'react'

export default function Profile() {
  let houses = [
    {
      image:
        'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png',
      title: 'Luxury Villa in Chaweng',
      price: 150,
      location: 'Chaweng',
      rooms: 2,
      reviews: 3,
      score: 1,
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a  little bit longer.',
    },
    {
      image:
        'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png',
      title: 'Luxury Villa in Phangan',
      price: 150,
      location: 'Koh Phangan',
      rooms: 3,
      reviews: 3,
      score: 1,
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a  little bit longer.',
    },
    {
      image:
        'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png',
      title: 'Luxury Villa in Samui',
      price: 150,
      location: 'Samui',
      rooms: 4,
      reviews: 3,
      score: 1,
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a  little bit longer.',
    },
  ]

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [avatar, setAvatar] = useState()

  function setProfileInfo(e) {
    e.preventDefault()
    setName(e.target.name.value)
    setEmail(e.target.email.value)
    setAvatar(e.target.avatar.value)
    let user = {
      name: e.target.name.value,
      email: e.target.email.value,
      avatar: e.target.avatar.value,
    }
    return user
  }

  return (
    <div>
      {/* TOP Container with Logo and Account+Login Button */}
      <div className="container p-2">
        <div className="row">
          {/* Logo */}
          <div className="col align-self-center">
            <img src="images/logo-airbnb.png" className="w-25" />
          </div>
          {/* Buttons / Links */}
          <div className="col text-end">
            <a className="btn btn-outline-secondary">
              <img
                src="https://randomuser.me/api/portraits/men/11.jpg"
                id="avatar-login"
              />
              <span>Name</span>
            </a>
            <a type="button" className="btn btn-outline-secondary">
              Login
            </a>
          </div>
        </div>
      </div>
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
                    value={name}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={email}
                  />
                </div>
                <div>
                  <span>Profile Picture</span>
                </div>
                <div className="pt-2">
                  <img
                    src="https://randomuser.me/api/portraits/men/13.jpg"
                    id="avatar-house"
                  />
                </div>
                <div className="pt-2">
                  <input
                    type="text"
                    className="form-control"
                    name="avatar"
                    value={avatar}
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
            <div className="col-7">
              <div className="pt-2">
                <a className="btn btn-success">List a House</a>
              </div>
              {/* No Items Listed
              <!-- <ul className="list-group pt-2">
                <li className="list-group-item">You don't have any houses listed</li>
              </ul>  */}
              {/* Listing 1 House Card */}
              {houses.length == 0 ? (
                <h4>You don't have any houses</h4>
              ) : (
                houses.map((e, index) => (
                  <div className="card mb-3 mt-3" style={{ width: `540px` }}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={e.image}
                          className="img-fluid rounded-start"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{e.title}</h5>
                          <div className="text-muted">
                            <small>
                              <i className="fa-solid fa-location-dot"></i>
                              <p>
                                {' '}
                                {e.rooms} Rooms • ${e.price}/Night
                              </p>
                            </small>
                          </div>
                          <p className="card-text">{e.description}</p>
                          <a
                            type="button"
                            className="btn btn-outline-secondary"
                          >
                            Edit
                          </a>
                          <a type="button" className="btn btn-outline-success">
                            View
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
