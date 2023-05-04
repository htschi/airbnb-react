import { useState } from 'react'

export default function Booking() {
  const [booking, setBooking] = useState(false)

  function requestBooking(e) {
    e.preventDefault()
    setBooking(true)
    console.log(booking)
  }
  return (
    <div>
      {/* Request Booking */}
      <div className="card" style={{ width: `18rem`, height: `16rem` }}>
        <div className="card-body">
          <h5 className="card-title">$150/night</h5>
          <p className="card-text">0 reviews</p>
          {booking == false ? (
            <form onSubmit={(e) => requestBooking(e)}>
              <div className="mb-3">
                <textarea className="form-control" rows="3"></textarea>
              </div>
              <button className="btn btn-primary">Request booking</button>
            </form>
          ) : (
            <div className="row">
              <div className="alert alert-success" role="alert">
                <span>
                  Thank you for your enquiry.
                  <br />
                  <small>02 Jan 2020 - 01:01</small>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}