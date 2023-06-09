import Nav from '../components/nav'
export default function HouseEdit() {
  return (
    <div>
      {/* TOP Container with Logo and Account+Login Button  */}
      <Nav />
      <form>
        <div className="container mt-5">
          <h3 className="mb-3">Edit House</h3>
          {/* Short Title */}
          <div className="mb-3">
            <label className="form-label">Short Title</label>
            <input type="text" className="form-control" />
          </div>
          {/* Description */}
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea className="form-control" rows="3"></textarea>
          </div>
          {/* Number of Rooms */}
          <div className="mb-3">
            <label className="form-label">Number of Rooms</label>
            <input type="number" className="form-control" />
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
          <div className="mb-5">
            <button type="button" className="btn btn-success">
              Save Changes
            </button>
            <button type="button" className="btn btn-danger m-2">
              Delete Houses
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
