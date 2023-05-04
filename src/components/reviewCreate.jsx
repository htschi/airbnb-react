import { useState } from 'react'

export default function ReviewCreate() {
  const [comment, setComment] = useState('')
  const [thumbs, setThumbs] = useState(1)
  const [reviews, setReviews] = useState([])

  // Submitting Review
  function getReview(e, comment, thumbs) {
    e.preventDefault()
    console.log(comment)
    let newReview = {
      date: '02 Jan 2020 - 01:01',
      description: comment,
      rating: thumbs,
      author: {
        name: 'Anna Mustermann',
        avatar: 'https://randomuser.me/api/portraits/women/13.jpg',
      },
    }
    setReviews([...reviews, newReview]) // Spread-Operator: take the arr of reviews and add newReview to it
  }

  return (
    <div>
      <form onSubmit={(e) => getReview(e, comment, thumbs)}>
        <div>
          <textarea
            className="form-control"
            rows="3"
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>
        {/* Thumbs Up & Thumbs Down Button */}
        <div className="mt-2 mb-2">
          <button
            className="btn btn-outline-secondary"
            onClick={() => setThumbs(1)}
            type="button"
          >
            <i className="fa-solid fa-thumbs-up"></i>
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() => setThumbs(-1)}
            type="button"
          >
            <i className="fa-solid fa-thumbs-down"></i>
          </button>
        </div>
        {/* Submit Button */}
        <button className="btn btn-primary">Submit</button>
      </form>
      {/* With Reviews */}
      {reviews.map((e) => (
        <div className="card mb-4 mt-5">
          <div className="container">
            <div className="row g-0">
              <div className="col-md-1 pt-3">
                <img src={e.author.avatar} id="avatar-house" />
              </div>
              <div className="col-md-10">
                <p className="text-muted mt-3">
                  <small>{e.date}</small>
                </p>
                <h5 className="mt-1">{e.author.name}</h5>
                <p>{e.description}</p>
              </div>
              <div className="col-md-1 text-end mt-2">
                {e.rating == 1 ? (
                  <i className="fa-solid fa-thumbs-up"></i>
                ) : (
                  <i className="fa-solid fa-thumbs-down"></i>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
