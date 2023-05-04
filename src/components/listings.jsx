export default function Listings() {
  let houses = [
    {
      image:
        'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png',
      title: 'Luxury Villa in Chaweng',
      price: 150,
      location: 'Chaweng',
      rooms: 2,
      reviews: 3,
      score: 1,
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a  little bit longer.',
    },
    {
      image:
        'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png',
      title: 'Luxury Villa in Phangan',
      price: 150,
      location: 'Koh Phangan',
      rooms: 3,
      reviews: 3,
      score: 1,
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a  little bit longer.',
    },
    {
      image:
        'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png',
      title: 'Luxury Villa in Samui',
      price: 150,
      location: 'Samui',
      rooms: 4,
      reviews: 3,
      score: 1,
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a  little bit longer.',
    },
  ]
  return (
    <div className="col-7">
      <div className="pt-2">
        <a className="btn btn-success">List a House</a>
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
                <img src={e.image} className="img-fluid rounded-start" />
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
                  <a type="button" className="btn btn-outline-secondary">
                    Edit
                  </a>
                  <a type="button" className="btn btn-outline-success">
                    View
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  )
}
