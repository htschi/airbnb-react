import Nav from '../components/nav'

export default function HouseCreate() {
  function getInfo(e) {
    e.preventDefault()
    let houseInfo = {
      shortTitle: e.target.shortTitle.value,
      description: e.target.description.value,
      numberOfRooms: e.target.rooms.value,
      location: e.target.location.value,
      price: e.target.price.value,
      // photo: [e.target.photo.value],
    }
    console.log(houseInfo)
    return houseInfo
  }

  return (
    <div>
      <Nav />
      <form onSubmit={(e) => getInfo(e)}>
        <div className="container mt-5">
          <h3 className="mb-3">List a House</h3>
          {/* Short Title */}
          <div className="mb-3">
            <label className="form-label">Short Title</label>
            <input type="text" className="form-control" name="shortTitle" />
          </div>
          {/* Description */}
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              rows="3"
              name="description"
            ></textarea>
          </div>
          {/* Number of Rooms */}
          <div className="mb-3">
            <label className="form-label">Number of Rooms</label>
            <input type="number" className="form-control" name="rooms" />
          </div>
          {/* Any location */}
          <div className="mb-3">
            <label className="form-label">Location</label>
            <select className="form-select" name="location">
              <option value="1">Koh Phangan</option>
              <option value="2">Koh Samui</option>
              <option value="3">Bali</option>
            </select>
          </div>
          {/* Price */}
          <div className="mb-3">
            <label className="form-label" name="price">
              Price (per Night)
            </label>
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
              name="photo"
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="http://..."
              name="photo"
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="http://..."
              name="photo"
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="http://..."
              name="photo"
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="http://..."
              name="photo"
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="http://..."
              name="photo"
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="http://..."
              name="photo"
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="http://..."
              name="photo"
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="http://..."
              name="photo"
            />
          </div>
          {/* Button Submit */}
          <div className="mb-5">
            <button className="btn btn-success">Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}
