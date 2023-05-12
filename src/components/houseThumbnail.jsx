import { Link } from 'react-router-dom'
export default function HouseThumbnail({ houses }) {
  return (
    <div className="row mt-1">
      {houses.map((house, index) => (
        <div key={index} className="col-3 col-md-6 col-lg-3 mb-3">
          <Link to="/house" className="card">
            <img src={house.photos} className="card-img-top" />
            <div className="card-body">
              <p className="card-text fs-6 fw-normal text-muted">
                <small>
                  <i className="fa-solid fa-location-dot"></i> {house.location}{' '}
                  • {house.rooms}{' '}
                  {house.rooms == 1 ? <span>Room</span> : <span>Rooms</span>}
                </small>
              </p>
              <h5 className="card-title fs-5 text-decoration-none">
                {house.title}
              </h5>
              <div className="row">
                <div className="col">
                  <p className="text-start text-muted">
                    <small>
                      <i className="fa-solid fa-thumbs-up"></i> Reviews
                    </small>
                  </p>
                </div>
                <div className="col">
                  <small>
                    <p className="text-end text-muted">${house.price}/night</p>
                  </small>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}
