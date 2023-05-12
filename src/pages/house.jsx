// import { useParams } from react-router-dom
import { useState, useEffect } from 'react'
import Nav from '../components/nav'
import Reviews from '../components/reviews'
import Booking from '../components/booking'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function House() {
  const { id } = useParams()
  const [house, setHouse] = useState({})
  // UseState for selectedPhoto
  const [selectedPhoto, setSelectedPhoto] = useState('')

  async function getHouse() {
    let response = await axios.get(`http://localhost:4000/houses/${id}`)
    console.log(response.data.photos[0])
    setHouse(response.data)
  }

  function showPhoto(photo) {
    setSelectedPhoto(photo)
  }

  useEffect(() => {
    if (house.photos) {
      console.log(house.photos[0])
      setSelectedPhoto(house.photos[0])
    }
  }, [house])

  useEffect(() => {
    getHouse()
  }, [])

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
            {house.photos &&
              house.photos.map((photo, index) => (
                <div className="col p-2" key={index}>
                  <img
                    src={photo}
                    className="img-fluid"
                    onClick={() => showPhoto(photo)}
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
                {house.host && (
                  <img src={house.host.avatar} id="avatar-house" />
                )}
              </div>
              <div className="col-11 pt-3">
                <span className="fs-6 text-muted">
                  <small>Hosted by</small>
                </span>
                {house.host && <p>{house.host.name}</p>}
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
