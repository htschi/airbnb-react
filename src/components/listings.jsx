import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Listings({ user }) {
  const [houses, setHousesList] = useState([])

  // get the filtered my houses list back
  async function generateHousesList() {
    let myhouses = await axios.get(`http://localhost:4000/houses/myhouses`)
    console.log(myhouses.data)
    setHousesList(myhouses.data)
  }

  useEffect(() => {
    generateHousesList()
  }, [])

  return (
    <div className="col-7">
      <div className="pt-2">
        <Link to="/housecreate" className="btn btn-success">
          List a House
        </Link>
      </div>
      {houses.length == 0 ? (
        <ul className="list-group pt-2">
          <li className="list-group-item">You don't have any houses listed</li>
        </ul>
      ) : (
        houses.map((e, index) => (
          <div
            key={index}
            className="card mb-3 mt-3"
            style={{ width: `540px` }}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img src={e.photos[0]} className="img-fluid rounded-start" />
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
                  <Link to="/houseedit" className="btn btn-outline-secondary">
                    Edit
                  </Link>
                  <Link to="/house" className="btn btn-outline-success">
                    View
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  )
}
