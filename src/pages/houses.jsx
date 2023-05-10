import HouseThumbnail from '../components/houseThumbnail'
import Nav from '../components/nav'
import { Link } from 'react-router-dom'
export default function Houses() {
  let houses = [
    {
      image:
        'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png',
      title: 'Luxury Villa in Chaweng',
      price: 150,
      location: 'Koh Phangan',
      rooms: 3,
      reviews: 3,
      score: 1,
    },
    {
      image:
        'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png',
      title: 'Luxury Villa in Chaweng',
      price: 150,
      location: 'Koh Phangan',
      rooms: 3,
      reviews: 3,
      score: 1,
    },
    {
      image:
        'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png',
      title: 'Luxury Villa in Chaweng',
      price: 150,
      location: 'Koh Phangan',
      rooms: 3,
      reviews: 3,
      score: 1,
    },
    {
      image:
        'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png',
      title: 'Luxury Villa in Paris',
      price: 300,
      location: 'Paris',
      rooms: 3,
      reviews: 3,
      score: 1,
    },
    {
      image:
        'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png',
      title: 'Luxury Villa in Koh Samui',
      price: 400,
      location: 'Koh Samui',
      rooms: 1,
      reviews: 3,
      score: 1,
    },
  ]

  function sendForm(e) {
    e.preventDefault()
    let searchInput = {
      location: e.target.location.value,
      rooms: e.target.rooms.value,
      price: e.target.price.value,
      sort: e.target.sort.value,
      name: e.target.name.value,
    }
    console.log(searchInput)
  }

  return (
    <div>
      {/* TOP Container with Logo and Account+Login Button */}
      <Nav />
      {/* Container with the Settings / Input */}
      <form
        className="p-3 mb-2 bg-light text-dark"
        onSubmit={(e) => sendForm(e)}
      >
        <div className="container">
          <div className="row">
            {/* Any location */}
            <div className="col-12 col-md-6 col-lg-2 mb-1">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <select className="form-select" name="location">
                  <option>Any location</option>
                  <option value="1">Koh Phangan</option>
                  <option value="2">Koh Samui</option>
                  <option value="3">Bali</option>
                </select>
              </div>
            </div>
            {/* Any room */}
            <div className="col-12 col-md-6 col-lg-2 mb-1">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa-solid fa-house"></i>
                </span>
                <select className="form-select" name="rooms">
                  <option>Any rooms</option>
                  <option value="1">1 Room</option>
                  <option value="2">2 Rooms</option>
                  <option value="3">3 Rooms</option>
                  <option value="4">4 Rooms</option>
                  <option value="5">5 Rooms</option>
                </select>
              </div>
            </div>
            {/* Price */}
            <div className="col-12 col-md-6 col-lg-2 mb-1">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa-solid fa-dollar-sign"></i>
                </span>
                <input type="number" className="form-control" name="price" />
              </div>
            </div>
            {/* Price low to high or high to low */}
            <div className="col-12 col-md-6 col-lg-2 mb-1">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa-solid fa-sort"></i>
                </span>
                <select className="form-select" name="sort">
                  <option>Price (low to high)</option>
                  <option value="1">Price (high to low)</option>
                </select>
              </div>
            </div>
            {/* House name */}
            <div className="col-12 col-md-6 col-lg-2 mb-1">
              <input
                type="text"
                className="form-control"
                placeholder="House name"
                name="name"
              />
            </div>
            {/* Search Button */}
            <div className="col-12 col-md-6 col-lg-2 mb-1">
              <button className="btn btn-success">Search</button>
            </div>
          </div>
        </div>
      </form>
      {/* Container with Accommodation Cards */}
      <div className="container p-2">
        {/* First row with 4 cards */}
        <HouseThumbnail houses={houses} />
      </div>
    </div>
  )
}
