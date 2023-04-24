function Houses() {
    return (
        <div>
            {/* TOP Container with Logo and Account+Login Button */}
            <div className="container p-2">
                <div className="row">
                    {/* Logo */}
                    <div className="col align-self-center">
                        <img src="images/logo-airbnb.png" className="w-25" />
                    </div>
                    {/* Buttons / Links */}
                    <div className="col text-end">
                        <a className="btn btn-outline-secondary">
                            <img src="https://randomuser.me/api/portraits/men/11.jpg" id="avatar-login" />
                            <span>Name</span>
                        </a>
                        <a type="button" className="btn btn-outline-secondary">Login</a>
                    </div>
                </div>
            </div>
            {/* Container with the Settings / Input */}
            <div className="p-3 mb-2 bg-light text-dark">
                <div className="container">
                    <div className="row">
                        {/* Any location */}
                        <div className="col-12 col-md-6 col-lg-2 mb-1">
                            <div className="input-group">
                                <span className="input-group-text">
                                    <i className="fa-solid fa-location-dot"></i>
                                </span>
                                <select className="form-select">
                                    <option selected>Any location</option>
                                    <option value="1">Koh Phangan</option>
                                    <option value="2">Koh Samui</option>
                                    <option value="3">Bali</option>
                                </select>
                            </div>
                        </div>
                        {/* Any room */}
                        <div className="col-12 col-md-6 col-lg-2 mb-1">
                            <div className="input-group">
                                <span className="input-group-text">
                                    <i className="fa-solid fa-house"></i>
                                </span>
                                <select className="form-select">
                                    <option selected>Any rooms</option>
                                    <option value="1">1 Room</option>
                                    <option value="2">2 Rooms</option>
                                    <option value="3">3 Rooms</option>
                                    <option value="4">4 Rooms</option>
                                    <option value="5">5 Rooms</option>
                                </select>
                            </div>
                        </div>
                        {/* Price */}
                        <div className="col-12 col-md-6 col-lg-2 mb-1">
                            <div className="input-group">
                                <span className="input-group-text">
                                    <i className="fa-solid fa-dollar-sign"></i>
                                </span>
                                <input type="number" className="form-control" />
                            </div>
                        </div>
                        {/* Price low to high or high to low */}
                        <div className="col-12 col-md-6 col-lg-2 mb-1">
                            <div className="input-group">
                                <span className="input-group-text">
                                    <i className="fa-solid fa-sort"></i>
                                </span>
                                <select className="form-select">
                                    <option selected>Price (low to high)</option>
                                    <option value="1">Price (high to low)</option>
                                </select>
                            </div>
                        </div>
                        {/* House name */}
                        <div className="col-12 col-md-6 col-lg-2 mb-1">
                            <input type="text" className="form-control" placeholder="House name" />
                        </div>
                        {/* Search Button */}
                        <div className="col-12 col-md-6 col-lg-2 mb-1">
                            <button type="button" className="btn btn-success">Search</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Container with Accommodation Cards */}
            <div className="container p-2">
                {/* First row with 4 cards */}
                <div className="row mt-1">
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <div className="card">
                            <img src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png" className="card-img-top" />
                            <div className="card-body">
                                <p className="card-text fs-6 fw-normal text-muted">
                                    <small><i className="fa-solid fa-location-dot"></i> City • X Rooms</small>
                                </p>
                                <h5 className="card-title fs-5">Luxury Villa in Chaweng</h5>
                                <div className="row">
                                    <div className="col">
                                        <p className="text-start text-muted">
                                            <small><i className="fa-solid fa-thumbs-up"></i> Reviews</small>
                                        </p>
                                    </div>
                                    <div className="col">
                                        <small><p className="text-end text-muted">$150/night</p></small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <div className="card">
                            <img src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png" className="card-img-top" />
                            <div className="card-body">
                                <p className="card-text fs-6 fw-normal text-muted">
                                    <small><i className="fa-solid fa-location-dot"></i> City • X Rooms</small></p>
                                <h5 className="card-title fs-5">Luxury Villa in Chaweng</h5>
                                <div className="row">
                                    <div className="col">
                                        <p className="text-start text-muted">
                                            <small><i className="fa-solid fa-thumbs-up"></i> Reviews</small></p>
                                    </div>
                                    <div className="col">
                                        <p className="text-end text-muted"><small>$150/night</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <div className="card">
                            <img src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png" className="card-img-top" />
                            <div className="card-body">
                                <p className="card-text fs-6 fw-normal text-muted">
                                    <small><i className="fa-solid fa-location-dot"></i> City • X Rooms</small>
                                </p>
                                <h5 className="card-title fs-5">Luxury Villa in Chaweng</h5>
                                <div className="row">
                                    <div className="col">
                                        <p className="text-start text-muted">
                                            <small><i className="fa-solid fa-thumbs-up"></i> Reviews</small>
                                        </p>
                                    </div>
                                    <div className="col">
                                        <small><p className="text-end text-muted">$150/night</p></small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <div className="card">
                            <img src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png" className="card-img-top" />
                            <div className="card-body">
                                <p className="card-text fs-6 fw-normal text-muted">
                                    <small><i className="fa-solid fa-location-dot"></i> City • X Rooms</small></p>
                                <h5 className="card-title fs-5">Luxury Villa in Chaweng</h5>
                                <div className="row">
                                    <div className="col">
                                        <p className="text-start text-muted">
                                            <small><i className="fa-solid fa-thumbs-up"></i> Reviews</small>
                                        </p>
                                    </div>
                                    <div className="col">
                                        <p className="text-end text-muted"><small>$150/night</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Second row with 4 cards */}
                <div className="row mt-1">
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <div className="card">
                            <img src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png" className="card-img-top" />
                            <div className="card-body">
                                <p className="card-text fs-6 fw-normal text-muted">
                                    <small><i className="fa-solid fa-location-dot"></i> City • X Rooms</small></p>
                                <h5 className="card-title fs-5">Luxury Villa in Chaweng</h5>
                                <div className="row">
                                    <div className="col">
                                        <p className="text-start text-muted">
                                            <small><i className="fa-solid fa-thumbs-up"></i> Reviews</small>
                                        </p>
                                    </div>
                                    <div className="col">
                                        <p className="text-end text-muted"><small>$150/night</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3"></div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3"></div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3"></div>
                </div>
            </div>
        </div>
    )
}
