export default function HouseCreate() {
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
            <a type="button" class="btn btn-outline-secondary">
              Login
            </a>
          </div>
        </div>
      </div>
      <form>
        <div className="container mt-5">
          <h3 className="mb-3">List a House</h3>
          {/* Short Title */}
          <div className="mb-3">
            <label className="form-label">Short Title</label>
            <input type="text" className="form-control " />
          </div>
          {/* Description */}
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea className="form-control" rows="3"></textarea>
          </div>
          {/* Number of Rooms */}
          <div className="mb-3">
            <label className="form-label">Number of Rooms</label>
            <input type="number" className="form-control " />
          </div>
          {/* Any location */}
          <div className="mb-3">
            <label className="form-label">Location</label>
            <select className="form-select">
              <option selected value="1">
                Koh Phangan
              </option>
              <option value="2">Koh Samui</option>
              <option value="3">Bali</option>
            </select>
          </div>
          {/* Price */}
          <div className="mb-3">
            <label className="form-label">Price (per Night)</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="fa-solid fa-dollar-sign"></i>
              </span>
              <input type="number" className="form-control" />
            </div>
          </div>
          {/* Add Photos */}
          <div className="mb-3">
            <label className="form-label">Add Photos (up to 9)</label>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="http://..."
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="http://..."
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="http://..."
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="http://..."
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="http://..."
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="http://..."
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="http://..."
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="http://..."
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="http://..."
            />
          </div>
          {/* Button Submit */}
          <div class="mb-5">
            <button type="button" class="btn btn-success">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
