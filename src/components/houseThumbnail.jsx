import { useState } from 'react'
export default function HouseThumbnail(props) {
  // UseState for selectedPhoto
  const [selectedPhoto, setSelectedPhoto] = useState(props.photos[0])

  function showPhoto(photo) {
    setSelectedPhoto(photo)
  }
  return (
    <div>
      {/* Big Main Picture */}
      <div className="col-12 col-md-6">
        <img src={selectedPhoto} className="img-fluid h-100" id="big-picture" />
      </div>
      {/* Small Pictures */}
      <div className="col-12 col-md-6">
        <div className="row row-cols-3">
          {props.photos.map((e, index) => (
            <div className="col p-2" key={index}>
              <img src={e} className="img-fluid" onClick={() => showPhoto(e)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
