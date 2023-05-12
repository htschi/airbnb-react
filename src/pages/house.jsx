// import { useParams } from react-router-dom
import { useState } from 'react'
import Nav from '../components/nav'
import Reviews from '../components/reviews'
import Booking from '../components/booking'
import { useParams } from 'react-router-dom'

export default function House() {
  const { id } = useParams()
  const [house, setHouse] = useState(null)

  async function getHouse() {
    const response = await axios.get(`http://localhost:4000/houses/${id}`)
    console.log(response.data)
    setHouse(response.data)
  }
  getHouse()

  //UseState for selectedPhoto
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
