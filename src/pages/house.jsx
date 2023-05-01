import { useState } from 'react'

// import { useParams } from react-router-dom
import { useState } from 'react'
export default function House() {
  let house = {
    title: 'Luxury Villa in Koh Phangan',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 350,
    booking: Boolean,
    location: 'Koh Phangan',
    rooms: 3,
    rating: 1,
    photos: [
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png',
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_02.png',
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_03.png',
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_04.png',
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_05.png',
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_06.png',
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_07.png',
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_08.png',
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_09.png',
    ],
    host: {
      name: 'Max Mustermann',
      avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
    },
  }

  let review = {
    date: '02 Jan 2020 - 01:01',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content. This content is  little bit longer',
    rating: 1,
    author: {
      name: 'Anna Mustermann',
      avatar: 'https://randomuser.me/api/portraits/women/13.jpg',
    },
  }

  const [selectedPhoto, setSelectedPhoto] = useState(house.photos[0])

  function showPhoto(photo) {
    setSelectedPhoto(photo)
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
      {/* Container with House Pictures */}
      <div className="row border border-1">
        {/* Big Main Picture */}
        <div className="col-12 col-md-6">
          <img
            src={selectedPhoto}
            className="img-fluid h-100"
            id="big-picture"
          />
        </div>
        {/* Small Pictures */}
        <div className="col-12 col-md-6">
          <div className="row row-cols-3">
            {house.photos.map((e, index) => (
              <div className="col p-2" key={index}>
                <img
                  src={e}
                  className="img-fluid"
                  onClick={() => showPhoto(e)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Container Text and Textarea */}
      <div className="container mt-3">
        <div className="row">
          {/* Container Left Side */}
          <div className="col-12 col-md-8">
            <h2>{house.title}</h2>
            <p className="card-text fs-6 fw-normal">
              <small>
                <i className="fa-solid fa-location-dot"></i> {house.location} •{' '}
                {house.rooms}{' '}
                {house.rooms == 1 ? <span>Room</span> : <span>Rooms</span>}
              </small>
            </p>
            <div className="row">
              <div className="col-1 d-flex align-items-center">
                <img src={house.host.avatar} id="avatar-house" />
              </div>
              <div className="col-11 pt-3">
                <span className="fs-6 text-muted">
                  <small>Hosted by</small>
                </span>
                <p>{house.host.name}</p>
              </div>
            </div>
            <p>{house.description}</p>
            <h2 className="mt-5">0 Reviews</h2>
            <span>Leave a review</span>
            <form>
              <div>
                <textarea className="form-control" rows="3"></textarea>
              </div>
              {/* Dumbs up & Dumps Down Button */}
              <div className="mt-2 mb-2">
                <button type="button" className="btn btn-outline-secondary">
                  <i className="fa-solid fa-thumbs-up"></i>
                </button>
                <button type="button" className="btn btn-outline-secondary">
                  <i className="fa-solid fa-thumbs-down"></i>
                </button>
              </div>
              {/* Submit Button */}
              <a href="#" className="btn btn-primary">
                Submit
              </a>
            </form>
            {/* With Reviews */}
            <div className="card mb-4 mt-5">
              <div className="container">
                <div className="row g-0">
                  <div className="col-md-1 pt-3">
                    <img src={review.author.avatar} id="avatar-house" />
                  </div>
                  <div className="col-md-10">
                    <p className="text-muted mt-3">
                      <small>{review.date}</small>
                    </p>
                    <h5 className="mt-1">{review.author.name}</h5>
                    <p>{review.description}</p>
                  </div>
                  <div className="col-md-1 text-end mt-2">
                    <i className="fa-solid fa-thumbs-up"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-4 mt-3">
              <div className="container">
                <div className="row g-0">
                  <div className="col-md-1 pt-3">
                    <img src={review.author.avatar} id="avatar-house" />
                  </div>
                  <div className="col-md-10">
                    <p className="text-muted mt-3">
                      <small>{review.date}</small>
                    </p>
                    <h5 className="mt-1">{review.author.name}</h5>
                    <p>{review.description}</p>
                  </div>
                  <div className="col-md-1 text-end mt-2">
                    <i className="fa-solid fa-thumbs-up"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Container Right Side */}
          <div className="col-12 col-md-4">
            {/* <!-- <div className="card" style={{width: `18rem`; height: `16rem`}}>
              <div className="card-body">
                <h5 className="card-title">$150/night</h5>
                <p className="card-text">0 reviews</p>
                <div className="mb-3">
                  <textarea className="form-control" rows="3"></textarea>
                </div>
                <a href="#" className="btn btn-primary">Request booking</a>
              </div>
            </div> --> */}
            {/* Review Submitted */}
            <div className="card" style={{ width: `18rem` }}>
              <div className="card-body">
                <h5 className="card-title">${house.price}/night</h5>
                <p className="card-text">
                  <small>
                    <i className="fa-solid fa-thumbs-up"></i> 0 reviews
                  </small>
                </p>
                <div className="row">
                  <div className="alert alert-success" role="alert">
                    <span>
                      Thank you for your enquiry.
                      <br />
                      <small>{review.date}</small>
                    </span>
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
