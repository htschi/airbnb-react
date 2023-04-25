export default function Profile() {
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
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Firstname Lastname"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="name@example.com"
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
              <form className="pt-2">
                <input
                  type="email"
                  className="form-control"
                  placeholder="https://..."
                />
                <div className="pt-2">
                  <a href="#" className="btn btn-success">
                    Save Changes
                  </a>
                </div>
              </form>
            </div>
            {/* Empty Column */}
            <div className="col-1"></div>
            {/* My Listings Inputs */}
            <div className="col-7">
              <div className="pt-2">
                <a href="#" className="btn btn-success">
                  List a House
                </a>
              </div>
              {/* No Items Listed
              <!-- <ul className="list-group pt-2">
                <li className="list-group-item">You don't have any houses listed</li>
              </ul>  */}
              {/* Listing 1 House Card */}
              <div className="card mb-3 mt-3" style={{ width: `540px` }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png"
                      className="img-fluid rounded-start"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Luxury Villa in Chaweng</h5>
                      <div className="text-muted">
                        <small>
                          <i className="fa-solid fa-location-dot"></i>
                          <p> 4 Rooms • $150/Night</p>
                        </small>
                      </div>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <a type="button" className="btn btn-outline-secondary">
                        Edit
                      </a>
                      <a type="button" className="btn btn-outline-success">
                        View
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Listing 2 House Card */}
              <div className="card mb-3 mt-3" style={{ width: `540px` }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png"
                      className="img-fluid rounded-start"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Luxury Villa in Chaweng</h5>
                      <div className="text-muted">
                        <small>
                          <p>
                            <i className="fa-solid fa-location-dot"></i> 4 Rooms
                            • $150/Night
                          </p>
                        </small>
                      </div>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <a type="button" className="btn btn-outline-secondary">
                        Edit
                      </a>
                      <a type="button" className="btn btn-outline-success">
                        View
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
