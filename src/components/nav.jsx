export default function Nav(props) {
  return (
    <div className="container p-2">
      <div className="row">
        {/* Logo */}
        <div className="col align-self-center">
          <img src="images/logo-airbnb.png" className="w-25" />
        </div>
        {/* Buttons / Links */}
        <div className="col text-end">
          <a className="btn btn-outline-secondary">
            <img
              src="https://randomuser.me/api/portraits/men/11.jpg"
              id="avatar-login"
            />
            <span>Name</span>
          </a>
          <a type="button" className="btn btn-outline-secondary">
            Login
          </a>
        </div>
      </div>
    </div>
  )
}
