export default function HouseThumbnail(props) {
  return (
    <div>
      {props.map((e, index) => (
        <div key={index} className="col-12 col-md-6 col-lg-3 mb-3">
          <Link to="/house" className="card">
            <img src={e.image} className="card-img-top" />
            <div className="card-body">
              <p className="card-text fs-6 fw-normal text-muted">
                <small>
                  <i className="fa-solid fa-location-dot"></i> {e.location} •{' '}
                  {e.rooms}{' '}
                  {e.rooms == 1 ? <span>Room</span> : <span>Rooms</span>}
                </small>
              </p>
              <h5 className="card-title fs-5 text-decoration-none">
                {e.title}
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
                    <p className="text-end text-muted">${e.price}/night</p>
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
