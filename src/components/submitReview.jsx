export default function SubmitReview(props) {
  return (
    <div className="card mb-4 mt-5">
      <div className="container">
        <div className="row g-0">
          <div className="col-md-1 pt-3">
            <img src={props.avatar} id="avatar-house" />
          </div>
          <div className="col-md-10">
            <p className="text-muted mt-3">
              <small>{props.date}</small>
            </p>
            <h5 className="mt-1">{props.name}</h5>
            <p>{props.description}</p>
          </div>
          <div className="col-md-1 text-end mt-2">
            {props.rate == 1 ? (
              <i className="fa-solid fa-thumbs-up"></i>
            ) : (
              <i className="fa-solid fa-thumbs-down"></i>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
