// import { useParams } from react-router-dom
import { useState } from 'react'
import Nav from '../components/nav'
import Reviews from '../components/reviews'
import Booking from '../components/booking'
import HouseThumbnail from '../components/houseThumbnail'

export default function House() {
  let house = {
    title: 'Luxury Villa in Koh Phangan',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 350,
    booking: false,
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

  // UseState for selectedPhoto
  const [selectedPhoto, setSelectedPhoto] = useState(house.photos[0])

  function showPhoto(photo) {
    setSelectedPhoto(photo)
  }

  return (
    <div>
      {/* TOP Container with Logo and Account+Login Button */}
      <Nav />
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
            <Reviews />
          </div>
          {/* Container Right Side */}
          <div className="col-12 col-md-4">
            <Booking />
          </div>
        </div>
      </div>
    </div>
  )
}
